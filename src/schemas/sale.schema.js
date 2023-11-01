import { z } from "zod";

export const createSaleSchema = z.object({
  dniClient: z.number({ required_error: "El dni es requerido" }),
  nameClient: z.string({
    required_error: "El nombre del cliente es requerido",
  }),
  nameProduct: z.string({
    required_error: "El nombre del producto es requerido",
  }),
  quantity: z.number({ required_error: "La cantidad es requerida" }).min(),
  price: z.number({ required_error: "El precio es requerido" }),
  totalSale: z.number({ required_error: "El total de la venta es requerido" }),
});
