'use strict';
/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.PlaceOrderSchema = exports.OrderRequestSchema = void 0;
const zod_1 = require('zod');
exports.OrderRequestSchema = zod_1.z.object({
  accountId: zod_1.z.string(),
  symbol: zod_1.z.string().toUpperCase(),
  quantity: zod_1.z.number().min(1).default(1),
  price: zod_1.z.number().min(0.01),
});
exports.PlaceOrderSchema = zod_1.z.object({
  accountId: zod_1.z.string(),
  price: zod_1.z.number().min(0.01),
  orderLegCollection: zod_1.z.array(
    zod_1.z.object({
      instruction: zod_1.z.string(),
      quantity: zod_1.z.number().min(1).default(1),
      instrument: zod_1.z.object({
        symbol: zod_1.z.string().toUpperCase(),
        assetType: zod_1.z.string(),
      }),
    }),
  ),
});
