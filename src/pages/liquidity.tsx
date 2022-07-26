import type { NextPageWithLayout } from '@/types';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import TradeLayout from '@/layouts/_trade-layout';
import Button from '@/components/ui/button';
import CoinInput from '@/components/ui/coin-input1';
import TransactionInfo from '@/components/ui/transaction-info';
import { Plus } from '@/components/icons/plus';
import ActiveLink from '@/components/ui/links/active-link';

import ABI from "@/contracts/pool.json";
import tokenABI from "@/contracts/token.json";

import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";

const abi = ABI;
const tokenabi = tokenABI;

var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);
}

enable();

async function dec(count, count1){
      let pool_contract = new web3.eth.Contract(ABI, "0x1019F470D86B03aB8f814080816F83f1D545D87c");

      const greeting = await pool_contract.methods.check_apy_a("0x34De3E504892841e0247931582028bEbbF27220d").call();
      const pool_method = "pool_contract.methods.pool" + "_" + count.coin.toLowerCase() + "_" +count1.coin.toLowerCase() + "(" + count.value + ").encodeABI()";
      console.log(pool_method);

      const accounts = await web3.eth.requestAccounts();

      //var dataFie = swap_contract.methods.swap_usdc_df(1).encodeABI(); //user address to CONTRACT
      var dataFie = eval(pool_method); //user address to CONTRACT

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: "0x1019F470D86B03aB8f814080816F83f1D545D87c",  //BUSD Contract Address
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

async function approve(count){
  console.log(count);
  if (count.coin == "USDT"){
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
  } else if( count.coin == "USDC") {
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  } else if( count.coin == "BUSD") {
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  } else if( count.coin == "PB") {
    var token_add = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
  }  else if( count.coin == "DF") {
    var token_add = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add);

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();
  var heko = BigInt(10000*Math.pow(10, 18));

  // pool contract address
  var dataFie = token_contract.methods.approve("0x1019f470d86b03ab8f814080816f83f1d545d87c", heko).encodeABI(); 

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: token_add,  //BUSD Contract Address
            data: dataFie,
            gas: '1d184',
        },
    ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
}

async function approve1(count1){
  console.log(count1);
  if (count1.coin == "USDT"){
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
  } else if( count1.coin == "USDC") {
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  } else if( count1.coin == "BUSD") {
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  } else if( count1.coin == "PB") {
    var token_add = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
  }  else if( count1.coin == "DF") {
    var token_add = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add);

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();
  var heko = BigInt(10000*Math.pow(10, 18));

  // pool contract address
  var dataFie = token_contract.methods.approve("0x1019f470d86b03ab8f814080816f83f1d545d87c", heko).encodeABI(); 

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: token_add,  //BUSD Contract Address
            data: dataFie,
            gas: '1d184',
        },
    ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
}

const LiquidityPage: NextPageWithLayout = () => {
  const [count, setCount] = useState();
  const [count1, setCount1] = useState();

  return (
    <>
      <NextSeo
        title="Liquidity"
        description="DREAM FINANCE"
      />
      <TradeLayout>
        <div className="mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6">
          <div className="relative flex flex-col gap-3">
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
              >
                <Plus className="h-auto w-3" />
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
          <TransactionInfo label={'13.77 eth per btc'} value={'0%'} />
          <TransactionInfo
            label={'0.072631 Btc per ETH'}
            value={'Share of Pool'}
          />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2.5 xs:mt-8">
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="uppercase"
              onClick={() => approve(count)}
            >
              Approve 1
            </Button>
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="uppercase"
              onClick={() => approve1(count1)}
            >
              Approve 2
            </Button>
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="mt-6 uppercase xs:mt-8 xs:tracking-widest sendEthButton2"
              onClick={() => dec(count, count1)}
            >
              POOL
            </Button>
        </div>
      </TradeLayout>
    </>
  );
};

export default LiquidityPage;
