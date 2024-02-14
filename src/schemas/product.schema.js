import { z } from "zod";

export const productSchema = z.object({
  brand: z.string().max(40),
  model: z.number().min(1),
  screen: z.number().min(1),
  mainCamera: z.string().max(40),
  precessor: z.string().max(40),
  memory: z.string().url(),
  battery: z.string().max(40),
  image: z.string().url(),
  stock: z.number().min(1),
  price: z.number().min(1),
});
