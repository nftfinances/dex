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

import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import { useAffiliateId } from '@/hooks/use-affiliate-id';

const abi = ABI;
const tokenabi = tokenABI;

var web3: Web3;

const enable = async () => {
    web3 = new Web3(Web3.givenProvider);
    // web3 = new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/317a3a523e064dafa40cb8e6a3e71190")
    // web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/317a3a523e064dafa40cb8e6a3e71190"));
    // web3 = window.web3.currentProvider
    //web3.setProvider(new Web3.providers.HttpProvider("http://localhost:3000"));

}

enable();

async function dec(count, count1, affiliateId: string ){
      console.log("YOUR AFFILIATE ID")
      console.log(affiliateId);
      const accounts = await web3.eth.requestAccounts();

      var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";
      let pool_contract = new web3.eth.Contract(ABI, pool_ad);


      if(affiliateId){//do affiliate
        if (count.coin == "USDT" && count1.coin == "BUSD") {//do affi
          var dataFie = pool_contract.methods.pool_busd_usdt(accounts[0], count.value, affiliateId).encodeABI();
          console.log("BUSD-USDT");
        };
        if (count.coin == "USDT" && count1.coin == "USDC") {//do affi
          var dataFie = pool_contract.methods.pool_usdc_usdt(accounts[0], count.value, affiliateId).encodeABI();
          console.log("USDC-USDT");
        }
        if (count.coin == "BUSD" && count1.coin == "USDC") { //do affi
          var dataFie = pool_contract.methods.pool_usdc_busd(accounts[0], count.value, affiliateId).encodeABI();
          console.log("USDC-BUSD");
        }
      } else { //non affiliate
        if (count.coin == "USDT" && count1.coin == "BUSD") {
          var dataFie = pool_contract.methods.pool_busd_usdt(accounts[0], count.value, 0).encodeABI();
          console.log("BUSD-USDT");
        };
        if (count.coin == "USDT" && count1.coin == "USDC") {
          var dataFie = pool_contract.methods.pool_usdc_usdt(accounts[0], count.value, 0).encodeABI();
          console.log("USDC-USDT");
        }
        if (count.coin == "BUSD" && count1.coin == "USDC") {
          var dataFie = pool_contract.methods.pool_usdc_busd(accounts[0], count.value, 0).encodeABI();
          console.log("USDC-BUSD");
        }
      }

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: pool_ad,
                data: dataFie,
                gas: 'e0684',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);

        
}

async function check_status(){
  const accounts = await web3.eth.requestAccounts();

  var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";
  
  var busd_usdt_lp = "0x0042b1997C92A3eF2A0Cabbb52B4028Bb44c9c32";
  var busd_usdc_lp = "0x6C71d03cDBdb37BbB471F0299e27Be3C0786F712";
  var usdc_usdt_lp = "0xfcc52458fD60F4ce9A00a53C8dBb7a7D5dBD5582";

  let LP_token = new web3.eth.Contract(tokenABI, busd_usdt_lp); //BUSD-USDT
  var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
  console.log("Number of Staking")
  console.log(lp_num/Math.pow(10, 18));

  let LP_token1 = new web3.eth.Contract(tokenABI, busd_usdc_lp); //BUSD-USDC
  var lp_num1 = await LP_token1.methods.balanceOf(accounts[0]).call();

  let LP_token2 = new web3.eth.Contract(tokenABI, usdc_usdt_lp); //USDC-USDT
  var lp_num2 = await LP_token2.methods.balanceOf(accounts[0]).call();

  let Pool_contract = new web3.eth.Contract(ABI, pool_ad);
  
  var apy_b = await Pool_contract.methods.check_apy_b(accounts[0]).call(); //USDC-USDT
  var apy_a = await Pool_contract.methods.check_apy_a(accounts[0]).call(); //BUSD-USDC
  var apy_c = await Pool_contract.methods.check_apy_c(accounts[0]).call(); //BUSD-USDT

  console.log("stake staus")
  if (apy_a == 19163){
      apy_a = "";
  }

  if (apy_a == 19163){
    apy_b = "";
  }

  if (apy_a == 19163){
    apy_c = "";
  }

  document.getElementById("stake_num").innerHTML = (lp_num/Math.pow(10, 18)).toString();
  document.getElementById("stake_status").innerHTML = (lp_num*apy_c*100025/100000).toString().slice(0,5);

  document.getElementById("stake_num1").innerHTML = lp_num1/Math.pow(10, 18);
  document.getElementById("stake_status1").innerHTML = (lp_num1*apy_a*100025/100000).toString().slice(0,5);

  document.getElementById("stake_num2").innerHTML = lp_num2/Math.pow(10, 18);
  document.getElementById("stake_status2").innerHTML = (lp_num2*apy_b*100025/100000).toString().slice(0,5);
}

async function approve(count, count1, affiliateId: string ){
  var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";

  var usdt_ad = "0x55d398326f99059ff775485246999027b3197955";
  var usdc_ad = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  var busd_ad = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  var pb_ad = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
  var df_ad = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";

  if (count.coin == "USDT"){
    var token_add = usdt_ad;
    //var token_add = "0x67ADCeE20aCddD658f0868A66313f7C78E21C924"; //TEST NET
  } else if( count.coin == "USDC") {
    var token_add = usdc_ad;
  } else if( count.coin == "BUSD") {
    var token_add = busd_ad;
  } else if( count.coin == "PB") {
    var token_add = pb_ad;
  }  else if( count.coin == "DF") {
    var token_add = df_ad;
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add);

  let token_contract = new web3.eth.Contract(tokenABI, token_add);

  const accounts = await web3.eth.requestAccounts();
  var heko = BigInt(10000*Math.pow(10, 18));

  var dataFie = token_contract.methods.approve(pool_ad, heko).encodeABI(); 
  var allowance = await token_contract.methods.allowance(accounts[0],pool_ad).call();
  console.log(allowance);
  
  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: token_add,
            data: dataFie,
            gas: '1d184',
        },
    ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);

  if (count1.coin == "USDT"){
    var token_add1 = "0x55d398326f99059ff775485246999027b3197955";
  } else if( count1.coin == "USDC") {
    var token_add1 = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  } else if( count1.coin == "BUSD") {
    var token_add1 = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    //var token_add1 = "0x1bC98a3c8c6A18af8c3339d45E6a8Be88133bc0b"; //TEST NET
  } else if( count1.coin == "PB") {
    var token_add1 = "0x3a76C55C6BEF5Cb38A405c767C1d33F91aF20Ed1";
  }  else if( count1.coin == "DF") {
    var token_add1 = "0x774f896898C91Cf0afc69AEA135435fD7aec31a6";
  } else {
    console.log("NOT REGISTERED ADD")
  }
  console.log(token_add1);

  let token_contract1 = new web3.eth.Contract(tokenABI, token_add1);
  var allowance1 = await token_contract1.methods.allowance(accounts[0],pool_ad).call();
  console.log(allowance1);

  var heko = BigInt(10000*Math.pow(10, 18));
  // pool contract address
  var dataFie1 = token_contract1.methods.approve(pool_ad, heko).encodeABI(); 

  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
        {
            from: accounts[0],
            to: token_add1,  //BUSD Contract Address
            data: dataFie1,
            gas: '1d184',
        },
    ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);

    if (count.coin == "USDT" && count1.coin == "BUSD") {
      var lp_ad = "0x0042b1997C92A3eF2A0Cabbb52B4028Bb44c9c32";
      //var lp_ad = "0x0fd011cf20bF5AA72fab527BD4209f4877B5B892"; //testnet
    }
    if (count.coin == "BUSD" && count1.coin == "USDT") {
      var lp_ad = "0x0042b1997C92A3eF2A0Cabbb52B4028Bb44c9c32";
    }
    if (count.coin == "USDT" && count1.coin == "USDC") {
      var lp_ad = "0xfcc52458fD60F4ce9A00a53C8dBb7a7D5dBD5582";
    }
    if (count.coin == "USDC" && count1.coin == "USDT") {
      var lp_ad = "0xfcc52458fD60F4ce9A00a53C8dBb7a7D5dBD5582";
    }
    if (count.coin == "BUSD" && count1.coin == "USDC") {
      var lp_ad = "0x6C71d03cDBdb37BbB471F0299e27Be3C0786F712";
    }
    if (count.coin == "USDC" && count1.coin == "BUSD") {
      var lp_ad = "0x6C71d03cDBdb37BbB471F0299e27Be3C0786F712";
    }
    console.log("LP ADD")
    console.log(lp_ad);

    let token_contract2 = new web3.eth.Contract(tokenABI, lp_ad);
    var allowance2 = await token_contract2.methods.allowance(accounts[0], pool_ad).call();
    console.log(allowance2);

    var heko = BigInt(10000*Math.pow(10, 18));
  
    // pool contract address
    var dataFie2 = token_contract2.methods.approve(pool_ad, heko).encodeABI(); 
  
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
          {
              from: accounts[0],
              to: lp_ad,  //BUSD Contract Address
              data: dataFie2,
              gas: '1d184',
          },
      ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);



}

async function unpool(count, count1, affiliateId: string ){
      const accounts = await web3.eth.requestAccounts();
      var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";
      let pool_contract = new web3.eth.Contract(ABI, pool_ad);

      var busd_usdt_lp = "0x0042b1997C92A3eF2A0Cabbb52B4028Bb44c9c32";
      var busd_usdc_lp = "0x6C71d03cDBdb37BbB471F0299e27Be3C0786F712";
      var usdc_usdt_lp = "0xfcc52458fD60F4ce9A00a53C8dBb7a7D5dBD5582";
              
      if(affiliateId){//do affiliate
        if (count.coin == "USDT" && count1.coin == "BUSD") {//do affi
          var apy_c = await pool_contract.methods.check_apy_c(accounts[0]).call(); //BUSD-USDT
          console.log(apy_c);
          if(apy_c == 27713197){
            alert("YOU NEED TO POOL")
            return 0;
          };
          let LP_token = new web3.eth.Contract(tokenABI, busd_usdt_lp); //BUSD-USDT
          var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
          //var lp_num = 10
          var claimed_df = lp_num*apy_c*0.00000173*10;
          console.log(claimed_df);
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
          var dataFie = pool_contract.methods.unpool_busd_usdt(accounts[0], count.value, heko, affiliateId).encodeABI();
        };
        if (count.coin == "USDT" && count1.coin == "USDC") {//do affi
          let LP_token2 = new web3.eth.Contract(tokenABI, usdc_usdt_lp); //USDC-USDT
          var lp_num2 = await LP_token2.methods.balanceOf(accounts[0]).call();
          var apy_b = await pool_contract.methods.check_apy_b(accounts[0]).call(); //USDC-USDT
          console.log(apy_b);
          if(apy_b == 27713197){
            alert("YOU NEED TO POOL")
            return 0;
          };
          var claimed_df = lp_num*apy_b*0.00000173*10;
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
          var dataFie = pool_contract.methods.unpool_usdc_usdt(accounts[0], count.value, heko, affiliateId).encodeABI();
        }
        if (count.coin == "BUSD" && count1.coin == "USDC") { //do affi
          let LP_token1 = new web3.eth.Contract(tokenABI, busd_usdc_lp); //BUSD-USDC
          var lp_num1 = await LP_token1.methods.balanceOf(accounts[0]).call();
          var apy_a = await pool_contract.methods.check_apy_a(accounts[0]).call(); //BUSD-USDC
          if(apy_a == 27713197){
            alert("YOU NEED TO POOL")
            return 0;
          };
          var claimed_df = lp_num*apy_a*0.00000173*10;
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();
          var dataFie = pool_contract.methods.unpool_usdc_busd(accounts[0], count.value, heko, affiliateId).encodeABI();
        }
      } else { //non affiliate
        console.log("NON AFFILITE")
        if (count.coin == "USDT" && count1.coin == "BUSD") {
          var apy_c = await pool_contract.methods.check_apy_c(accounts[0]).call(); //BUSD-USDT
          let LP_token = new web3.eth.Contract(tokenABI, busd_usdt_lp); //BUSD-USDT
          var lp_num = await LP_token.methods.balanceOf(accounts[0]).call();
          var claimed_df = lp_num*apy_c*0.00000173*10;
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();;
          var dataFie = pool_contract.methods.unpool_busd_usdt(accounts[0], count.value, heko, 0).encodeABI();
          console.log("BUSD - USDT");
        };
        if (count.coin == "USDT" && count1.coin == "USDC") {
          let LP_token2 = new web3.eth.Contract(tokenABI, usdc_usdt_lp); //USDC-USDT
          var lp_num2 = await LP_token2.methods.balanceOf(accounts[0]).call();
          var apy_b = await pool_contract.methods.check_apy_b(accounts[0]).call(); //USDC-USDT
          var claimed_df = lp_num2*apy_b*0.00000173*10;
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();;
          var dataFie = pool_contract.methods.unpool_usdc_usdt(accounts[0], count.value, heko, 0).encodeABI();
          console.log("USDC - USDT");
        }
        if (count.coin == "BUSD" && count1.coin == "USDC") {
          let LP_token1 = new web3.eth.Contract(tokenABI, busd_usdc_lp); //BUSD-USDC
          var lp_num1 = await LP_token1.methods.balanceOf(accounts[0]).call();
          var apy_a = await pool_contract.methods.check_apy_a(accounts[0]).call(); //BUSD-USDC
          var claimed_df = lp_num1*apy_a*0.00000173*10;
          var heko = BigInt(Math.pow(10, 18)*claimed_df).toString();;
          var dataFie = pool_contract.methods.unpool_usdc_busd(accounts[0], count.value, heko, 0).encodeABI();
          console.log("BUSD - USDC");
        }
      }

      //var dataFie = swap_contract.methods.swap_usdc_df(1).encodeABI(); //user address to CONTRACT

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: pool_ad,  //BUSD Contract Address
                data: dataFie,
                gas: 'e0684',
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);

}

const LiquidityPage: NextPageWithLayout = () => {
  const [count, setCount] = useState();
  const [count1, setCount1] = useState();

  const affiliateId = useAffiliateId();

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
              label={'A'}
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
              label={'B'}
              exchangeRate={0.0}
              defaultCoinIndex={1}
              getCoinValue={(data) => setCount1(data)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:gap-[18px]">
            <table>
              <thead>
                  <tr　align="left">
                      <th>BUSD-USDT</th>
                      <th>BUSD-USDC</th>
                      <th>USDC-USDT</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><span id="stake_num"></span>LP</td>
                      <td><span id="stake_num1"></span>LP</td>
                      <td><span id="stake_num2"></span>LP</td>
                  </tr>
                  <tr>
                      <td><span id="stake_status"></span> DF </td>
                      <td><span id="stake_status1"></span> DF</td>
                      <td><span id="stake_status2"></span>DF</td>
                  </tr>
              </tbody>
          </table>
   
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2.5 xs:mt-8">
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
              onClick={() => approve(count, count1, affiliateId)}
            >
              Approve
            </Button>
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
              onClick={() => check_status()}
            >
              CHECK STATUS
            </Button>
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
              onClick={() => dec(count, count1, affiliateId)}
            >
              POOL
            </Button>
            <Button
              size="large"
              shape="rounded"
              fullWidth={true}
              className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
              onClick={() => unpool(count,count1, affiliateId)}
            >
              UNPOOL
            </Button>
        </div>
      </TradeLayout>
    </>
  );
};

export default LiquidityPage;
