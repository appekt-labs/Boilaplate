import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { Users } from "@/db/schemas";
import sendEmail from "@/lib/sendEmail";
import ResetPassword from "@/components/EmailTemplates/ResetPassword";

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
    try {

        const body = await req.json()

        console.log("body", body)

        //ensure the email is there;
        const { email } = body;
        if (!email) {
            return Response.json({ message: "No email provided" }, { status: 401 })
        }

        console.log("body", body, "email", email)


        //create a unique token
        const token = uuidv4();


        // create a token and store it in the database (call it resetPasswordToken)
        const user = await Users.updateOne({ email }, { resetPasswordToken: token })

        if (!user.acknowledged) {
            return Response.json({ message: "This user doesn't exist" }, { status: 401 })
        }

        // send the token to the user with and link to the reset password page
        await sendEmail({
            from: "Acme <onboarding@resend.dev>",
            to: email!,
            subject: "Verify Your Account",
            react: ResetPassword({ resetPasswordLink: `http://localhost:3000/auth/reset-password?token=${token}` })
        }
        )

        return Response.json({ message: "Password reset link sent to the email" }, { status: 201 })
    } catch (error) {
        return Response.json({ message: "Server Error" }, { status: 500 })
    }
}