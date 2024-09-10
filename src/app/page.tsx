"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { UseSessionOptions , signIn, signOut, useSession} from 'next-auth/react'
import { EventHandler, useEffect, useState } from 'react'
function Page() {
  const {data: session}= useSession()
  const [checkoutUrl, setCheckoutUrl]= useState("")
  async function handlePurchase(e: MouseEvent<HTMLButtonElement, MouseEvent>){
    try {
      e.preventDefault()
      const response = await axios.post("/api/purchase-product",{
        productId:"441361"
       })
       const {checkoutUrl} = response.data;
       console.log("session-checkout", checkoutUrl)
       if(!checkoutUrl) return;
       window.open(checkoutUrl, "_blank")
       alert("pressed")
    } catch (error) {
      console.log(error)
    }
}
  if(session){
    console.log(session)
    return (
      <div>
        <Button onClick={handlePurchase}>
          Upgrade
        </Button>
        Welcome {session.user.email}
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }


  return (
    <div>
    <button onClick={()=>signIn()}>Signin</button>
    </div>
  )
}

export default Page