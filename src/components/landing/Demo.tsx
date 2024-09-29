import React from "react";
import { Container } from "../ui/container";
import Image from "next/image";

function Demo() {
  return (
    <section>
      <Container className="flex justify-center text-center">
        <div>
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Demo
          </h3>
          <div>
            <Image
              src="https://placeholder.co/600x200"
              height={600}
              width={600}
              alt="demo-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Demo;
