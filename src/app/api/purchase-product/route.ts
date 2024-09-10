import { lemonSqueezyApiInstance } from "@/lib/lemonSqueezyApiInstance"
import { ICheckOutBody } from '../../../types/lemonSqueezy';
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
    try {
      // check if user session exists
      const session = await getServerSession()
      console.log("session", session)
      
      if(!session){
        return Response.json({ message: "User not authenticated" }, {status:401})
      }
        const reqData = await req.json()
 
        //if there is no product ID
        if (!reqData.productId) {
            return Response.json({ message: "Missing request data" }, { status: 400 })
        }

        //Make a request to lemon squeezy to get the checkout link
        const response = await lemonSqueezyApiInstance.post('/checkouts', {
            data: {
                type: "checkouts",
                attributes:{
                    checkout_data:{
                        custom:{
                            user_id:"123",
                            
                        }
                    }
                },
                relationships: {
                  store: {
                    data: {
                      type: "stores",
                      id: process.env.LEMON_SQUEEZY_STORE_ID?.toString()
                    }
                  },
                  variant: {
                    data: {
                      type: "variants",
                      id: reqData.productId.toString()
                    }
                  }
                }
            } 
        })
        console.log("response from lemon squeezy",response.data.data.url)
         
        return Response.json({checkoutUrl:response.data.data.attributes.url})
    } catch (error) {
        console.log("purchase-error", error)
       return Response.json({ message: "Error Purchasing product" }, { status: 500 })
    }
}