import { NextRequest } from "next/server";
import { Users } from "@/db/schemas"
export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url)

        //get the token from the url
        const token = url.searchParams.get("token");

        //ensure the token exists
        if (!token) {
            return Response.json({ message: "No token provided" }, { status: 401 })
        }

        //find the user and update the user to verified 
        const user = await Users.updateOne({ verificationToken: token }, { verificationToken: null, isVerified: true })

        //if there is no user with that token inform the user the token has already been used
        if (user) {
            return Response.redirect('/dashboard', 302);
        }

        return Response.json({ message: "Invalid Token" }, { status: 401 })
    } catch (error) {
        return Response.json({ message: "Server Error" }, { status: 500 })
    }
}