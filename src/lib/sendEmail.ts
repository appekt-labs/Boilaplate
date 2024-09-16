import { Resend } from 'resend';


import type { FC, ReactNode } from 'react';


interface sendEmailProps {
    from: string
    to: string,
    subject: string,
    react: ReactNode
}

async function sendEmail({ react, from, to, subject }: sendEmailProps) {
    try {
        const resend = new Resend(process.env.RESEND_API);
        const { data, error } = await resend.emails.send({
            from,
            to,
            subject,
            react
        });

        if (error) {
            console.log(error)
            throw new Error(error.message)
        }

        console.log("response- data", data)
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message || "Failed to send message");
        } else {
            throw new Error("Failed to send message");
        }
    }
}



export default sendEmail;