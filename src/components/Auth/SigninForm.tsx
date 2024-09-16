"use client";
import * as React from "react";
import { LiteralUnion, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import withoutAuth from "./withoutAuth";
import Link from "next/link";
import { BuiltInProviderType } from "next-auth/providers/index";
import { SigninFormSchema } from "@/lib/validationSchema";
import { cn } from "@/lib/utils";

function SigninForm() {
  const router = useRouter();
  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit: handleSignIn,
      validationSchema: SigninFormSchema,
    });
  async function handleSocialAuth(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    type: LiteralUnion<BuiltInProviderType>
  ) {
    e.preventDefault();

    const response = await signIn(type);
    console.log("social type:", type, "response:", response);
  }
  async function handleSignIn(values: { email: string; password: string }) {
    const { email, password } = values;
    // Example: await signIn('credentials', { email, password })
    console.log("Registered user:", { email, password });
    // Add your own logic for registering the user
    // You could use NextAuth's signIn method or any other API to register the user
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("Response from next-auth", resp);

    if (resp?.ok) {
      router.push("/");
    }
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Welcome back to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="johndoe@gmail.com"
                className={cn(
                  errors.email && touched.email && "focus-visible:ring-red-700"
                )}
              />
              {errors.email && touched.email && (
                <span className=" text-sm text-red-700">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                placeholder="pass123!"
                className={cn(
                  errors.password &&
                    touched.password &&
                    "focus-visible:ring-red-700"
                )}
              />
              {errors.password && touched.password && (
                <span className="text-sm text-red-700">{errors.password}</span>
              )}
            </div>
            <Button
              disabled={
                errors.password !== undefined || errors.email !== undefined
              }
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
        <div className="text-right my-2">
          <Link className="text-blue-700" href="/auth/forgot-password">
            Forgot Password?
          </Link>{" "}
        </div>
      </CardContent>
      <CardFooter className="grid text-center">
        <span>
          {"Don't"} have an Account?{" "}
          <Link className="text-blue-700" href="/auth/register">
            Create One
          </Link>
        </span>
        <div className="text-center my-4">
          <span className="opacity-60">Or your can sign in with</span>
          <div className="flex gap-2 text-lg my-2 justify-center">
            <span
              className="flex items-center justify-center transition-all hover:cursor-pointer hover:bg-blue-700 hover:text-blue-50 p-2 hover:shadow-md shadow-sm rounded-full bg-slate-500"
              onClick={(e) => handleSocialAuth(e, "facebook")}
            >
              <FaFacebookF />
            </span>
            <span
              className="flex items-center justify-center transition-all hover:cursor-pointer hover:bg-red-700 hover:text-red-50 p-2 hover:shadow-md shadow-sm rounded-full bg-slate-500"
              onClick={(e) => handleSocialAuth(e, "google")}
            >
              <FaGoogle />
            </span>
            <span
              className="flex items-center justify-center transition-all hover:cursor-pointer hover:bg-blue-700 hover:text-blue-50 p-2 hover:shadow-md shadow-sm rounded-full bg-slate-500"
              onClick={(e) => handleSocialAuth(e, "github")}
            >
              <FaGithub />
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default withoutAuth(SigninForm);
