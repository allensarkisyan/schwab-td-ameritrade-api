/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import { z } from 'zod';

import type {
  TickerSymbol,
  TDAmeritradeAccountID,
  TDAmeritradeOrderLeg,
} from '../@types/index.js';

export const OrderRequestSchema = <z.ZodSchema<{
  accountId: TDAmeritradeAccountID,
  symbol: TickerSymbol,
  quantity: number,
  price: number
}>>z.object({
  accountId: z.string(),
  symbol: z.string().toUpperCase(),
  quantity: z.number().min(1).default(1),
  price: z.number().min(0.01)
});

export const PlaceOrderSchema = <z.ZodSchema<{
  accountId: TDAmeritradeAccountID,
  price: number,
  orderLegCollection: TDAmeritradeOrderLeg[]
}>>z.object({
  accountId: z.string(),
  price: z.number().min(0.01),
  orderLegCollection: z.array(z.object({
    instruction: z.string(),
    quantity: z.number().min(1).default(1),
    instrument: z.object({
      symbol: z.string().toUpperCase(),
      assetType: z.string(),
    })
  }))
});