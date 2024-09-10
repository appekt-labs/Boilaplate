import SigninForm from "@/components/Auth/SigninForm";
import { Container } from "@/components/ui/container";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen w-[100vw]">
      <Container>
        <SigninForm />
      </Container>
    </div>
  );
}
