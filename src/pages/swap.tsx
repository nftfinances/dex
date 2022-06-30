import type { NextPageWithLayout } from '@/types';
import { useState } from 'react';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import TradeLayout from '@/layouts/_trade-layout';
import Button from '@/components/ui/button';
import CoinInput from '@/components/ui/coin-input';
import TransactionInfo from '@/components/ui/transaction-info';
import { SwapIcon } from '@/components/icons/swap-icon';

import ABI from "@/contracts/swap.json";
import detectEthereumProvider from '@metamask/detect-provider';

import Web3 from "web3";

const abi = ABI;
var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);
    //const accounts = await web3.eth.requestAccounts();
    //console.log(accounts);
}

enable();
const temp = 0;

async function dec(count, count1){
      let swap_contract = new web3.eth.Contract(ABI, "0x0e51aA105821f459998aFBDFf2864F44ae67aE41");

      const greeting = await swap_contract.methods.check_apy_a("0x34De3E504892841e0247931582028bEbbF27220d").call();
      console.log("tt");
      console.log(greeting);
      console.log("tt");
      console.log(count.coin);
      console.log(count1.value);

      
      
      const accounts = await web3.eth.requestAccounts();

      var dataFie = swap_contract.methods.swap_usdc_df(1).encodeABI(); //user address to CONTRACT
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: "0x0e51aA105821f459998aFBDFf2864F44ae67aE41",  //BUSD Contract Address
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

const decrementDouble = async () => {
      let swap_contract = new web3.eth.Contract(ABI, "0x0e51aA105821f459998aFBDFf2864F44ae67aE41");

      const greeting = await swap_contract.methods.check_apy_a("0x34De3E504892841e0247931582028bEbbF27220d").call();
      console.log("tt");
      console.log(greeting);
      console.log(count);
      
      const accounts = await web3.eth.requestAccounts();

      var dataFie = swap_contract.methods.swap_usdc_df(1).encodeABI(); //user address to CONTRACT
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: "0x0e51aA105821f459998aFBDFf2864F44ae67aE41",  //BUSD Contract Address
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);

};

const SwapPage: NextPageWithLayout = () => {
  const [count, setCount] = useState();
  const [count1, setCount1] = useState();

  let [toggleCoin, setToggleCoin] = useState(false);
  return (
    <>
      <NextSeo
        title="Swap"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <TradeLayout>
        <div className="mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6">
          <div
            className={cn(
              'relative flex gap-3',
              toggleCoin ? 'flex-col-reverse' : 'flex-col'
            )}
          >
            <CoinInput
              label={'From'}
              exchangeRate={0.0}
              defaultCoinIndex={0}
              getCoinValue={(data) =>  setCount(data) }
            />
            <div className="absolute top-1/2 left-1/2 z-[1] -mt-4 -ml-4 rounded-full bg-white shadow-large dark:bg-gray-600">
              <Button
                size="mini"
                color="gray"
                shape="circle"
                variant="transparent"
                onClick={() => setToggleCoin(!toggleCoin)}
              >
                <SwapIcon className="h-auto w-3" />
              </Button>
            </div>
            <CoinInput
              label={'To'}
              exchangeRate={0.0}
              defaultCoinIndex={1}
              getCoinValue={(data) => setCount1(data)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:gap-[18px]">
          <TransactionInfo label={'Min. Received'} />
          <TransactionInfo label={'Rate'} />
          <TransactionInfo label={'Offered by'} />
          <TransactionInfo label={'Price Slippage'} value={'1%'} />
          <TransactionInfo label={'Network Fee'} />
          <TransactionInfo label={'Criptic Fee'} />
        </div>
        <Button
          size="large"
          shape="rounded"
          fullWidth={true}
          className="mt-6 uppercase xs:mt-8 xs:tracking-widest sendEthButton2"
          onClick={() => dec(count, count1)}
        >
          SWAP
        </Button>
      </TradeLayout>
    </>
  );
};

export default SwapPage;
