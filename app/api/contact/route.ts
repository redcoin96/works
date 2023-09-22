import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: process.env.AUTH_USER, 
      to: process.env.AUTH_USER, 
      subject: subject,
      html: `
        <p>${message}</p><br/>
        <p>발신메일 : ${email}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: "성공", status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "실패", status: 500 });
  }
}
