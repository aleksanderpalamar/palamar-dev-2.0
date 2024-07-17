"use client";

import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

type SubscribeProps = {
  priceId?: string
  price?: string
  description?: string
}

export const Subscribe = ({ priceId }: SubscribeProps) => {
  const handleSubmit = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

    if (!stripe) {
      return;
    }

    try {
      const res = await axios.post("/api/stripe/checkout", {
        priceId: priceId,
      });
      const data = res.data;
      if (!data.ok) throw new Error ("Something went wrong");
      await stripe.redirectToCheckout({ sessionId: data.result.id });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant="primary"
      onClick={handleSubmit}
      className="w-[200px] text-violet-100 self-end mt-2"
    >
      Buy Template
    </Button>
  )
}