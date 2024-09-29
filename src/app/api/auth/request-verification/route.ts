import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import { Users } from "@/db/schemas";
import sendEmail from "@/lib/sendEmail";
import VerifyAccount from '../../../../components/EmailTemplates/VerifyAccount';

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {

    try {

        //get the user session using get server side props
        const session = await getServerSession()
        console.log("session", session)

        //if there is no session
        if (!session || !session.user) {
            return Response.json({ message: "User not authenticated" }, { status: 401 })
        }

        //create a unique token
        const token = uuidv4();


        //save it in the database after creation
        const user = await Users.updateOne({ email: session.user?.email }, { verificationToken: token })


        //get create an email template with react.email
        await sendEmail({
            from: "Acme <onboarding@resend.dev>",
            to: session?.user.email!,
            subject: "Verify Your Account",
            react: VerifyAccount({ verificationLink: `http://localhost:3000/api/auth/verify-account?token=${token}` })
        }
        )

        return Response.json({ message: "The verification link has been sent your email" }, { status: 201 })

    } catch (error) {
        return Response.json({ message: "Server Error" }, { status: 401 })
    }
}