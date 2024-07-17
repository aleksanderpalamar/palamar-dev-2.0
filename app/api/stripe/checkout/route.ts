import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
  apiVersion: "2024-06-20",
  typescript: true,
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const priceId = data.priceId;
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        }
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/loja/templates/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/loja/templates`,
      metadata: {
        template_id: data.templateId,
        priceId
      }
    });
    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}