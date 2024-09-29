"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  UseSessionOptions,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { EventHandler, useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Demo from "@/components/landing/Demo";
import Features from "@/components/Features/Features";
import Pricing from "@/components/WaitList/Pricing";
import Footer from "@/components/Footer";
import FAQs from "@/components/landing/FAQs";
function Page() {
  const { data: session } = useSession();

  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <main>
      {/* header */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* demo section */}
      <Demo />
      {/* features */}
      <Features />
      {/* pricing */}
      <Pricing />
      {/* faqs */}
      <FAQs />
      {/* final call to action */}

      {/* footer */}
      <Footer />
    </main>
  );
}

export default Page;
