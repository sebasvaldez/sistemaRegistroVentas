import { Router } from "express";
import { createSale } from "../controllers/sale.controller.js";
import  saleSchema  from "../schemas/sale.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
const router = Router();

router.post("/create-sale",validateSchema(saleSchema), createSale);


export default router;