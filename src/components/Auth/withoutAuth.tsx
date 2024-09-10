"use client";

import { ReactNode, useEffect, ComponentType, useLayoutEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

interface WithAuthProps {
  Component: ComponentType;
}

export default function withoutAuth(ProtectedComponent: ComponentType): React.FC {
  return function AuthenticatedComponent() {
    const { data: session, status } = useSession();
    console.log(useSession())
    const router = useRouter();

    useEffect(() => {
      console.log("This is the section", session)
      if (status === "authenticated") {
        router.push("/dashboard");
      }
    }, [session, router, status]);

    if (status === "loading" && !session) {
      // redirect("/auth/signin")
      return null; // or a loading spinner
    }

    return <ProtectedComponent />;
  };
}