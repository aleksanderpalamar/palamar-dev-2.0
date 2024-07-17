import Stripe from "stripe";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

type METADATA = {
  template_id: string
  priceId: string
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
  apiVersion: "2024-06-20",
  typescript: true,
})


export async function POST(request: NextRequest) {
  const body = await request.text();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const sig = headers().get("stripe-signature") as string;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    if (event.type === "checkout.session.completed") {
      const metadata = event.data.object.metadata as METADATA
      console.log("checkout session completed", metadata);
    }
  } catch (error) {
    return new Response(`Webhook Error: ${error}`, { 
      status: 400 
    });
  }

  const eventType = event.type;
  if (
    eventType !== 'checkout.session.completed' &&
    eventType !== 'checkout.session.async_payment_succeeded'
  ) return new Response('Server Error', {
    status: 500
  });
  const data = event.data.object;
  const metadata = data.metadata as METADATA;
  const templateId = metadata.template_id;
  const priceId = metadata.priceId;
  const created = data.created;
  const currency = data.currency;
  const customerDetails = data.customer_details;
  const amount = data.amount_total;
  const transactionDetails = {
    templateId,
    priceId,
    created,
    currency,
    customerDetails,
    amount,
  };
  try {
    return new Response(JSON.stringify(transactionDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}