import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import type { NextPageWithLayout } from '@/types';
import DashboardLayout from '@/layouts/_dashboard';
import Image from '@/components/ui/image';
import CoinSlider from '@/components/ui/coin-card';
import OverviewChart from '@/components/ui/overview-chart';
import LiquidityChart from '@/components/ui/liquidity-chart';
import VolumeChart from '@/components/ui/volume-chart';
import TopPools from '@/components/ui/top-pools';
import { ChevronForward } from '@/components/icons/chevron-forward';
import { Plus } from '@/components/icons/plus';
import TransactionTable from '@/components/transaction/transaction-table';
import TopCurrencyTable from '@/components/top-currency/currency-table';
import { coinSlideData } from '@/data/static/coin-slide-data';
//images
import AuthorImage from '@/assets/images/author.jpg';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return (
    <>
      <NextSeo
        title="DREAM FINANCE"
        description="DREAM FINANCE INNOVATIVE WEB3 DEX"
      />
      <DashboardLayout>
        <div className="flex flex-wrap">
          <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:ltr:pr-6 sm:rtl:pl-6 md:w-[calc(100%-256px)] lg:w-[calc(100%-288px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]">
            <CoinSlider coins={coinSlideData} />
          </div>
          <div className="w-full sm:w-1/2 md:w-64 lg:w-72 2xl:w-80 3xl:w-[358px]">
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:my-10 md:grid-cols-2">
          <LiquidityChart />
          <VolumeChart />
        </div>

        <div className="my-8 sm:my-10">
          <TopCurrencyTable />
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-[calc(100%-288px)] ltr:lg:pr-6 rtl:lg:pl-6 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]">
            <TransactionTable />
          </div>
          <div className="order-first mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 lg:order-1 lg:mb-0 lg:flex lg:w-72 lg:flex-col 2xl:w-80 3xl:w-[358px]">
            <OverviewChart />
            <TopPools />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default HomePage;
