import JSBI from 'jsbi'

// TODO: update this with the standardized CREATE2 address that will be the same across all chains
// Currently it only works for the wallet with the custom mnemonic given to anvil
export const FACTORY_ADDRESS = '0xCae997a6f253814441B878868fd6DBB32a52816f'

// This address is the product of using create2 with testnet WAVAX's contract address
export const TESTNET_ROUTER_ADDRESS = '0xd627FdC984a249E9b5F2df263A37368f4e459726'
// This address is the product of using create2 with mainnet WAVAX's contract address
export const MAINNET_ROUTER_ADDRESS = '0x7f05c63dc7ca3f99f2d3409f0017c28058c42b27'
export const ROUTER_ADDRESS = TESTNET_ROUTER_ADDRESS
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)
export const FEE_ACCURACY = JSBI.BigInt(1_000_000) // 100%

export const A_PRECISION = JSBI.BigInt(100)

export const DEFAULT_AMPLIFICATION_COEFFICIENT_PRECISE = JSBI.multiply(JSBI.BigInt(1000), A_PRECISION) // 1000 with 100 of precision

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
