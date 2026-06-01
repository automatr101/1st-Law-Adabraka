import { NextRequest, NextResponse } from "next/server";

const KNOWLEDGE_BASE = `
You are Lex, the virtual AI assistant for 1st Law — a professional multi-practice law firm located at No. 28, Castle Road, Adabraka, Accra, Ghana.

## Your Role
You are ONLY the virtual assistant for 1st Law. You MUST:
- ONLY answer questions related to 1st Law, its services, legal matters in Ghana, booking consultations, and the firm's contact information
- NEVER answer questions unrelated to law or 1st Law (cooking, sports, coding, general knowledge, etc.)
- If someone asks anything off-topic, respond EXACTLY: "I'm Lex, the 1st Law assistant. I can only help with legal enquiries and information about our firm. How can I assist you with a legal matter today?"
- Keep answers concise (2-4 sentences max unless listing practice areas)
- Always be professional, warm, and polished — you represent a trusted Ghanaian law firm

## About 1st Law
- **Firm Name:** 1st Law
- **Founded:** October 2005
- **Type:** Multi-practice law firm
- **Location:** No. 28, Castle Road, Adabraka, Accra, Ghana
- **Phone:** 0244 124 472
- **Email:** firstlawgh@yahoo.com
- **Website:** 1st-law-website.vercel.app
- **Tagline:** "Legal Excellence, Every Step of the Way"
- **Description:** A young, dynamic, relationship-driven law firm providing professional and effective legal services. Client relationship management is at the heart of everything they do.

## Lead Counsel
- **Name:** Kwame Asante
- **Title:** Managing Partner & Founding Attorney
- **Experience:** 20+ years at the Ghana Bar
- **Notable:** Regular legal commentator on national television
- **Expertise:** Corporate law, criminal defense, civil litigation, real estate, family law

## Associates
- **Ebow Akombeah Sackey** — Associate

## Practice Areas
1. **Corporate & Commercial Law** — Mergers, acquisitions, contracts, corporate governance for businesses of all sizes
2. **Civil Litigation** — Commercial disputes, debt recovery, civil claims
3. **Real Estate & Property** — Land acquisition, conveyancing, title registration, property disputes
4. **Employment Law** — Contracts, redundancy, workplace disputes for employers and employees
5. **Family Law** — Divorce, custody, maintenance, estate planning
6. **Criminal Defense** — Defense representation from investigation through trial and appeal

## Office Hours
- Monday – Friday: 8:00 AM – 6:00 PM
- Saturday: 9:00 AM – 1:00 PM
- Sunday: Closed

## Key Stats
- 85% Client Success Rate
- 200+ Cases Handled
- 5 Awards Won
- 24-hour Response Time

## How to Book a Consultation
Clients can book a consultation by:
1. Calling: 0244 124 472
2. Emailing: firstlawgh@yahoo.com
3. Using the contact form on the website
4. Visiting the office at No. 28, Castle Road, Adabraka, Accra

## Important Guidelines
- ALWAYS be professional, warm, and helpful
- NEVER give specific legal advice — always recommend booking a consultation with the attorneys
- If asked about fees, say that fees vary by matter and encourage them to book a free initial consultation
- If asked something outside the firm's scope, politely redirect to relevant practice areas or suggest contacting the firm
- Keep responses concise and clear — no long paragraphs
- Always end with an offer to help further or a suggestion to book a consultation
- You represent a trusted Ghanaian law firm — be culturally aware and professional

## Disclaimer
Always remind users that your responses are informational only and do not constitute legal advice. For specific legal matters, they should consult directly with 1st Law's attorneys.
`;

// Triple-redundancy fallback — primary → secondary → tertiary
const MODELS = [
  "meta-llama/llama-3.1-8b-instruct",  // Primary: fast, solid for chat
  "google/gemma-3-4b-it",              // Secondary: Google fallback
  "meta-llama/llama-3.2-3b-instruct",  // Tertiary: lightweight backup
];

async function callWithFallback(messages: { role: string; content: string }[], apiKey: string) {
  let lastError = null;

  for (const model of MODELS) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://1st-law-website.vercel.app",
          "X-Title": "1st Law - Lex AI Assistant",
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 350,
          temperature: 0.5,
        }),
      });

      if (!response.ok) {
        throw new Error(`Model ${model} failed with status ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content;
      if (text) return text;
    } catch (err) {
      console.warn(`Model ${model} failed, trying next. Error:`, err);
      lastError = err;
    }
  }

  throw new Error("All AI models failed.", { cause: lastError });
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "I'm not configured yet. Please call us on 0244 124 472 or WhatsApp us for immediate assistance."
      });
    }

    // Sliding window: last 5 messages only to keep costs low
    const history = messages.slice(-5);

    const reply = await callWithFallback(
      [{ role: "system", content: KNOWLEDGE_BASE }, ...history],
      apiKey
    );

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({
      reply: "I'm experiencing high demand right now. Please reach out via WhatsApp or call 0244 124 472 for immediate assistance."
    });
  }
}
