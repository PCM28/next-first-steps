import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Página del precio del servicio',
 keywords: ['UK', 'Amazon EU']
};

export default function PricingPage () {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}
