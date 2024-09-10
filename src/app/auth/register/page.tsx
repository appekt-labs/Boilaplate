import { Container } from "@/components/ui/container";
import React from "react";
import RegisterForm from "@/components/Auth/RegisterForm";
function page() {
  return (
    <div className="flex items-center justify-center min-h-screen w-[100vw]">
      <Container>
        <RegisterForm />
      </Container>
    </div>
  );
}

export default page;
