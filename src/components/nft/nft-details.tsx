import cn from 'classnames';
import ParamTab, { TabPanel } from '@/components/ui/param-tab';
import Image from '@/components/ui/image';
import FeaturedCard from '@/components/nft/featured-card';
import ListCard from '@/components/ui/list-card';
import AuctionCountdown from '@/components/nft/auction-countdown';
import AnchorLink from '@/components/ui/links/anchor-link';
import Button from '@/components/ui/button';
import { ArrowLinkIcon } from '@/components/icons/arrow-link-icon';
import { DotsIcon } from '@/components/icons/dots-icon';
import Avatar1 from '@/assets/images/avatar/3.png';
import { useModal } from '@/components/modal-views/context';
import { nftData } from '@/data/static/single-nft';
import NftDropDown from './nft-dropdown';
import { StaticImageData } from 'next/image';

import poolABI from "@/contracts/pool.json";
import stakeABI from "@/contracts/singlestake.json";
import tokenABI from "@/contracts/token.json";
import affiABI from "@/contracts/affi.json";

import Web3 from "web3";
import { useAffiliateId } from '@/hooks/use-affiliate-id';

const poolabi = poolABI;
const stakeabi = stakeABI;
const tokenabi = tokenABI;
const affiabi = affiABI;


var web3: Web3;

const enable = async () => {
  web3 = new Web3(Web3.givenProvider);
  // web3 = new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/317a3a523e064dafa40cb8e6a3e71190")
  // web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/317a3a523e064dafa40cb8e6a3e71190"));
  // web3 = window.web3.currentProvider
  //web3.setProvider(new Web3.providers.HttpProvider("http://localhost:3000"));

}

enable();

async function register_affi(){
  const accounts = await web3.eth.requestAccounts();
  var affi_ad = "0x43232326775c94066e94b93da586caf144d52a36";

  let affi_contract = new web3.eth.Contract(affiABI, affi_ad);
  var realtime_check = await affi_contract.methods.check_start(accounts[0]).call(); 

  console.log(realtime_check);
  if (realtime_check < 27710503) {
    alert("Already REGISTERED")
    return 0;
  }
 
  var dataFie = affi_contract.methods.get_affiliate().encodeABI(); 
  window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: affi_ad,
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);   

}

async function check_status(){
  const accounts = await web3.eth.requestAccounts();
  var affi_ad = "0x43232326775c94066e94b93da586caf144d52a36";

  var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";
  var stake_ad = "0xbdd600f24ed7dcb440fd591875e1a7bcf908afcd";
  var stake_ad1 = "0x4e990adbc702ca279a547f547548292afd914e19";

  let affi_contract = new web3.eth.Contract(affiABI, affi_ad); 
  var realtime_check = await affi_contract.methods.check_start(accounts[0]).call(); 
  console.log("REAL TIME");
  console.log(realtime_check);

  if (realtime_check > 27710503) {
    alert("YOU NEED TO REGISTER")
    return 0;
  }

  var current_order = await affi_contract.methods.get_order().call();
  console.log("Current Order");
  console.log(current_order);

  var user_affid = await affi_contract.methods.get_affid(accounts[0]).call();
  console.log("your affiliate id");
  console.log(user_affid);
  
  let pool_contract = new web3.eth.Contract(poolABI, pool_ad);  
  var total_pool = await pool_contract.methods.check_total_assets(user_affid).call()/Math.pow(10, 18);
  console.log("total pool")
  console.log(total_pool);

  var stake_contract = new web3.eth.Contract(stakeABI, stake_ad);  
  var total_a = await stake_contract.methods.check_asset_a(user_affid).call()/Math.pow(10, 18); //WBTC
  var total_b = await stake_contract.methods.check_asset_b(user_affid).call()/Math.pow(10, 18); //WETH
  var BTC_RATE = 21388;
  var ETH_RATE = 1742;

  var total_c = await stake_contract.methods.check_asset_c(user_affid).call()/Math.pow(10, 18); //USDT
  var total_d = await stake_contract.methods.check_asset_d(user_affid).call()/Math.pow(10, 18); //USDC
  var total_e = await stake_contract.methods.check_asset_e(user_affid).call()/Math.pow(10, 18); //BUSD

  var stake_contract1 = new web3.eth.Contract(stakeABI, stake_ad1);
  var total_f = await stake_contract1.methods.check_asset_a(user_affid).call()/Math.pow(10, 18); //LOT
  var total_g = await stake_contract1.methods.check_asset_b(user_affid).call()/Math.pow(10, 18); //DAI
  var LOT_RATE = 0.1;
  var DAI_RATE = 1.42;

  var total_stake = total_a*BTC_RATE + total_b*ETH_RATE + total_c + total_d + total_e + total_f*LOT_RATE + total_g*DAI_RATE;
  console.log("total stake");
  console.log(total_stake);

  var total_assets = total_pool + total_stake;
  console.log("your total assets");
  console.log(total_assets);

  var daily_df = total_assets*realtime_check*0.000000173*10;

  document.getElementById("total_status").innerHTML = total_assets.toString() + "　";
  document.getElementById("stake_status").innerHTML = daily_df.toString().slice(0,4) + "　";
  document.getElementById("single_affilink").innerHTML = "dream1.finance/liquidity?affiliate_id=" + user_affid;
  document.getElementById("pool_affilink").innerHTML = "dream1.finance/farms-2?affiliate_id=" + user_affid;

}

async function claim_df(){
  const accounts = await web3.eth.requestAccounts();
  var affi_ad = "0x43232326775c94066e94b93da586caf144d52a36";

  var pool_ad = "0xc2a039a166aa87c8e0a142ceab9e86afacfada45";
  var stake_ad = "0xbdd600f24ed7dcb440fd591875e1a7bcf908afcd";
  var stake_ad1 = "0x4e990adbc702ca279a547f547548292afd914e19";

  let affi_contract = new web3.eth.Contract(affiABI, affi_ad); 
  var realtime_check = await affi_contract.methods.check_start(accounts[0]).call(); 
  var user_affid = await affi_contract.methods.get_affid(accounts[0]).call();

  if (realtime_check > 27710503) {
    realtime_check = 0;
  }


  let pool_contract = new web3.eth.Contract(poolABI, pool_ad);  
  var total_pool = await pool_contract.methods.check_total_assets(user_affid).call()/Math.pow(10, 18);
  console.log("total pool");
  console.log(total_pool);

  var stake_contract = new web3.eth.Contract(stakeABI, stake_ad);  
  var total_a = await stake_contract.methods.check_asset_a(user_affid).call()/Math.pow(10, 18); //WBTC
  var total_b = await stake_contract.methods.check_asset_b(user_affid).call()/Math.pow(10, 18); //WETH
  var total_c = await stake_contract.methods.check_asset_c(user_affid).call()/Math.pow(10, 18); //USDT
  var total_d = await stake_contract.methods.check_asset_d(user_affid).call()/Math.pow(10, 18); //USDC
  var total_e = await stake_contract.methods.check_asset_e(user_affid).call()/Math.pow(10, 18); //BUSD
  var BTC_RATE = 21388;
  var ETH_RATE = 1742;

  var stake_contract1 = new web3.eth.Contract(stakeABI, stake_ad1);
  var total_f = await stake_contract1.methods.check_asset_a(user_affid).call()/Math.pow(10, 18); //LOT
  var total_g = await stake_contract1.methods.check_asset_b(user_affid).call()/Math.pow(10, 18); //DAI
  var LOT_RATE = 0.1;
  var DAI_RATE = 1.42;

  var total_stake = total_a*BTC_RATE + total_b*ETH_RATE + total_c + total_d + total_e + total_f*LOT_RATE + total_g*DAI_RATE;

  var total_assets = total_pool + total_stake;
  console.log("your total assets");
  console.log(total_assets);
 
  var daily_df = total_assets*realtime_check*0.000000173*10;
  console.log(daily_df);

  var heko = BigInt(Math.pow(10, 18)*daily_df);
  var dataFie = affi_contract.methods.claim_df(heko).encodeABI(); 

  window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: affi_ad,  //BUSD Contract Address
                data: dataFie,
                gas: '1d184',
            },
        ],
        })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);   

}

function copyToClipboard() {
  var copyTarget = document.getElementById("single_affilink");
  copyTarget.select();
  document.execCommand("Copy");
  alert("コピーできました！ : " + copyTarget.value);
}

interface NftFooterProps {
  className?: string;
  currentBid: any;
  auctionTime: Date | string | number;
  isAuction?: boolean;
  price?: number;
}

function NftFooter({
  className = 'md:hidden',
  currentBid,
  auctionTime,
  isAuction,
  price,
}: NftFooterProps) {
  const { openModal } = useModal();
  return (
    <div
      className={cn(
        'sticky bottom-0 z-10 bg-body dark:bg-dark md:-mx-2',
        className
      )}
    >
      <div className="-mx-4 border-t-2 border-gray-900 px-4 pt-4 pb-5 dark:border-gray-700 sm:-mx-6 sm:px-6 md:mx-2 md:px-0 md:pt-5 lg:pt-6 lg:pb-7">
        {isAuction && (
          <div className="flex gap-4 pb-3.5 md:pb-4 xl:gap-5">
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Button
            shape="rounded"
            variant="solid"
            color="gray"
            className="dark:bg-gray-800"
            onClick={() => register_affi()}
          >
            REGISTER
          </Button>
          <Button
            shape="rounded"
            variant="solid"
            color="gray"
            className="dark:bg-gray-800"
            onClick={() => check_status()}
          >
            CHECK STATUS
          </Button>
          <Button
            shape="rounded"
            variant="solid"
            color="gray"
            className="dark:bg-gray-800"
            onClick={() => claim_df()}
          >
            CLAIM DF
          </Button>
        </div>
      </div>
    </div>
  );
}

type Avatar = {
  id: string | number;
  name: string;
  slug: string;
  logo: StaticImageData;
};
type NftDetailsProps = {
  isAuction?: boolean;
  image: StaticImageData;
  name: string;
  description: string;
  minted_date: string;
  minted_slug: string;
  price: number;
  creator: Avatar;
  collection: Avatar;
  owner: Avatar;
  block_chains: Avatar[];
};

export default function NftDetails({ product }: { product: NftDetailsProps }) {
  const {
    isAuction,
    image,
    name,
    description,
    minted_date,
    minted_slug,
    price,
    creator,
    collection,
    owner,
    block_chains,
  } = product;

  const affiliateId = useAffiliateId();

  return (
    <div className="flex flex-grow">
      <div className="mx-auto flex w-full flex-grow flex-col transition-all xl:max-w-[1360px] 4xl:max-w-[1760px]">
        <div className="relative mb-5 flex flex-grow items-center justify-center md:pb-7 md:pt-4 ltr:md:left-0 ltr:md:pl-6 rtl:md:right-0 rtl:md:pr-6 lg:fixed lg:mb-0 lg:h-[calc(100%-96px)] lg:w-[calc(100%-492px)] ltr:lg:pl-8 rtl:lg:pr-8 xl:w-[calc(100%-550px)] ltr:xl:pr-12 ltr:xl:pl-[340px] rtl:xl:pl-12 rtl:xl:pr-[340px] ltr:2xl:pl-96 rtl:2xl:pr-96 3xl:w-[calc(100%-632px)] ltr:4xl:pl-0 rtl:4xl:pr-0">
          <div className="flex h-full max-h-full w-full items-center justify-center lg:max-w-[768px]">
            <div className="relative aspect-square max-h-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={name}
                className="h-full bg-gray-200 dark:bg-light-dark"
              />
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-grow flex-col justify-between ltr:md:ml-auto ltr:md:pl-8 rtl:md:mr-auto rtl:md:pr-8 lg:min-h-[calc(100vh-96px)] lg:w-[460px] ltr:lg:pl-12 rtl:lg:pr-12 xl:w-[592px] ltr:xl:pl-20 rtl:xl:pr-20">
          <div className="block">
            <div className="block">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium leading-[1.45em] -tracking-wider text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
                  {name}
                </h2>
                <div className="mt-1.5 shrink-0 ltr:ml-3 rtl:mr-3 xl:mt-2">
                  <NftDropDown />
                </div>
              </div>
              <AnchorLink
                href={minted_slug}
                className="mt-1.5 inline-flex items-center text-sm -tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white xl:mt-2.5"
              >
                Started on {minted_date}
                <ArrowLinkIcon className="h-3 w-3 ltr:ml-2 rtl:mr-2" />
              </AnchorLink>
              <div className="mt-4 flex flex-wrap gap-6 pt-0.5 lg:-mx-6 lg:mt-6 lg:gap-0">
                <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                  <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                    POOL Affiliate Link
                  </h3>
                  <AnchorLink href={creator?.slug} className="inline-flex">
                    <span id="single_affilink"></span>
                  </AnchorLink>
                  <Button
                    shape="rounded"
                    variant="solid"
                    color="gray"
                    className="dark:bg-gray-800"
                    onClick={() => copyToClipboard()}
                  >
                    COPY
                  </Button>
                </div>
                <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                  <h3 className="text-heading-style mb-2.5 uppercase text-gray-900 dark:text-white">
                    SINGLE Affiliate Link
                  </h3>
                  <AnchorLink href={creator?.slug} className="inline-flex">
                    <span id="pool_affilink"></span>
                  </AnchorLink>
                </div>
                <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                  <h3 className="text-heading-style mb-2.5 uppercase text-gray-900 dark:text-white">
                    Your Total Amount
                  </h3>
                  <AnchorLink href={creator?.slug} className="inline-flex">
                    <span id="total_status"></span>  USD
                  </AnchorLink>
                </div>
                <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                  <h3 className="text-heading-style mb-2.5 uppercase text-gray-900 dark:text-white">
                    Your can GET
                  </h3>
                  <AnchorLink href={creator?.slug} className="inline-flex">
                    <span id="stake_status"></span> DF
                  </AnchorLink>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col pb-5 xl:mt-9">
              <ParamTab
                tabMenu={[
                  {
                    title: 'Details',
                    path: 'details',
                  },
                ]}
              >
                <TabPanel className="focus:outline-none">
                  <div className="space-y-6">
                    <div className="block">
                      <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                        Description
                      </h3>
                      <div className="text-sm leading-6 -tracking-wider text-gray-600 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                    <div className="block">
                      <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                        Block Chain
                      </h3>
                      <div className="flex flex-col gap-2">
                        {block_chains?.map((item: any) => (
                          <AnchorLink
                            href="#"
                            className="inline-flex"
                            key={item?.id}
                          >
                            <ListCard
                              item={item}
                              className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            />
                          </AnchorLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="focus:outline-none">
                  <div className="flex flex-col-reverse">
                    {nftData?.bids?.map((bid) => (
                      <FeaturedCard
                        item={bid}
                        key={bid?.id}
                        className="mb-3 first:mb-0"
                      />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel className="focus:outline-none">
                  <div className="flex flex-col-reverse">
                    {nftData?.history?.map((item) => (
                      <FeaturedCard
                        item={item}
                        key={item?.id}
                        className="mb-3 first:mb-0"
                      />
                    ))}
                  </div>
                </TabPanel>
              </ParamTab>
            </div>
          </div>
          <NftFooter
            className="hidden md:block"
            currentBid={nftData?.bids[nftData?.bids?.length - 1]}
            auctionTime={'Fr Dec 17, 2021'}
            isAuction={isAuction}
            price={price}
          />
        </div>
        <NftFooter
          currentBid={nftData?.bids[nftData?.bids?.length - 1]}
          auctionTime={'Fr Dec 17, 2021'}
          isAuction={isAuction}
          price={price}
        />
      </div>
    </div>
  );
}
