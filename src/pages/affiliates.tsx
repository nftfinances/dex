import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import type { NextPageWithLayout } from '@/types';
import DashboardLayout from '@/layouts/_dashboard';
import NftDetails from '@/components/nft/nft-details';
import { nftData } from '@/data/static/single-nft';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const NFTDetailsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return (
    <>
      <NextSeo
        title="Affiliate Page - DREAM FINANCE"
        description="DreamFinance is a DEX that will revolutionize the Casino industry. Users and platformers should play as equals and have fun."
      />
      <DashboardLayout contentClassName="!pb-0">
        <NftDetails product={nftData} />
      </DashboardLayout>
    </>
  );
};

export default NFTDetailsPage;
