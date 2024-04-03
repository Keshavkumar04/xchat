// "use server";

// import { db } from "@/lib/db";

// import bcrypt from "bcryptjs";
// import * as z from "zod";
// import { RegisterSchema } from "@/schemas";
// import { getUserByEmail } from "@/data/user";
// import { generateVerificationToken } from "@/lib/tokens";
// import { sendVerificationEmail } from "@/lib/mail";

// export const register = async (values: z.infer<typeof RegisterSchema>) => {
//   // Validating the values on the backend
//   const validatedFields = RegisterSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return { error: "Invalid fields" };
//   }

//   const { name, email, password } = validatedFields.data;
//   // HASHING THE PASSWORD
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // checking if the email id doesnot exist before
//   const existingUser = await getUserByEmail(email);

//   if (existingUser) {
//     return { error: "Email already in use" };
//   }

//   await db.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//     },
//   });

//   // TODO: SEND VERIFICATION TOKEN EMAIL
//   const verificationToken = await generateVerificationToken(email);
//   await sendVerificationEmail(verificationToken.email, verificationToken.token);

//   return { success: "Confirmation email sent" };
// };

"use server";

import { db } from "@/lib/db";

import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (
  values: z.infer<typeof RegisterSchema>
) => {
  // Validating the values on the backend
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;
  // HASHING THE PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);

  // checking if the email id doesnot exist before
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: SEND VERIFICATION TOKEN EMAIL
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent" };
};
