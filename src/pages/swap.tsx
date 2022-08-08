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
import tokenABI from "@/contracts/token.json";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import { chain } from 'lodash';

const abi = ABI;
var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);
    //const web3 = new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/317a3a523e064dafa40cb8e6a3e71190")
    //const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/317a3a523e064dafa40cb8e6a3e71190"));
    //const web3 = window.web3.currentProvider
    
    //const accounts = await web3.eth.requestAccounts();
    //const accounts = await web3.eth.accounts[0];
    //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //console.log(accounts);

    //const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    //if (provider && window.ethereum?.isMetaMask) {
      //console.log('Welcome to MetaMask User🎉');
      
      //web3 = new Web3(Web3.givenProvider);
      //web3.eth.defaultChain = "mainnet";

      //const accounts = await web3.eth.requestAccounts();
    //} else {
      //console.log('Please Install MetaMask🙇‍♂️')
    //}

    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    const chainId = await provider.request({
          method: 'eth_chainId'
        })
    console.log(chainId);
    if( chainId != "0x38"){
      alert('PLEASE CHANGE NETWORK');
    }
  
}

enable();
const temp = 0;

async function dec(count, count1){
      const accounts = await web3.eth.requestAccounts();

      let swap_contract = new web3.eth.Contract(ABI, "0xf4f2ac934c247b29d3b798da6bbc0074d23b81f0");

      //var heko = BigInt(count.value*Math.pow(10, 18)).toString();
      const swap_method = "swap_contract.methods.swap" + "_" + count.coin.toLowerCase() + "_" +count1.coin.toLowerCase() + "(" + count.value + ").encodeABI()";
      //const swap_method = "swap_contract.methods.swap" + "_" + count.coin.toLowerCase() + "_" +count1.coin.toLowerCase() + "(" + count.value + ").encodeABI()";
      console.log(swap_method);

      //var dataFie = swap_contract.methods.swap_usdt_busd(heko).encodeABI(); //user address to CONTRACT
      var dataFie = eval(swap_method); //user address to CONTRACT

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: "0xf4f2ac934c247b29d3b798da6bbc0074d23b81f0",  //BUSD Contract Address
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

async function dec_approve(count, count1){
  if (count.coin == "USDT"){
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
    //var token_add = "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"; //test net address
    console.log("USDT");
  } else if( count.coin == "USDC") {
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
    console.log("USDC");
  } else if( count.coin == "BUSD") {
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    console.log("BUSD");
  } else if( count.coin == "PB") {
    var token_add = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
    console.log("PB");
  }  else if( count.coin == "DF") {
    var token_add = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
    console.log("DF");
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add);

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();
  var heko = BigInt(100000*Math.pow(10, 18));

  // pool contract address
  var dataFie = token_contract.methods.approve("0xf4f2ac934c247b29d3b798da6bbc0074d23b81f0", heko).encodeABI(); 

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

};

async function dec2(count){
  return count.value*0.1;
};


const SwapPage: NextPageWithLayout = () => {
  const [count, setCount] = useState();
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();

  const [emailTxt, SetEmailTxt] = useState("");
  const onChangeEmail = (e) => {
    const targetValue = e.target.value;    
    SetEmailTxt(targetValue);
  }

  let [toggleCoin, setToggleCoin] = useState(false);
  return (
    <>
      <NextSeo
        title="Swap ~ DREAM FINANCE"
        description="DreamFinance is a DEX that will revolutionize the Casino industry. Users and platformers should play as equals and have fun."
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
              exchangeRate={emailTxt}
              defaultCoinIndex={0}
              getCoinValue={(data) => setCount(data)}
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
              exchangeRate={0}
              defaultCoinIndex={1}
              getCoinValue={(data) => setCount1(data)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:gap-[18px]">
          <TransactionInfo label={'Min. Received'} />
          <TransactionInfo label={'Rate'} />
          <TransactionInfo label={'Offered by'} />
          <TransactionInfo label={'Price Slippage'} value={'3%'} />
          <TransactionInfo label={'Network Fee'} />
          <TransactionInfo label={'Criptic Fee'} />
        </div>
        <Button
          size="large"
          shape="rounded"
          fullWidth={true}
          className="mt-6 uppercase xs:mt-8 xs:tracking-widest sendEthButton2"
          onClick={() => dec_approve(count, count1)}
        >
          APPROVE
        </Button>
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
