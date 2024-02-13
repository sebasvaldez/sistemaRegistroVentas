import {z} from 'zod';

export const customerSchema = z.object({
    name: z.string().min(10).max(40),
    email: z.string().email(),
    phone: z.number().min(10),
    address: z.string().min(10).max(255),
    dni: z.string().min(7).max(10),
    
})