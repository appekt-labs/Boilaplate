"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  UseSessionOptions,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { EventHandler, useEffect, useState } from "react";
function Page() {
  const { data: session } = useSession();
  const [checkoutUrl, setCheckoutUrl] = useState("");

  if (session) {
    console.log(session);
    return <div>Home Page</div>;
  }

  return (
    <div>
      <main>Sign in</main>
    </div>
  );
}

export default Page;
