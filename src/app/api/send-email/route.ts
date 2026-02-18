import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const safeName = name || "Student";

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
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
<div style="margin:0;padding:0;background:#f6f8fb;font-family:Arial,Helvetica,sans-serif">

  <div style="max-width:620px;margin:40px auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06)">

    <!-- HEADER -->
    <div style="background:#16a34a;padding:22px 28px;color:#ffffff;font-size:22px;font-weight:700">
      Vaiket Academy
    </div>

    <!-- BODY -->
    <div style="padding:28px;color:#333;font-size:15px;line-height:1.7">

      <p>Hello <b>${safeName}</b>,</p>

      <p>
        Thank you for applying to the <b>Vaiket Academy Internship Program</b>.
        Your application has been successfully received and is now under review.
      </p>

      <p>
        Our team will evaluate your profile within the next 
        <b>24–48 hours</b>. If shortlisted, you will receive your onboarding steps,
        internship roadmap, and project guidelines.
      </p>

      <p>
        At Vaiket, we focus on <b>real skills, real projects, and real growth</b>.
      </p>

      <!-- BUTTON -->
      <div style="text-align:center;margin:32px 0">
        <a href="https://vaiket.com"
           style="background:#16a34a;color:#ffffff;text-decoration:none;
                  padding:14px 28px;border-radius:6px;font-weight:600;
                  display:inline-block">
          Visit Vaiket Academy
        </a>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:26px 0"/>

      <!-- SUPPORT -->
      <p style="font-size:14px;color:#555">
        <b>Need help?</b><br/>
        📞 WhatsApp / Call: +91 7004614077<br/>
        📩 Email: hr@vaiket.com
      </p>

      <br/>

      <p>
        Warm regards,<br/>
        <b>Vaiket Team</b><br/>
        Vikas Web Development Pvt. Ltd.
      </p>

    </div>

    <!-- FOOTER -->
    <div style="background:#f1f5f9;padding:16px 20px;font-size:12px;color:#666;text-align:center">
      © 2026 Vaiket • Building Skills. Creating Futures.
    </div>

  </div>

</div>
`,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}
