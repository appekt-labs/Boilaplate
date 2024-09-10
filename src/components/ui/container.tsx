import * as React from "react"

import { type ClassValue, clsx } from "clsx"
import { cn } from "@/lib/utils"



const Container = ({className, children}:{className?:ClassValue, children:React.ReactNode}) => {
      return (
        <section
          className={cn( className, "grid gap-4 md:gap-5 lg:gap-6 max-w-7xl, mx-2 md:mx-4 lg:mx-auto md:px-2 px-1" )}
        >
            {children}
        </section>
      )
    }
  


  export {Container}