import { CoinList } from '@/components/ui/currency-swap-icons1';

type FarmData = {
  id: number,
  from: CoinList,
  to: CoinList,
  earned: number,
  apr: number, // パーセンテージ
  liquidity: number, // ドル
  multiplier: number,
  live_status: 'LIVE' | 'FINISHED',
}

export const FarmsData: FarmData[] = [
  {
    id: 1,
    from: 'WBTC',
    to: '' as CoinList,
    earned: 0,
    apr: 2.50,
    liquidity: 232941720,
    multiplier: 40,
    live_status: 'LIVE',
  },
  {
    id: 2,
    from: 'WETH',
    to: '' as CoinList,
    earned: 0,
    apr: 3.5,
    liquidity: 132941720,
    multiplier: 10,
    live_status: 'LIVE',
  },
  {
    id: 3,
    from: 'USDC',
    to: '' as CoinList,
    earned: 0,
    apr: 9.0,
    liquidity: 332941720,
    multiplier: 22,
    live_status: 'LIVE',
  },
  {
    id: 4,
    from: 'USDT',
    to: '' as CoinList,
    earned: 0,
    apr: 8.0,
    liquidity: 232941720,
    multiplier: 20,
    live_status: 'LIVE',
  },
  {
    id: 5,
    from: 'BUSD',
    to: '' as CoinList,
    earned: 0,
    apr: 9.50,
    liquidity: 132941720,
    multiplier: 34,
    live_status: 'FINISHED',
  },
];
