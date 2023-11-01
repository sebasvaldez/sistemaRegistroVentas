import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getSales,
  getSale,
  createSale,
  deleteSale,
  updateSale,
} from "../controllers/sales.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSaleSchema } from "../schemas/sale.schema.js";

const router = Router();

router.get("/sales", authRequired, getSales);

router.get("/sales/:id", authRequired, getSale);

router.post(
  "/sales",
  authRequired,
  validateSchema(createSaleSchema),
  createSale
);

router.delete("/sales/:id", authRequired, deleteSale);

router.put("/sales/:id", authRequired, updateSale);

export default router;
