// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`; // app link

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Confirm your email",
//     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
//   });
// };

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const domain = process.env.DOMAIN_NAME;

// export const sendPasswordResetEmail = async (email: string, token: string) => {
//   const resetLink = `${domain}/auth/new-password?token=${token}`;

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
//   });
// };

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "mail@auth-masterclass-tutorial.com",
//     to: email,
//     subject: "Confirm your email",
//     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
//   });
// };

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",

  auth: {
    user: "j67506219@gmail.com",
    pass: "mqnhgqztvontdmqa",
  },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const domain = process.env.DOMAIN_NAME;
  const resetLink = `${domain}/new-password?token=${token}`;

  let mailOptions = {
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const domain = process.env.DOMAIN_NAME;
  const confirmLink = `${domain}/new-verification?token=${token}`;
  // console.log(confirmLink);

  let mailOptions = {
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
