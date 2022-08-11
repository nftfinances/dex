import { FC, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import { ChevronDown } from '@/components/icons/chevron-down';
import { useClickAway } from '@/lib/hooks/use-click-away';
import { useLockBodyScroll } from '@/lib/hooks/use-lock-body-scroll';
import { CURRENCY_ID, CURRENCY_CODE, EXCHANGE_RATE_VS_DF } from '@/constants';

import { Tether as IconUSDT } from '@/components/icons/tether';
import { Bnb as IconBUSD } from '@/components/icons/bnb';
import { Usdc as IconUSDC } from '@/components/icons/usdc';
import { Doge as IconDF } from '@/components/icons/doge';
import { Doge as IconPB } from '@/components/icons/doge';

// dynamic import
const CoinSelectView = dynamic(
  () => import('@/components/ui/coin-select-view')
);

type Props = {
  label: string;
  amountInDF: number | null;
  currencyId: CURRENCY_ID;
  onAmountChange( amount: number | null ): void;
  onCurrencyTypeChange( currencyId: CURRENCY_ID ): void;
}

const decimalPattern = /^[0-9]*[.,]?[0-9]*$/;
const MAX_NUMBER = 1000000000; // 浮動小数の誤差防止のため、入力最大値を決めておく
const MAX_DECIMAL_DIGIT = 5;

export const CoinInput: FC<Props> = ( {
  label,
  amountInDF,
  currencyId,
  onAmountChange,
  onCurrencyTypeChange,
} ) => {

  const [ value, setValue ] = useState<string>(
    amountInDF === null ?
      '' :
      ( Math.round( amountInDF * EXCHANGE_RATE_VS_DF[ currencyId ] * 100 ) / 100 ).toString()
  );
  const [visibleCoinList, setVisibleCoinList] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useClickAway(modalContainerRef, () => {
    setVisibleCoinList(false);
  });
  useLockBodyScroll(visibleCoinList);

  const convertValueToDF = useCallback(
    ( value: number ) => ( Math.floor( + value * EXCHANGE_RATE_VS_DF[ currencyId ] * Math.pow( 10, MAX_DECIMAL_DIGIT + 1 ) ) / Math.pow( 10, MAX_DECIMAL_DIGIT + 1 ) ),
    [ currencyId ]
  );

  const convertDFToValue = useCallback(
    ( value: number ) => ( Math.round( + value / EXCHANGE_RATE_VS_DF[ currencyId ] * Math.pow( 10, MAX_DECIMAL_DIGIT ) ) / Math.pow( 10, MAX_DECIMAL_DIGIT ) ),
    [ currencyId ]
  );

  useEffect( () => {

    if ( amountInDF === null ) return;
    if ( amountInDF === convertValueToDF( + value ) ) return;

    setValue( convertDFToValue( amountInDF ).toString() );

  }, [ value, amountInDF, convertDFToValue ] );

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if ( event.target.value.trim() === '.' ) return;
    if ( ! decimalPattern.test( event.target.value ) ) return;
    if ( MAX_NUMBER < + event.target.value ) return;

    setValue( event.target.value );
    onAmountChange( + convertValueToDF( + event.target.value ).toString().replace( new RegExp( `(\\.[0-9]{${ MAX_DECIMAL_DIGIT }}).+` ), '$1' ) );

  };

  const handleSelectedCoin = ( currencyId: CURRENCY_ID ) => {

    onCurrencyTypeChange( currencyId );
    setVisibleCoinList( false );

  };

  return (
    <>
      <div
        className={cn(
          'group flex min-h-[70px] rounded-lg border border-gray-200 transition-colors duration-200 hover:border-gray-900 dark:border-gray-700 dark:hover:border-gray-600',
        )}
      >
        <div className="min-w-[80px] border-r border-gray-200 p-3 transition-colors duration-200 group-hover:border-gray-900 dark:border-gray-700 dark:group-hover:border-gray-600">
          <span className="mb-1.5 block text-xs uppercase text-gray-600 dark:text-gray-400">
            {label}
          </span>
          <button
            onClick={() => setVisibleCoinList(true)}
            className="flex items-center font-medium outline-none dark:text-gray-100"
          >
            {
              currencyId === CURRENCY_ID.USDT ? <IconUSDT /> :
              currencyId === CURRENCY_ID.USDC ? <IconUSDC /> :
              currencyId === CURRENCY_ID.BUSD ? <IconBUSD /> :
              currencyId === CURRENCY_ID.DF ? <IconDF /> :
              currencyId === CURRENCY_ID.PB ? <IconPB /> :
              null
            }
            <span className="ltr:ml-2 rtl:mr-2">{ CURRENCY_CODE[ currencyId ] } </span>
            <ChevronDown className="ltr:ml-1.5 rtl:mr-1.5" />
          </button>
        </div>
        <div className="flex flex-1 flex-col text-right">
          <input
            type="text"
            value={ value.replace( new RegExp( `(\\.[0-9]{${ MAX_DECIMAL_DIGIT }}).+` ), '$1' ) }
            placeholder="0.0"
            inputMode="decimal"
            onChange={ handleOnChange }
            onInput={ handleOnChange }
            className="w-full rounded-tr-lg rounded-br-lg border-0 pb-0.5 text-right text-lg outline-none focus:ring-0 dark:bg-light-dark"
          />
          <span className="font-xs px-3 text-gray-400">
            = $ { EXCHANGE_RATE_VS_DF[ currencyId ].toFixed( 2 ) }
          </span>
        </div>
      </div>

      <AnimatePresence>
        {visibleCoinList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gray-700 bg-opacity-60 p-4 text-center backdrop-blur xs:p-5"
          >
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-full align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              ref={modalContainerRef}
              className="inline-block text-left align-middle"
            >
              <CoinSelectView
                onSelect={(selectedCoinCode) => handleSelectedCoin(selectedCoinCode)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
