"use client"
import { Package, Truck, Headphones } from "lucide-react"
import ContentHeader from "../common/ContentHeader"
import PageLayout from "../layout/PageLayout"

const Quality = () => {
  const features = [
    {
      icon: Package,
      title: "100% Authentic Products",
      description:
        "All our items are guaranteed authentic — from factory-sealed Pokémon boxes to verified basketball singles. No fakes, no replicas — just real collectibles.",
    },
    {
      icon: Truck,
      title: "Fast & Secure Shipping",
      description:
        "All our items are guaranteed authentic — from factory-sealed Pokémon boxes to verified basketball singles. No fakes, no replicas — just real collectibles.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description:
        "All our items are guaranteed authentic — from factory-sealed Pokémon boxes to verified basketball singles. No fakes, no replicas — just real collectibles.",
    },
  ]

  return (
    <section>
      <PageLayout>
        <ContentHeader
          title="Authenticity. Quality. Care."
          subtitle="We treat your order like it's our own. Every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[60px] border border-gray-300 p-10 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon with blue background */}
              <div className="rounded-full flex items-center mb-6 relative">
                <div className="w-8 h-8 bg-[#7AA0D5] rounded-full flex items-center justify-center">
                  <feature.icon className="absolute -top-4 -left-4 w-10 h-10" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-title mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-subtitle leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  )
}

export default Quality
