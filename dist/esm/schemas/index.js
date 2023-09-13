/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
import { z } from 'zod';
export const OrderRequestSchema = z.object({
  accountId: z.string(),
  symbol: z.string().toUpperCase(),
  quantity: z.number().min(1).default(1),
  price: z.number().min(0.01),
});
