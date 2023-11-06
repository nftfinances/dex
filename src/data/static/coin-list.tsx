import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Doge } from '@/components/icons/doge';
import { Doge as PB } from '@/components/icons/doge'; // TODO PB アイコン不明につき、仮で設置
import { CURRENCY_ID } from '@/constants';

export type CoinType = {
  id: CURRENCY_ID;
  icon: JSX.Element;
  name: string;
};

export const coinList: CoinType[] = [
  {
    id: CURRENCY_ID.USDT,
    icon: <Tether />,
    name: 'Tether USD',
  },
  {
    id: CURRENCY_ID.USDC,
    icon: <Usdc />,
    name: 'USD Coin',
  },
  {
    id: CURRENCY_ID.BUSD,
    icon: <Bnb />,
    name: 'Binance USD',
  },
  {
    id: CURRENCY_ID.DF,
    icon: <Doge />,
    name: 'NF TOKEN',
  },
];
