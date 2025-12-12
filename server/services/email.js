import nodemailer from 'nodemailer';

export async function sendConfirmationEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MEDLBH_MAIL_USER,
      pass: process.env.MEDLBH_MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.MEDLBH_MAIL_USER,
    to,
    subject,
    text,
  });
}