import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getSales,
  getSale,
  createSale,
  deleteSale,
  updateSale,
} from "../controllers/sales.controller.js";

const router = Router();

router.get("/sales", authRequired, getSales);

router.get("/sales/:id", authRequired, getSale);

router.post("/sales", authRequired, createSale);

router.delete("/sales/:id", authRequired, deleteSale);

router.put("/sales/:id", authRequired, updateSale);

export default router;
