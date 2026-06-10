import type { APIRoute } from "astro";
import { Resend } from "resend";

// Opt out of static prerendering so this route runs server-side on Vercel
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const json = await request.json().catch(() => null);

  if (!json) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, contact, message } = json as {
    name?: string;
    contact?: string;
    message?: string;
  };

  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const resend = new Resend(apiKey);

  // TODO before launch: replace `from` with a verified Resend domain
  // e.g. "Lulu's Care <contact@luluscare.com>"
  // During development, Resend allows onboarding@resend.dev → account email only
  const { error } = await resend.emails.send({
    from: "Lulu's Care Contact Form <onboarding@resend.dev>",
    to: "tizitasiyoum@gmail.com",
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone or email:</strong> ${contact}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p style="color:#888;font-size:12px;">Sent via luluscare.com contact form. Needs end-to-end testing before launch.</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
