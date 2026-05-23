import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sashiqrahman003@gmail.com',
      subject: `[Portfolio] Message from ${name} - ${subject || 'No Subject'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 16px;color:#111">New contact form submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:100px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0070f3">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Subject</strong></td><td style="padding:8px 0">${subject || 'None'}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:8px">
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
