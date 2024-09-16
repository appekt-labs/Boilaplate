import bcyrpt from 'bcryptjs';
import { Users } from "@/db/schema";
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        //ensure both the token and password exist
        const { token, password } = body;

        if (!token || !password) {

            return Response.json({ message: "Invalid token or No password" }, { status: 401 })
        }

        //ensure the token is valid
        const checkUser = await Users.findOne({
            resetPasswordToken: token
        })

        if (!checkUser) {
            return Response.json({ message: "Invalid token or No password" }, { status: 401 })
        }

        //Hash the new password
        const passwordHash = await bcyrpt.hash(password, 12)

        //save it in the database
        checkUser.password = passwordHash;
        checkUser.resetPasswordToken = null;
        await checkUser.save()

        // redirect the user to the login page
        return Response.redirect("/auth/signin", 302)
    } catch (error) {
        return Response.json({ message: "Server Error" }, { status: 500 })
    }
}