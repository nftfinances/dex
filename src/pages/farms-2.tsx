import { ChangeEventHandler, FC, useMemo, useState } from 'react';
import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Transition } from '@/components/ui/transition';
import DashboardLayout from '@/layouts/_dashboard';
import { RadioGroup } from '@/components/ui/radio-group';
import { Listbox } from '@/components/ui/listbox';
import Button from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ChevronDown } from '@/components/icons/chevron-down';
import { SearchIcon } from '@/components/icons/search';
import FarmList from '@/components/farms/list';
import { FarmsData } from '@/data/static/farms-data';

import ABI from "@/contracts/singlestake.json";
import tokenABI from "@/contracts/token.json";
import Web3 from "web3";
import { useAffiliateId } from '@/hooks/use-affiliate-id';


const abi = ABI;
var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);

    //const web3 = new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/317a3a523e064dafa40cb8e6a3e71190")
    //const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/317a3a523e064dafa40cb8e6a3e71190"));
  
}

enable();

type SORT_ID = 'HOT' | 'APR' | 'LATEST';

type SORT_OPTION = {
  id: SORT_ID;
  name: string;
};

const SORT_OPTIONS: SORT_OPTION[] = [
  { id: 'HOT', name: 'Hot' },
  { id: 'APR', name: 'APR' },
  // { id: 3, name: 'Earned' },
  // { id: 4, name: 'Total staked' },
  { id: 'LATEST', name: 'Latest' },
];

async function buttonApprove(num) {
  if (num == 1){ //BTC
    var token_add = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
    var lptoken_add = "0xC3CbeE0adEedE27b9F71CeF621B520C02a257401"; 
    //var token_add = "0x26075d8cfffb4c2edf7c8f01958dfb7ab823ea9d"; //test net address
    //var lptoken_add = "0x257ed3878dbbb6b51a8ffcc49532587c227abad2";  //test net address
    console.log("APPROVE BTC");
  } else if( num == 2) { //WETH
    var token_add = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
    var lptoken_add = "0xeaC7c703fd9F9F43ca0041d0cf204C4847D52657"; 
    console.log("APPROVE WETH");
  } else if( num == 3) { //USDC
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
    var lptoken_add = "0xe20DA1d9Af82202823210BCA67940dD5A762466a";
    console.log("APPROVE USDC");
  } else if( num == 4) { //USDT
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
    var lptoken_add = "0xaB076BE647F5122775bd893d29Ba91d97Df03578";
    console.log("APPROVE USDT");
  }  else if( num == 5) { //BUSD
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    var lptoken_add = "0x58f2189d8Ee9dB6Cc05017738782aC40Ffe1d449";
    //var token_add =　"0xE48c9a452Aa932CB38831f8fB91fe62a20523A18";  //test net address
    console.log("APPROVE BUSD");
  } else {
    console.log("APPROVE  NO REGISTERED")
  }

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();

  var allowance = await token_contract.methods.allowance(accounts[0],"0x43551564c76642D509f3d70BfDF3A8D0a83e7570").call();
      
  console.log("allowance");
  console.log(allowance);

  var heko = BigInt(100000*Math.pow(10, 18)).toString();

  var dataFie = token_contract.methods.approve("0x43551564c76642D509f3d70BfDF3A8D0a83e7570", heko).encodeABI(); 
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


let lptoken_contract = new web3.eth.Contract(tokenABI, lptoken_add);
var lpdataFie = lptoken_contract.methods.approve("0x43551564c76642D509f3d70BfDF3A8D0a83e7570", heko).encodeABI(); 

var lpallowance = await lptoken_contract.methods.allowance(accounts[0],"0x43551564c76642D509f3d70BfDF3A8D0a83e7570").call();
      
console.log("LP allowance");
console.log(lpallowance);

window.ethereum.request({
  method: 'eth_sendTransaction',
  params: [
      {
          from: accounts[0],
          to: lptoken_add,  //BUSD Contract Address
          data: lpdataFie,
          gas: '1d184',
      },
  ],
  })
.then((txHash) => console.log(txHash))
.catch((error) => console.error);

}


async function buttonStake(num, amount, affiliateId: string) {
  console.log(num);
  console.log(amount);
  console.log(affiliateId);

  let stake_contract = new web3.eth.Contract(ABI, "0x43551564c76642D509f3d70BfDF3A8D0a83e7570");
  const accounts = await web3.eth.requestAccounts();

  var heko = BigInt(amount*Math.pow(10, 18)).toString();
  console.log(heko);

  if(affiliateId){
    if (num == 1){ //BTC
      var dataFie = stake_contract.methods.pool_wbtc(heko, affiliateId).encodeABI(); 
      console.log("BTC");
    } else if( num == 2) { //WETH
      var dataFie = stake_contract.methods.pool_weth(heko, affiliateId).encodeABI(); 
      console.log("WETH");
    } else if( num == 3) { //USDC
      var dataFie = stake_contract.methods.pool_usdc(heko, affiliateId).encodeABI(); 
      console.log("USDC");
    } else if( num == 4) { //USDT
      var dataFie = stake_contract.methods.pool_usdt(heko, affiliateId).encodeABI(); 
      console.log("USDT");
    }  else if( num == 5) { //BUSD
      var dataFie = stake_contract.methods.pool_busd(heko, affiliateId).encodeABI(); 
      console.log("BUSD");
    } else {
      console.log("NO REGISTERED METHOD")
    }
  } else {
    if (num == 1){ //BTC
      var dataFie = stake_contract.methods.pool_wbtc(heko, 0).encodeABI(); 
      console.log("BTC");
    } else if( num == 2) { //WETH
      var dataFie = stake_contract.methods.pool_weth(heko, 0).encodeABI(); 
      console.log("WETH");
    } else if( num == 3) { //USDC
      var dataFie = stake_contract.methods.pool_usdc(heko, 0).encodeABI(); 
      console.log("USDC");
    } else if( num == 4) { //USDT
      var dataFie = stake_contract.methods.pool_usdt(heko, 0).encodeABI(); 
      console.log("USDT");
    }  else if( num == 5) { //BUSD
      var dataFie = stake_contract.methods.pool_busd(heko, 0).encodeABI(); 
      console.log("BUSD");
    } else {
      console.log("NO REGISTERED METHOD")
    }
  }

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: "0x43551564c76642D509f3d70BfDF3A8D0a83e7570",  //SWAP Contract Address
            data: dataFie,
            gas: '1d184',
        },
    ],
    })
  .then((txHash) => console.log(txHash))
  .catch((error) => console.error);
}

async function buttonUnstake(num, amount, affiliateId: string) {
  let stake_contract = new web3.eth.Contract(ABI, "0x43551564c76642D509f3d70BfDF3A8D0a83e7570");
  const accounts = await web3.eth.requestAccounts();

  var heko = BigInt(amount*Math.pow(10, 18)).toString();

  if(affiliateId){
    if (num == 1){ //BTC
      var apy_a = await stake_contract.methods.check_apy_a(accounts[0]).call();
      console.log(apy_a);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0xC3CbeE0adEedE27b9F71CeF621B520C02a257401"); //WBTC
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_a*0.000000472; //WBTC
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_wbtc(heko, claimed_heko, affiliateId).encodeABI(); 
      console.log("UNPOOL BTC");
    } else if( num == 2) { //WETH
      var apy_b = await stake_contract.methods.check_apy_b(accounts[0]).call();
      console.log(apy_a);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x59ac8f29476dcd8e949c221d3a981aeed4b85460"); //ETH
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_b*0.000000667; //WETH
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_weth(heko, claimed_heko, affiliateId).encodeABI(); 
      console.log("UNPOOL WETH");
    } else if( num == 3) { //USDC
      var apy_c = await stake_contract.methods.check_apy_c(accounts[0]).call();
      console.log(apy_a);
      if(apy_c == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x16cC9016F1A0C10cE48A1529022245Ef209A2AA3"); //USDC
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_c*0.000001715; //USDC
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_usdc(heko, claimed_heko, affiliateId).encodeABI(); 
      console.log("UNPOOL USDC");
    } else if( num == 4) { //USDT
      var apy_d = await stake_contract.methods.check_apy_d(accounts[0]).call();
      console.log(apy_d);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"); //USDT
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_d* 0.00000152; //USDT
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_usdt(heko, claimed_df, affiliateId).encodeABI(); 
      console.log("UNPOOL USDT");
    }  else if( num == 5) { //BUSD
      var apy_e = await stake_contract.methods.check_apy_e(accounts[0]).call();
      console.log(apy_e);
      if(apy_e == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x1bC98a3c8c6A18af8c3339d45E6a8Be88133bc0b"); //BUSD
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_e*0.000001806; //BUSD
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_busd(heko, claimed_df, affiliateId).encodeABI(); 
      console.log("UNPOOL BUSD");
    } else {
      console.log("UNPOOL NO REGISTERED METHOD")
    }
  } else {
    if (num == 1){ //BTC
      var apy_a = await stake_contract.methods.check_apy_a(accounts[0]).call();
      console.log(apy_a);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0xC3CbeE0adEedE27b9F71CeF621B520C02a257401"); //WBTC
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_a*0.000000472; //WBTC
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_wbtc(heko, claimed_heko, 0).encodeABI(); 
      console.log("UNPOOL BTC");
    } else if( num == 2) { //WETH
      var apy_b = await stake_contract.methods.check_apy_b(accounts[0]).call();
      console.log(apy_a);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x59ac8f29476dcd8e949c221d3a981aeed4b85460"); //ETH
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_b*0.000000667; //WETH
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_weth(heko, claimed_heko, 0).encodeABI(); 
      console.log("UNPOOL WETH");
    } else if( num == 3) { //USDC
      var apy_c = await stake_contract.methods.check_apy_c(accounts[0]).call();
      console.log(apy_a);
      if(apy_c == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x16cC9016F1A0C10cE48A1529022245Ef209A2AA3"); //USDC
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_c*0.000001715; //USDC
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_usdc(heko, claimed_heko, 0).encodeABI(); 
      console.log("UNPOOL USDC");
    } else if( num == 4) { //USDT
      var apy_d = await stake_contract.methods.check_apy_d(accounts[0]).call();
      console.log(apy_d);
      if(apy_a == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"); //USDT
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_d* 0.00000152; //USDT
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_usdt(heko, claimed_df, 0).encodeABI(); 
      console.log("UNPOOL USDT");
    }  else if( num == 5) { //BUSD
      var apy_e = await stake_contract.methods.check_apy_e(accounts[0]).call();
      console.log(apy_e);
      if(apy_e == 27713197){
        alert("YOU NEED TO POOL")
        return 0;
      };
      let LP_token = new web3.eth.Contract(tokenABI, "0x1bC98a3c8c6A18af8c3339d45E6a8Be88133bc0b"); //BUSD
      var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
      //var lp_num = 10
      var claimed_df = lp_num*apy_e*0.000001806; //BUSD
      console.log(claimed_df);
      var claimed_heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
      var dataFie = stake_contract.methods.unpool_busd(heko, claimed_df, 0).encodeABI(); 
      console.log("UNPOOL BUSD");
    } else {
      console.log("UNPOOL NO REGISTERED METHOD")
    }
  }

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: "0x43551564c76642D509f3d70BfDF3A8D0a83e7570", 
            data: dataFie,
            gas: '1d184',
        },
    ],
    })
  .then((txHash) => console.log(txHash))
  .catch((error) => console.error);

}

async function checkStatus(num) {
  const accounts = await web3.eth.requestAccounts();

  let stake_contract = new web3.eth.Contract(ABI, "0x43551564c76642D509f3d70BfDF3A8D0a83e7570");
  console.log(num);

  if (num == 1){ //BTC
    var token_add = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
    //var token_add = "0x26075d8cfffb4c2edf7c8f01958dfb7ab823ea9d"; //test net address
    var timer = await stake_contract.methods.check_apy_a(accounts[0]).call(); 
    console.log("BTC");
  } else if( num == 2) { //WETH
    var token_add = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
    var timer = await stake_contract.methods.check_apy_b(accounts[0]).call(); 
    console.log("WETH");
  } else if( num == 3) { //USDC
    var token_add = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
    var timer = await stake_contract.methods.check_apy_d(accounts[0]).call(); 
    console.log("USDC");
  } else if( num == 4) { //USDT
    var token_add = "0x55d398326f99059ff775485246999027b3197955";
    var timer = await stake_contract.methods.check_apy_c(accounts[0]).call(); 
    console.log("USDT");
  }  else if( num == 5) { //BUSD
    var token_add = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    //var token_add =　"0xE48c9a452Aa932CB38831f8fB91fe62a20523A18";  //test net address
    var timer = await stake_contract.methods.check_apy_e(accounts[0]).call(); 
    console.log("BUSD");
  } else {
    console.log("NOT REGISTERED ADD")
  }

  let token_contract = new web3.eth.Contract(tokenABI, token_add);
  var balance = await token_contract.methods.balanceOf(accounts[0]).call(); 
  if (timer > 27692966){
    timer = 0;
  }
  console.log(timer);
  document.getElementById(num).innerHTML = balance + "LP - You get " + timer + " DF";

}

type SortListProps = {
  currentSortId: SORT_ID;
  onChange( id: SORT_ID ): void;
}

const SortList: FC<SortListProps> = ( {
  currentSortId,
  onChange,
} ) => {

  const selectedOption = useMemo( () => {

    return SORT_OPTIONS.find( ( option ) => option.id === currentSortId );

  }, [ currentSortId ] );

  return (
    <div className="relative w-full md:w-auto">
      <Listbox
        value={ currentSortId }
        onChange={ onChange }
      >
        <Listbox.Button className="flex h-11 w-full items-center justify-between rounded-lg bg-gray-100 px-4 text-sm text-gray-900 dark:bg-light-dark dark:text-white md:w-36 lg:w-40 xl:w-56">
          { selectedOption?.name }
          <ChevronDown />
        </Listbox.Button>
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 "
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
        >
          <Listbox.Options className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-lg bg-white p-3 shadow-large dark:bg-light-dark">
            { SORT_OPTIONS.map( ( sortOption ) => (
              <Listbox.Option
                key={ sortOption.id }
                value={ sortOption.id }
              >
                <div
                  className={`block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition dark:text-white  ${
                    currentSortId === sortOption.id
                      ? 'my-1 bg-gray-100 dark:bg-dark'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  { sortOption.name }
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

type SearchProps = {
  value: string;
  onChange( value: string ): void;
};

const Search: FC<SearchProps> = ( {
  value,
  onChange,
} ) => {

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = ( event ) => {

    onChange( event.target.value );

  }

  return (
    <form
      className="relative flex w-full rounded-full md:w-auto lg:w-64 xl:w-80"
      noValidate
      role="search"
    >
      <label className="flex w-full items-center">
        <input
          className="h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500"
          placeholder="Search farms"
          autoComplete="off"
          value={ value }
          onChange={ handleOnChange }
          onInput={ handleOnChange }
        />
        <span className="pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3">
          <SearchIcon className="h-4 w-4" />
        </span>
      </label>
    </form>
  );
}

function StackedSwitch() {
  let [isStacked, setIsStacked] = useState(false);
  return (
    <Switch
      checked={isStacked}
      onChange={setIsStacked}
      className="flex items-center gap-2 text-gray-400 sm:gap-3"
    >
      <div
        className={cn(
          isStacked ? 'bg-brand' : 'bg-gray-200 dark:bg-gray-500',
          'relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300'
        )}
      >
        <span
          className={cn(
            isStacked
              ? 'bg-white ltr:translate-x-5 rtl:-translate-x-5 dark:bg-light-dark'
              : 'bg-white ltr:translate-x-0.5 rtl:-translate-x-0.5 dark:bg-light-dark',
            'inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-200'
          )}
        />
      </div>
      <span className="inline-flex text-xs font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-sm">
        Stacked only
      </span>
    </Switch>
  );
}

type STATUS_TYPE = 'LIVE' | 'FINISHED';

type StatusProps = {
  status: STATUS_TYPE;
  setStatus( status: STATUS_TYPE ): void;
};

const Status: FC<StatusProps> = ( {
  status,
  setStatus,
} ) => {

  return (
    <RadioGroup
      value={status}
      onChange={setStatus}
      className="flex items-center sm:gap-3"
    >
      <RadioGroup.Option value="LIVE">
        {({ checked }) => (
          <span
            className={`relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ${
              checked ? 'text-white' : 'text-brand'
            }`}
          >
            {checked && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
                layoutId="statusIndicator"
              />
            )}
            <span className="relative">LIVE</span>
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="FINISHED">
        {({ checked }) => (
          <span
            className={`relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ${
              checked ? 'text-white' : 'text-brand'
            }`}
          >
            {checked && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
                layoutId="statusIndicator"
              />
            )}
            <span className="relative">FINISHED</span>
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

const FarmsPage: NextPageWithLayout = () => {
  const [count, setCount] = useState(0);
  const affiliateId = useAffiliateId();

  const [ statusFilter, setStatusFilter ] = useState< STATUS_TYPE >( 'LIVE' );
  const [ nameFilter, setNameFilter ] = useState<string>( '' );
  const[ sortId, setSortId ] = useState<SORT_ID>( 'HOT' );

  const filteredFarmsData = useMemo( () => {

    const filteredFarmsData = FarmsData
      .filter( ( item ) => item.live_status === statusFilter )
      .filter( ( item ) => nameFilter.trim() === '' ? true : new RegExp( nameFilter, 'i' ).test( item.from ) );
    filteredFarmsData.sort( ( a, b ) => {

      return (
        sortId === 'HOT' ? b.liquidity - a.liquidity :
        sortId === 'APR' ? b.apr - a.apr :
        sortId === 'LATEST' ? b.multiplier - a.multiplier :
        - 1
      );

    } );

    return filteredFarmsData;

  }, [ statusFilter, nameFilter, sortId ] );

  return (
    <>
      <NextSeo
        title="Farms DREAM FINANCE"
        description="DreamFinance is a DEX that will revolutionize the Casino industry. Users and platformers should play as equals and have fun."
      />
      <DashboardLayout>
        <div className="mx-auto w-full sm:pt-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center justify-between gap-4">
              <Status
                status={ statusFilter }
                setStatus={ setStatusFilter }
              />
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              <div className="hidden shrink-0 md:block">
                <StackedSwitch />
              </div>
              <Search
                value={ nameFilter }
                onChange={ setNameFilter }
              />
              <SortList
                currentSortId={ sortId }
                onChange={ setSortId }
              />
            </div>
          </div>

          <div className="mb-3 hidden grid-cols-3 gap-6 rounded-lg bg-white shadow-card dark:bg-light-dark sm:grid lg:grid-cols-5">
            <span className="px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300">
              Pool
            </span>
            <span className="px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300">
              Earned
            </span>
            <span className="px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300">
              APR
            </span>
            <span className="hidden px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300 lg:block">
              Liquidity
            </span>
            <span className="hidden px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300 lg:block">
              Multiplier
            </span>
          </div>

          {filteredFarmsData.map((farm) => {
            return (
              <FarmList
                key={farm.id}
                from={farm.from}
                to={farm.to}
                earned={farm.earned}
                apr={farm.apr}
                liquidity={farm.liquidity}
                multiplier={farm.multiplier}
              >
                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
                  <div className="text-xs font-medium uppercase text-black ltr:text-right rtl:text-left dark:text-white sm:text-sm">
                    Wallet balance: 0
                  </div>
                  <div className="flex flex-col gap-3 text-xs font-medium uppercase text-black ltr:text-right rtl:text-left dark:text-white sm:text-sm">
                    <span>Your staked</span>
                    <span id={ `${ farm.id }` }></span>
                    <span>(0.03% of pool)</span>
                  </div>
                  <div className="relative">
                    <input
                      value={count}
                      onChange={(event) => setCount(event.target.value)}
                      type="number"
                      placeholder="0.0"
                      className="spin-button-hidden h-13 w-full appearance-none rounded-lg border-solid border-gray-200 bg-body px-4 text-sm tracking-tighter text-gray-900 placeholder:text-gray-600 focus:border-gray-900 focus:shadow-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-600"
                    />
                    <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-lg border border-solid bg-gray-100 px-2 py-1 text-xs uppercase text-gray-900 ltr:right-3 rtl:left-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                      Max
                    </span>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4 sm:mb-6 sm:gap-6">
                  <Button shape="rounded" fullWidth size="large" onClick={() => {buttonApprove(farm.id)}} >
                    APPROVE
                  </Button>
                  <Button shape="rounded" fullWidth size="large" onClick={() => {buttonStake(farm.id, count, affiliateId)}} >
                    STAKE
                  </Button>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4 sm:mb-6 sm:gap-6">
                  <Button shape="rounded" fullWidth size="large" onClick={() => {checkStatus(farm.id)}} >
                    CHECK STATUS
                  </Button>
                  <Button shape="rounded" fullWidth size="large" onClick={() => {buttonUnstake(farm.id, count, affiliateId)}} >
                    UNSTAKE
                  </Button>
                </div>
              </FarmList>
            );
          })}
        </div>
      </DashboardLayout>
    </>
  );
};

export default FarmsPage;
