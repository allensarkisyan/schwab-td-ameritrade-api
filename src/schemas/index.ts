/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import { z } from 'zod';

import type {
  TickerSymbol,
  TDAmeritradeAccountID,
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