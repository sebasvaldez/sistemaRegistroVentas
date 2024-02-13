import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3).max(40),
  price: z.number().min(1),
  stock: z.number().min(1),
  category: z.string().min(3).max(40),
  description: z.string().min(10).max(255),
  picture: z.string().url(),
  brand: z.string().min(3).max(40),
});
