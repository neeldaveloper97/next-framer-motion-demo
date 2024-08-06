import Navbar from "../../components/common/Navbar";
import { Tabs } from "../../components/ui/Tabs";
import Image from "next/image";
import { WobbleCard } from '../../components/ui/WobbleCard';

const PricingCard = ({
  title,
  description,
  includes
}) => {
  return (
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {title}
        </h2>
        <p className="mt-4 text-left text-base/6 text-neutral-200">
          {description}
        </p>
        <ul className="mt-4 text-left text-base/6 text-neutral-200">
          {includes.map((feature, index) => (
            <li key={index} className="mt-2">- {feature}</li>
          ))}
        </ul>
      </div>
    </WobbleCard>
  );
};

export default function Pricing() {
  const tabs = [
    {
      title: "Basic",
      value: "Basic",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-[25px]">Basic</p>
          <PricingCard 
            title="Basic Plan"
            description="Essential features for personal blogs."
            includes={[
              "Up to 10 blog posts",
              "Basic analytics",
              "Standard support",
              "Customizable templates",
              "SEO optimization"
            ]}
          />
        </div>
      ),
    },
    {
      title: "Premium",
      value: "Premium",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-[25px]">Premium</p>
          <PricingCard 
            title="Premium Plan"
            description="Advanced features for professional bloggers."
            includes={[
              "Unlimited blog posts",
              "Advanced analytics",
              "Priority support",
              "Custom domains",
              "Email marketing integration",
              "Monetization options"
            ]}
          />
        </div>
      ),
    },
    {
      title: "Enterprise",
      value: "Enterprise",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-[25px]">Enterprise</p>
          <PricingCard 
            title="Enterprise Plan"
            description="Comprehensive features for large-scale blogs."
            includes={[
              "Unlimited blog posts",
              "Dedicated account manager",
              "24/7 support",
              "Custom solutions",
              "Team collaboration tools",
              "API access",
              "Advanced security features"
            ]}
          />
        </div>
      ),
    }
  ];

  return (
    <>
      <Navbar />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/img1.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
} 