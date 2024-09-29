import { Users } from "@/db/schemas";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs"

export const dynamic = "force-dynamic"

export function POST() {

}

export async function GET() {
    try {
        //get the user session
        const session = await getServerSession()

        //if there is no session abort request
        if (!session) {
            return Response.json({ message: "Unauthorized user" }, { status: 401 })
        }

        // get the current user's email
        const email = session.user?.email

        if (!email) {
            return Response.json({ message: "Unauthorized user" }, { status: 401 })
        }
        // fetch the user data from mongodb 
        const user = await Users.findOne({ email }).select("-password -verificationToken -resetPasswordToken")
        if (!user) {
            return Response.json({ message: "Unauthorized user" }, { status: 404 })
        }
        //send the back to the user
        return Response.json({ message: "Ok", user }, { status: 200 })
    } catch (error) {
        console.log("error-fetching user profile:", error);
        return Response.json({ message: "Error fetching user profile" }, { status: 500 })
    }
}



export async function PATCH(req: NextRequest) {
    try {
        interface IUser { email: string, name: string, image: string, password: string }
        const session = await getServerSession()

        //if there is no session abort request
        if (!session) {
            return Response.json({ message: "Unauthorized user" }, { status: 401 })
        }

        // get the current user's email
        const email = session.user?.email

        if (!email) {
            return Response.json({ message: "Unauthorized user" }, { status: 401 })
        }



        const { email: newEmail, password, name, image }: Partial<IUser> = await req.json()

        console.log("data from client", email, name)
        //new data for the user profile
        const userProfile: any = {}

        //new email
        if (newEmail) {

            //ensure the new email hasn't been used
            const checkNewEmail = await Users.findOne({ email: newEmail })

            if (checkNewEmail) {
                return Response.json({ message: "User with the email already exists" }, { status: 409 })
            }
            userProfile.email = newEmail;

            //unverify the account
            userProfile.isVerified = false;
        }

        //new name
        if (name) {
            userProfile.name = name;
        }


        //new image
        if (image) {
            userProfile.image = image
        }


        //new password
        if (password) {
            // hash the password
            const passwordHash = await bcrypt.hash(password, 12)
            userProfile.password = passwordHash;
        }


        //update the user based on the email from the session
        const updatedUser = await Users.updateOne({ email: email }, { ...userProfile })
        if (updatedUser.acknowledged) {
            return Response.json({ message: "Successfully updated " }, { status: 200 })
        }

        return Response.json({ message: "Failed to update the user profile" }, { status: 500 })

    } catch (error) {
        console.log("error-fetching user profile:", error);
        return Response.json({ message: "Error fetching user profile" }, { status: 500 })
    }
}