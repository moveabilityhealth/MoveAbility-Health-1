import NdisImageCard from "./NdisImageCard";
import NdisFeatureCard, { type NdisFeatureCardProps } from "./NdisFeatureCard";

const features: NdisFeatureCardProps[] = [
  {
    title: "Goal-Focused Treatment",
    description: "Tailored around specific client life goals, mobility enhancement, and social engagement.",
  },
  {
    title: "Home Visits & Flexible Appointments",
    description: "Flexible appointment options at a time and place that suits you, in the comfort of your home.",
  },
  {
    title: "Neurological & Physical Care",
    description: "Expert therapy for stroke, cerebral palsy, Parkinson's, autism, and multi-trauma recovery.",
  },
];

export default function NdisSection() {
  return (
    <section id="ndis" className="scroll-mt-20 py-10 md:py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          <NdisImageCard
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=900&q=80"
            alt="Clinician guiding a patient through a resistance-band exercise"
            caption="Empowering Independence across Melbourne"
            subCaption="Mobile Consultations & Home Visits"
          />

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Dedicated Mobile Physiotherapy Services
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              We deliver high-quality, goal-focused physiotherapy and
              capacity-building support. We partner closely with clients and
              their families to foster true functional independence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 pt-2 [&>*:last-child]:sm:col-span-2">
              {features.map((feature) => (
                <NdisFeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
