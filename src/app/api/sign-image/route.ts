import { v2 as cloudinary } from "cloudinary"
import { NextRequest } from "next/server"
export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as { paramsToSign: Record<string, string> }
        console.log("body", body);
        const { paramsToSign } = body;
        console.log("paramToSign", paramsToSign);
        const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET as string)

        return Response.json({ signature })
    } catch (error) {
        console.log("error", error);
        return Response.json({ message: "Failed to create signature" }, { status: 500 })
    }
}
