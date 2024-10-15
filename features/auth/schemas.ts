import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Chybný email"),
    password: z.string().min(8, "Minimálně 8 znaků"),
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Jméno je povinné"),
    email: z.string().email("Chybný email"),
    password: z.string().min(8, "Minimálně 8 znaků"),
});
