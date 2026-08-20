import { NextResponse } from "next/server";

const N8N_LEAD_WEBHOOK_URL =
  process.env.N8N_LEAD_WEBHOOK_URL ??
  "https://liamcarte.app.n8n.cloud/webhook-test/roof-demo";

export async function POST(request: Request) {
  try {
    const lead = await request.json();

    const webhookResponse = await fetch(N8N_LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "dr-roof-website",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      console.error("n8n webhook rejected lead", webhookResponse.status);
      return NextResponse.json(
        {
          message:
            "The n8n test webhook is not ready. In n8n, click Listen for test event, then submit the form again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to submit lead", error);
    return NextResponse.json(
      { message: "We couldn't send your request. Please try again." },
      { status: 500 },
    );
  }
}
