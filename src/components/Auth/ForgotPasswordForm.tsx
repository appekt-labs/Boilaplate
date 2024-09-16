"use client";
import React, { useState } from "react";
import { LuKey } from "react-icons/lu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSendResetLink() {
    //Yup email schema validator
    const emailSchema = Yup.string().email();

    //Ensure that the email is valid
    if (!emailSchema.validateSync(email)) {
      toast.error("Invalid Email");
      return;
    }

    //request for the password reset link to be sent to the email
    const request = await axios.post("/api/auth/forgot-password", { email });
    console.log(request);
    //check for any errors
    if (request.status >= 400) {
      return;
    }

    //set sent to true incase there are no errors
    setSent(true);

    //inform the user that it has been sent
    toast.success("Sent!");
  }

  return (
    <div className="grid gap-4 mt-[2rem] text-center transition-all">
      <div>
        <div className="flex items-center justify-center text-3xl">
          <div className="flex items-center justify-center p-2 bg-slate-200 rounded-full">
            <span className="flex items-center justify-center p-2 bg-slate-400 rounded-full">
              {sent ? <MdOutlineMailOutline /> : <LuKey />}
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <h1 className="font-semibold text-2xl text-slate-900">
          {sent ? "Check Your Email" : "Forgot Password"}
        </h1>
        <p className="text-xl font-light text-slate-700">
          {sent
            ? `We sent a password reset link to ${email}`
            : "No worries! We shall send you reset instructions"}
        </p>
      </div>
      {sent ? null : (
        <div className="grid gap-3">
          <div className="grid gap-1">
            <Label className="text-lg font-semibold text-left" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              id="email"
            />
          </div>
          {sent ? (
            <Button onClick={() => (window.location.href = "mailto:")}>
              Open Email App
            </Button>
          ) : (
            <Button onClick={handleSendResetLink} className="">
              Reset Password
            </Button>
          )}
        </div>
      )}
      {sent ? (
        <div className="flex gap-2 items-center justify-center">
          <p>Didn&apos;t recieve the email?</p>{" "}
          <Button
            onClick={handleSendResetLink}
            variant="ghost"
            className="text-blue-700"
          >
            Click to Resend
          </Button>
        </div>
      ) : null}
      <div>
        <Link
          href="/auth/signin"
          className="flex justify-center text-sm text-slate-500 font-light items-center"
        >
          <span className="mr-2">
            <IoIosArrowRoundBack />
          </span>
          Back to log in
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
