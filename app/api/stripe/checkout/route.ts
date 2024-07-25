import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/lib/stripe";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  currency: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { cartDetails } = await req.json();
  const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

  const lineItems = cartDetailsArray.map((item: CartItem) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${headersList.get("origin")}/loja/templates/success`,
      cancel_url: `${headersList.get("origin")}/loja/templates/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
