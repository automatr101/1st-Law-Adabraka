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

    const results: { email: boolean; whatsapp: boolean } = { email: false, whatsapp: false };

    // ── 1. Email via Web3Forms ──
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Consultation Request — ${name}`,
            from_name: "1st Law Website",
            // fields
            Name: name,
            Phone: phone || "Not provided",
            Email: email || "Not provided",
            "Legal Matter": matter || "Not specified",
            Message: message,
          }),
        });
        results.email = res.ok;
      } catch (e) {
        console.error("Web3Forms error:", e);
      }
    }

    // ── 2. WhatsApp via CallMeBot ──
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

    // Success if at least one channel delivered
    if (results.email || results.whatsapp) {
      return NextResponse.json({ ok: true, results });
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your message right now. Please call 0244 124 472 or email firstlawgh@yahoo.com.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call 0244 124 472." },
      { status: 500 }
    );
  }
}
