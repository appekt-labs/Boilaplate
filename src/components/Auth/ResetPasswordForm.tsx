"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import {
  IoIosArrowRoundBack,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { LuKey } from "react-icons/lu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetDone, setResetDone] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  async function handleSendResetLink() {
    //Yup email schema validator
    const passwordSchema = Yup.string()
      .min(8, "Password is too short")
      .max(20, "Password is too long");

    //Ensure that the email is valid
    if (!passwordSchema.validateSync(password)) {
      toast.error("Invalid Email");
      return;
    }

    //request for the password reset link to be resetDone to the email
    const request = await axios.post("/api/auth/reset-password", {
      password,
      token: token,
    });
    console.log(request);
    //check for any errors
    if (request.status >= 400) {
      return;
    }

    //set resetDoneto true incase there are no errors
    setResetDone(true);

    //inform the user that it has been resetDone
    toast.success("resetDone!");
  }

  return (
    <div className="grid gap-4 mt-[2rem] text-center transition-all lg:width-[40%] lg:mx-auto mx-4">
      <div>
        <div className="flex items-center justify-center text-3xl">
          <div
            className={cn(
              "flex items-center justify-center bg-slate-200 p-2 rounded-full",
              resetDone && "bg-emerald-200 "
            )}
          >
            <span
              className={cn(
                "flex items-center bg-slate-400 justify-center p-2 rounded-full",
                resetDone && "bg-emerald-400 text-emerald-950"
              )}
            >
              {resetDone ? <IoMdCheckmarkCircleOutline /> : <LuKey />}
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <h1 className="font-semibold text-2xl text-slate-900">
          {resetDone ? "Password Reset!" : "Set New Password"}
        </h1>
        <p className="text-xl font-light text-slate-700">
          {resetDone
            ? "Your Password has been reset"
            : "Your new password must be different from previously used passwords"}
        </p>
      </div>
      {resetDone ? null : (
        <>
          <div className="grid gap-3">
            <div className="grid gap-1">
              <Label
                className="text-lg font-semibold text-left"
                htmlFor="email"
              >
                Password
              </Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your new password"
                id="password"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <div className="grid gap-1">
              <Label
                className="text-lg font-semibold text-left"
                htmlFor="confirm-password"
              >
                Confirm Password
              </Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your new password"
                id="confirm-password"
              />
            </div>
            <Button onClick={handleSendResetLink} className="">
              Reset Password
            </Button>
          </div>
        </>
      )}
      {resetDone ? (
        <div>
          <Link
            href="/auth/signin"
            className="flex justify-center hover:shadow-md py-2 rounded group text-sm text-blue-50 shadow bg-blue-800 transition-all items-center"
          >
            Continue to log in
            <span className="group-hover:ml-3 group-hover:text-lg ml-2">
              <IoIosArrowRoundForward />
            </span>
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
}
export default ResetPasswordForm;
