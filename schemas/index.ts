import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum  6 characters required", // We can define the error messages here
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required", // We can define the error messages here
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required", // We can define the error messages here
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required", // We can define the error messages here
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
