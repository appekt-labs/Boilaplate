import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "../ui/container";

export default function FAQs() {
  return (
    <section>
      <Container className="flex justify-center">
        <div>
          <div className="text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              FAQs
            </h2>
          </div>
          <div className="w-[368px] lg:w-[500px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the Next.js boilerplate?
                </AccordionTrigger>
                <AccordionContent>
                  The Next.js boilerplate is a starter template designed to help
                  developers quickly build scalable web applications using
                  Next.js 14, with built-in features like authentication and
                  database integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I customize the boilerplate?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the boilerplate is highly customizable. You can add or
                  remove features, change the design, and integrate with
                  different databases or third-party services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What technologies are included?
                </AccordionTrigger>
                <AccordionContent>
                  This boilerplate includes Next.js 14, Tailwind CSS for
                  styling, and MongoDB for data storage, along with
                  authentication using NextAuth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Is the boilerplate mobile-friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the boilerplate is responsive by default and can be
                  easily adapted for mobile and tablet screens using modern CSS
                  techniques like Flexbox and Grid.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I deploy the application?
                </AccordionTrigger>
                <AccordionContent>
                  You can deploy the application to platforms like Vercel, which
                  is optimized for Next.js, or any cloud provider that supports
                  Node.js applications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Is there built-in authentication?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the boilerplate comes with authentication set up using
                  NextAuth, supporting OAuth, email, and social logins out of
                  the box.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Can I integrate a CMS?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. The boilerplate can be integrated with headless
                  CMS platforms like Strapi, Sanity, or Contentful for dynamic
                  content management.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Is there support for server-side rendering (SSR)?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, Next.js 14 supports server-side rendering (SSR), static
                  site generation (SSG), and incremental static regeneration
                  (ISR) to meet various application needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
