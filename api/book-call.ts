import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, company, details, date, time } = req.body;

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.log("Booking received (No RESEND_API_KEY configured):", { name, email, company, details, date, time });
            return res.json({ success: true, message: "Booking confirmed (simulated)" });
        }

        const resend = new Resend(resendApiKey);
        const formattedDate = new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

        // Email to Zemnas
        await resend.emails.send({
            from: 'Zemnas Booking <onboarding@resend.dev>',
            to: 'contact@zemnas.com',
            subject: `New Discovery Call Booking: ${name}`,
            html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; color: #000000; border: 1px solid #f0f0f0;">
          <div style="margin-bottom: 40px;">
            <h1 style="font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; margin: 0; color: #2563eb;">ZEMNAS</h1>
          </div>
          
          <h2 style="font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin: 0 0 20px 0; line-height: 1;">New Booking <br/> Received</h2>
          
          <div style="background-color: #f8fafc; padding: 30px; border-left: 4px solid #2563eb; margin: 30px 0;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Client Information</p>
            <p style="margin: 0 0 10px 0; font-size: 18px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0; font-size: 18px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0; font-size: 18px;"><strong>Company:</strong> ${company || 'N/A'}</p>
          </div>

          <div style="margin: 30px 0;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Schedule Details</p>
            <p style="margin: 0 0 5px 0; font-size: 24px; font-weight: 900;">${formattedDate}</p>
            <p style="margin: 0; font-size: 20px; color: #2563eb; font-weight: bold;">${time} EST</p>
          </div>

          <div style="margin: 30px 0; padding-top: 30px; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Project Context</p>
            <p style="font-size: 16px; line-height: 1.6; color: #334155;">${details || 'No specific details provided.'}</p>
          </div>
          
          <div style="margin-top: 60px; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">
            © ${new Date().getFullYear()} ZEMNAS AGENCY
          </div>
        </div>
      `
        });

        // Email to User
        await resend.emails.send({
            from: 'Zemnas <onboarding@resend.dev>',
            to: email,
            subject: `Confirmed: Discovery Call with Zemnas`,
            html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; color: #000000; border: 1px solid #f0f0f0;">
          <div style="margin-bottom: 40px;">
            <h1 style="font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; margin: 0; color: #2563eb;">ZEMNAS</h1>
          </div>
          
          <h2 style="font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin: 0 0 20px 0; line-height: 1;">Your Call is <br/> Confirmed</h2>
          
          <p style="font-size: 18px; line-height: 1.6; color: #334155; margin-bottom: 30px;">Hi ${name}, your discovery call with Zemnas has been successfully scheduled. We're excited to learn more about your vision.</p>
          
          <div style="background-color: #f8fafc; padding: 30px; border-left: 4px solid #2563eb; margin: 30px 0;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Meeting Details</p>
            <p style="margin: 0 0 5px 0; font-size: 24px; font-weight: 900;">${formattedDate}</p>
            <p style="margin: 0; font-size: 20px; color: #2563eb; font-weight: bold;">${time} EST</p>
          </div>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af; line-height: 1.5;"><strong>Next Steps:</strong> A calendar invitation with a Google Meet link has been sent to this email address. Please accept the invite to add it to your schedule.</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-top: 40px;">See you soon,<br/><strong>The Zemnas Team</strong></p>
          
          <div style="margin-top: 60px; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; border-top: 1px solid #f0f0f0; padding-top: 30px;">
            ZEMNAS AGENCY &bull; DIGITAL SYSTEMS THAT SCALE
          </div>
        </div>
      `
        });

        res.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
}
