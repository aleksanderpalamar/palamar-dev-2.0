import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20"
});

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");
  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleTimeString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    console.log("event", event.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_method.created

    console.log(
      res?.data?.object?.billing_details?.email,
      res?.data?.object?.amount,
      JSON.stringify(res),
      res?.type,
      String(timeString),
      String(dateTime),
      res?.data?.object?.receipt_email,
      res?.data?.object?.receipt_url,
      JSON.stringify(res?.data?.object?.payment_method_details),
      JSON.stringify(res?.data?.object?.billing_details),
      res?.data?.object?.currency
    );

    if (event.type === "charge.succeeded") {
      console.log("charge.succeeded");
    }

    if (event.type === "payment_intent.succeeded") {
      console.log("payment_intent.succeeded");
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (error) {}
}
