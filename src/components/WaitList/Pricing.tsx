import React from "react";
import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
const pricingPlans = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    duration: "/month",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
    buttonText: "Get started",
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    duration: "/month",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
    buttonText: "Get started",
  },
  {
    title: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    duration: "/month",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developers",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
    buttonText: "Get started",
  },
];

function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {plan.duration}
                </span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <TiTick className="text-green-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
