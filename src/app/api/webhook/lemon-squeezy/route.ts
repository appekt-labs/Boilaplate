import { Users } from "@/db/schemas";
import { EventTypes } from "@/types/lemonSqueezy";
import { Console } from "console";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();

    //eventType can be got from the headers("X-Event-Name")
    //eventType can also be got from "meta.event_name"
    const eventType = req.headers.get("X-Event-Name") as EventTypes;
    const body = await req.json();


    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE as string;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }



    // Logic according to event 
    //when the user orders a product
    if (eventType === "order_created") {
      //all custom data is available in .meta.custom_data
      const userEmail: string = body.meta.custom_data.user_email;
      const isSuccessful = body.data.attributes.status === "paid";



      //update the database and setUpdated to true.
      const userToUpdate = await Users.updateOne({ email: userEmail }, { isSubscribed: isSuccessful })
      if (!userToUpdate.acknowledged) {
        return Response.json({ message: "Failed to save purchase" }, { status: 500 })
      }
    }



    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}