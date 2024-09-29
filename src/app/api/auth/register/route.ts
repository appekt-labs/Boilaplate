import { Users } from '@/db/schemas'
import bcrypt from 'bcryptjs'
export async function POST(request: Request) {
    try {
        // get the data
        const { email, password } = await request.json()

        // validate the data
        if (!email || !password) {
            return new Response("Missing email or password", { status: 400 })
        }

        // Hash the password
        const passwordHash = await bcrypt.hash(password, 12)

        //save the information in the database and return the saved user
        const newUser = new Users({ email, password: passwordHash })
        await newUser.save()
        return new Response(JSON.stringify({ email }), { status: 200 })
    } catch (error) {
        console.log("Error saving new user", error)
        return new Response(JSON.stringify({ error: "Error saving user" }), { status: 501 })
    }
}
