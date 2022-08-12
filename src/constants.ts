export const CURRENCY_ID = {
	USDT: 1,
	USDC: 2,
	BUSD: 3,
	PB: 5,
	DF: 4,
} as const;

export type CURRENCY_ID = typeof CURRENCY_ID[ keyof typeof CURRENCY_ID ];

export const CURRENCY_CODE = {
	[ CURRENCY_ID.USDT ]: 'USDT',
	[ CURRENCY_ID.USDC ]: 'USDC',
	[ CURRENCY_ID.BUSD ]: 'BUSD',
	[ CURRENCY_ID.PB ]: 'PB',
	[ CURRENCY_ID.DF ]: 'DF',
} as const;

export type CURRENCY_CODE = typeof CURRENCY_CODE[ keyof typeof CURRENCY_CODE ];

// 1 DF = 0.1 USDT, 0.1 USDC, 0.1 BUSD
// 1 PB = 0.1 USDT, 0.1 USDC, 0.1 BUSD
export const EXCHANGE_RATE_VS_DF = {
	[ CURRENCY_ID.USDT ]: 0.1,
	[ CURRENCY_ID.USDC ]: 0.1,
	[ CURRENCY_ID.BUSD ]: 0.1,
	[ CURRENCY_ID.PB ]: 1,
	[ CURRENCY_ID.DF ]: 1,
} as const;

