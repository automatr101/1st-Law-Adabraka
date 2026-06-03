import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  phone?: string;
  email?: string;
  matter?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, matter, message } = (await req.json()) as ContactBody;

    // Basic validation
    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a message." },
        { status: 400 }
      );
    }

    // Email is sent client-side via Web3Forms (its key is public & browser-safe;
    // server-side calls get blocked by Cloudflare). This route handles WhatsApp.
    const results: { whatsapp: boolean } = { whatsapp: false };

    // ── WhatsApp via CallMeBot ──
    const cmbPhone = process.env.CALLMEBOT_PHONE;
    const cmbKey = process.env.CALLMEBOT_APIKEY;
    if (cmbPhone && cmbKey) {
      try {
        const waText = [
          "🏛️ *New Consultation Request — 1st Law*",
          "",
          `👤 *Name:* ${name}`,
          `📞 *Phone:* ${phone || "—"}`,
          `📧 *Email:* ${email || "—"}`,
          `⚖️ *Matter:* ${matter || "—"}`,
          "",
          `📝 *Message:*`,
          message,
        ].join("\n");

        const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
          cmbPhone
        )}&text=${encodeURIComponent(waText)}&apikey=${encodeURIComponent(cmbKey)}`;

        const res = await fetch(url);
        results.whatsapp = res.ok;
      } catch (e) {
        console.error("CallMeBot error:", e);
      }
    }

    // Always return ok — email is the primary channel (sent client-side).
    // WhatsApp is a best-effort bonus notification.
    return NextResponse.json({ ok: true, results });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call 0244 124 472." },
      { status: 500 }
    );
  }
}
