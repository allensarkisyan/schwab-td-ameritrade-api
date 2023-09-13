'use strict';
/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderRequestSchema = void 0;
const zod_1 = require('zod');
exports.OrderRequestSchema = zod_1.z.object({
  accountId: zod_1.z.string(),
  symbol: zod_1.z.string().toUpperCase(),
  quantity: zod_1.z.number().min(1).default(1),
  price: zod_1.z.number().min(0.01),
});
