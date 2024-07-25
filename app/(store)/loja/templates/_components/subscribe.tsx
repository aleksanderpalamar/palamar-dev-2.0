"use client";

import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

type SubscribeProps = {
  priceId?: string
  templateId?: string
}

export const Subscribe = ({ priceId, templateId }: SubscribeProps) => {
  const handleSubmit = async () => {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );
    if (!stripe) {
      return;
    }
    try {
      const response = await axios.post('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ priceId, templateId })
      });
      const data = response.data;
      if (!data.ok) throw new Error('Something went wrong');
      await stripe.redirectToCheckout({
        sessionId: data.result.id
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant="primary"
      className="w-[200px] text-violet-100 self-end mt-2"
    >
      Buy Template
    </Button>
  )
}