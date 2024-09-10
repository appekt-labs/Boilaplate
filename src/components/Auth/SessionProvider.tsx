"use client"
import React, { ReactNode } from 'react'
import { SessionProvider as NextSession } from "next-auth/react"
function SessionProvider({children}:{children:ReactNode}) {
  return (
     <NextSession>
        {children}
     </NextSession>
  )
}

export default SessionProvider