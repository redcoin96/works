import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: email, // 송신할 이메일
      to: process.env.AUTH_USER, // 수신할 이메일
      subject: subject,
      html: message,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: "성공", status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "실패", status: 500 });
  }
}
