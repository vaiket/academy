import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vaiket Academy" <academy@vaiket.com>`,
      to: email,
      subject: "Application Received – Vaiket Academy Internship",

      html: `
<div style="font-family:Arial,Helvetica,sans-serif;background:#f6f8fb;padding:30px">

  <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05)">

    <!-- HEADER -->
    <div style="background:#16a34a;color:white;padding:18px 24px;font-size:20px;font-weight:bold">
      Vaiket Academy
    </div>

    <!-- BODY -->
    <div style="padding:24px;color:#333;font-size:15px;line-height:1.6">

      <p>Hello <b>${name}</b>,</p>

      <p>
        Thank you for applying to the <b>Vaiket Academy Internship Program</b>.
        We have successfully received your application.
      </p>

      <p>
        Our team is currently reviewing your profile.
        If shortlisted, you will receive further instructions shortly.
      </p>

      <p>
        Please keep an eye on your email and WhatsApp for updates.
      </p>

      <br/>

      <p>
        Best regards,<br/>
        <b>Vaiket Team</b><br/>
        Vikas Web Development Pvt. Ltd.
      </p>

    </div>

    <!-- FOOTER -->
    <div style="background:#f1f5f9;padding:14px 24px;font-size:12px;color:#666;text-align:center">
      © 2026 Vaiket • Vikas Web Development Pvt. Ltd.
    </div>

  </div>

</div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}
