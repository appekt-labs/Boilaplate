import Features from "@/components/Features/Features";
import { Container } from "@/components/ui/container";
import { WaitListBadge } from "@/components/WaitList";
import { WaitListHeroSection } from "@/components/WaitList";
import { WaitListNavbar } from "@/components/WaitList";
import { WaitListSocials } from "@/components/WaitList";
import Pricing from "@/components/WaitList/Pricing";
import Footer from "@/components/Footer";
import React from "react";

export default function Page() {
  return (
    <main>
      <Container className="">
        <WaitListNavbar />
        <WaitListBadge />
        <WaitListHeroSection />
        <WaitListSocials />
        <Features />
        <Pricing />
        <Footer />
      </Container>
    </main>
  );
}
