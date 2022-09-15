import type { NextPageWithLayout } from '@/types';
import { useState, useRef } from 'react';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import TradeLayout from '@/layouts/_trade-layout';
import Button from '@/components/ui/button';
import { CoinInput } from '@/components/ui/coin-input';
import TransactionInfo from '@/components/ui/transaction-info';
import { SwapIcon } from '@/components/icons/swap-icon';

import ABI from "@/contracts/swap.json";
import tokenABI from "@/contracts/token.json";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import { chain } from 'lodash';
import { CURRENCY_ID } from '@/constants';

const abi = ABI;
var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);

    //const web3 = new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/317a3a523e064dafa40cb8e6a3e71190")
    //const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/317a3a523e064dafa40cb8e6a3e71190"));
  
}

enable();
const temp = 0;

async function dec(count, count1){
  console.log("amount");
  console.log(count.value);
  console.log(count1.value);
  if (window.ethereum) {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                rpcUrl: 'https://bsc-dataseed.binance.org/',
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
  } 
      if (count.coin == 1){ //usdt
        var token_add = "0x55d398326f99059ff775485246999027b3197955";
        //var token_add = "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"; //test net address
        console.log("USDT");
      } else if( count.coin == 2) { //usdc
        var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
        console.log("USDC");
      } else if( count.coin == 3) { //BUSD
        var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
        console.log("BUSD");
      } else if( count.coin == 5) { //PB
        var token_add = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
        console.log("PB");
      }  else if( count.coin == 4) { //DF
        var token_add = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
        //var token_add =　"0xE48c9a452Aa932CB38831f8fB91fe62a20523A18";  //test net address
        console.log("DF");
      } else {
        console.log("NOT REGISTERED ADD")
      }
      console.log(token_add);

      const accounts = await web3.eth.requestAccounts();

      let token_contract = new web3.eth.Contract(tokenABI, token_add);
      var allowance = await token_contract.methods.allowance(accounts[0],"0x3ff0e4bfbfe599f83321c728de213087ab49f605").call();
      
      console.log("allowance");
      console.log(allowance);
      
      if (allowance == 0) {
        alert("YOU NEED TO APPROVE")
        return 0;
      }


      let swap_contract = new web3.eth.Contract(ABI, "0x3ff0e4bfbfe599f83321c728de213087ab49f605");

      console.log(count.coin);
      console.log(count.value);
      console.log(count1.coin);

      var heko = BigInt(count.value*Math.pow(10, 18)).toString();

      if (count.coin == 1){ //USDT
        if(count1.coin == 4){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdt_df(heko).encodeABI(); //user address to CONTRACT
          console.log("usdt -> df ")
        } else if(count1.coin == 2 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdt_usdc(heko).encodeABI(); //user address to CONTRACT
          console.log("usdt -> usdc ")
        } else if(count1.coin == 3 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdt_busd(heko).encodeABI(); //user address to CONTRACT
          console.log("usdt -> BUSD ")
        } else if(count1.coin == 5 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdt_pb(heko).encodeABI(); //user address to CONTRACT
          console.log("usdt -> PB ")
        } else {
          console.log("error USDT ->");
        }
      } else if (count.coin == 4) { //DF
        if(count1.coin == 1){
          var dataFie = swap_contract.methods.swap_df_usdt(heko).encodeABI(); //user address to CONTRACT
          console.log("DF -> USDT ")
        } else if(count1.coin == 2 ){
          var dataFie = swap_contract.methods.swap_df_usdc(heko).encodeABI(); //user address to CONTRACT
          console.log("DF -> usdc ")
        } else if(count1.coin == 3 ){
          var dataFie = swap_contract.methods.swap_df_busd(heko).encodeABI(); //user address to CONTRACT
          console.log("df -> BUSD ")
        } else if(count1.coin == 5 ){
          var dataFie = swap_contract.methods.swap_df_pb(heko).encodeABI(); //user address to CONTRACT
          console.log("df -> PB ")
        } else {
          console.log("error DF =>");
        }
      } else if (count.coin == 3) { //BUSD
        if(count1.coin == 1 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_busd_usdt(heko).encodeABI(); //user address to CONTRACT
          console.log("BUSD -> USDT ")
        } else if(count1.coin == 2 ){ //USDC
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_busd_usdc(heko).encodeABI(); //user address to CONTRACT
          console.log("busd -> usdc ")
        } else if(count1.coin == 4 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_busd_df(heko).encodeABI(); //user address to CONTRACT
          console.log("BUSD ->DF ")
        } else if(count1.coin == 5 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_busd_pb(heko).encodeABI(); //user address to CONTRACT
          console.log("busd -> PB ")
        } else {
          console.log("error BUSD=>");
        }
      } else if (count.coin == 2) {  //USDC
        if(count1.coin == 1){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdc_usdt(heko).encodeABI(); //user address to CONTRACT
          console.log("USDC -> USDT ")
        } else if(count1.coin == 3 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdc_busd(heko).encodeABI(); //user address to CONTRACT
          console.log("usdc -> busd ")
        } else if(count1.coin == 4 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdc_df(heko).encodeABI(); //user address to CONTRACT
          console.log("USDC ->DF ")
        } else if(count1.coin == 5 ){
          var heko = BigInt(count.value*Math.pow(10, 17)).toString();
          var dataFie = swap_contract.methods.swap_usdc_pb(heko).encodeABI(); //user address to CONTRACT
          console.log("usdc -> PB ")
        } else {
          console.log("error USDC=>");
        }
      } else if (count.coin == 5) { //PB
        if(count1.coin == 1){
          var dataFie = swap_contract.methods.swap_pb_usdt(heko).encodeABI(); //user address to CONTRACT
          console.log("PB -> USDT ")
        } else if(count1.coin == 3 ){
          var dataFie = swap_contract.methods.swap_pb_busd(heko).encodeABI(); //user address to CONTRACT
          console.log("pb -> busd ")
        } else if(count1.coin == 4 ){
          var dataFie = swap_contract.methods.swap_pb_df(heko).encodeABI(); //user address to CONTRACT
          console.log("pb ->DF ")
        } else if(count1.coin == 2 ){
          var dataFie = swap_contract.methods.swap_pb_usdc(heko).encodeABI(); //user address to CONTRACT
          console.log("PB -> USDC ")
        } else {
          console.log("error PB=>");
        }
      } else {
        console.log("error all");
      }
      
      //const swap_method = "swap_contract.methods.swap" + "_" + count.coin.toLowerCase() + "_" +count1.coin.toLowerCase() + "(" + count.value + ").encodeABI()";
      //const swap_method = "swap_contract.methods.swap" + "_" + count.coin.toLowerCase() + "_" +count1.coin.toLowerCase() + "(" + count.value + ").encodeABI()";
      //console.log(swap_method);

      //var dataFie = swap_contract.methods.swap_usdt_busd(heko).encodeABI(); //user address to CONTRACT
      //var dataFie = eval(swap_method); //user address to CONTRACT
  
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: "0x3ff0e4bfbfe599f83321c728de213087ab49f605",  //BUSD Contract Address
                data: dataFie,
                gas: 'e0684',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

async function dec_approve(count, count1){
  if (window.ethereum) {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                rpcUrl: 'https://bsc-dataseed.binance.org/',
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
  } 

  if (count.coin == 1){ //usdt
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
    //var token_add = "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"; //test net address
    console.log("USDT");
  } else if( count.coin == 2) { //usdc
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
    console.log("USDC");
  } else if( count.coin == 3) { //BUSD
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    console.log("BUSD");
  } else if( count.coin == 5) { //PB
    var token_add = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
    console.log("PB");
  }  else if( count.coin == 4) { //DF
    var token_add = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
    //var token_add =　"0xE48c9a452Aa932CB38831f8fB91fe62a20523A18";  //test net address
    console.log("DF");
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add);

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();



  var heko = BigInt(100000*Math.pow(10, 18));

  // pool contract address
  var dataFie = token_contract.methods.approve("0x3ff0e4bfbfe599f83321c728de213087ab49f605", heko).encodeABI(); 

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: token_add,  //BUSD Contract Address
            data: dataFie,
            gas: 'e0684',
        },
    ],
    })
  .then((txHash) => console.log(txHash))
  .catch((error) => console.error);

};

type SelectedCurrencyIds = {
  from: CURRENCY_ID;
  to: CURRENCY_ID;
};

const SwapPage: NextPageWithLayout = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const [ amountInDF, setAmountInDF ] = useState<number | null>( null );
  const [ selectedCurrencyIds, setSelectedCurrencyIds ] = useState<SelectedCurrencyIds>( {
    from: CURRENCY_ID.DF,
    to: CURRENCY_ID.USDT,
  } );

  const [emailTxt, SetEmailTxt] = useState("");
  const onChangeEmail = (e) => {
    const targetValue = e.target.value;    
    SetEmailTxt(targetValue);
  }

  const setSelectedCurrencyIdFrom = ( currencyIdFrom: CURRENCY_ID ) => {

    setSelectedCurrencyIds( {
      from: currencyIdFrom,
      to: selectedCurrencyIds.to,
    } );

  };

  const setSelectedCurrencyIdTo = ( currencyIdTo: CURRENCY_ID ) => {

    setSelectedCurrencyIds( {
      from: selectedCurrencyIds.from,
      to: currencyIdTo,
    } );

  };

  const onToggleButtonClick = () => {

    setSelectedCurrencyIds( {
      from: selectedCurrencyIds.to,
      to: selectedCurrencyIds.from,
    } );

  }

  return (
    <>
      <NextSeo
        title="Swap ~ DREAM FINANCE"
        description="DreamFinance is a DEX that will revolutionize the Casino industry. Users and platformers should play as equals and have fun."
      />
      <TradeLayout>
        <div className="mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6">
          <div className="relative flex gap-3 flex-col">
            <CoinInput
              label={'From'}
              amountInDF={ amountInDF }
              currencyId={ selectedCurrencyIds.from }
              onAmountChange={ setAmountInDF }
              onCurrencyTypeChange={ setSelectedCurrencyIdFrom }
              getCoinValue={(data) => setCount(data)}
            />
            <div className="absolute top-1/2 left-1/2 z-[1] -mt-4 -ml-4 rounded-full bg-white shadow-large dark:bg-gray-600">
              <Button
                size="mini"
                color="gray"
                shape="circle"
                variant="transparent"
                onClick={ onToggleButtonClick }
              >
                <SwapIcon className="h-auto w-3" />
              </Button>
            </div>
            <CoinInput
              label={'To'}
              amountInDF={ amountInDF }
              currencyId={ selectedCurrencyIds.to }
              onAmountChange={ () => {} }
              onCurrencyTypeChange={ setSelectedCurrencyIdTo }
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
          onClick={() => dec_approve({ coin: selectedCurrencyIds.from, value: amountInDF }, { coin: selectedCurrencyIds.to })}
        >
          APPROVE
        </Button>
        <Button
          size="large"
          shape="rounded"
          fullWidth={true}
          className="mt-6 uppercase xs:mt-8 xs:tracking-widest sendEthButton2"
          onClick={() => dec({ coin: selectedCurrencyIds.from, value: amountInDF }, { coin: selectedCurrencyIds.to })}
        >
          SWAP
        </Button>
      </TradeLayout>
    </>
  );
};

export default SwapPage;