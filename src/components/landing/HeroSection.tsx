import React from "react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <section className="min-w-screen min-h-[80dvh] grid">
      <Container className="flex justify-center items-center text-center">
        <div className=" flex justify-center">
          <div className="w-full text-wrap- lg:w-[70%] grid py-3  gap-4 text-center ">
            {/* main text */}
            <div className="">
              <h1 className="text-7xl font-medium ">
                {`You've never made a SAAS this`}{" "}
                <span className="w-[30ch] bg-gradient-to-r text-transparent bg-clip-text from-blue-600 via-green-500 to-indigo-400">
                  fast before
                </span>
              </h1>
            </div>
            {/* description text */}
            <div>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Gain maximum development speeds using our Next.js SAAS
                boilerplate and increase your efficiency while maintaining the
                value for your money.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex gap-10 justify-center items-center">
              <Button className="rounded-3xl">Get Started - for free</Button>

              <Button className="shadow-md rounded-3xl" variant={"ghost"}>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
