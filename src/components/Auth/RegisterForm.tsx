"use client";
import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
import { LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { useFormik } from "formik";
import { SigninFormSchema } from "@/lib/validationSchema";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function RegisterForm() {
  const router = useRouter();
  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit: handleRegister,
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

  async function handleRegister(values: { email: string; password: string }) {
    const { email, password } = values;
    // Add your own logic for registering the user
    // You could use NextAuth's signIn method or any other API to register the user
    // Since NextAuth doesn't have signup/register, a custom route is used and the signin function is triggered if successful
    const response = await axios.post("/api/auth/register", {
      email,
      password,
    });

    console.log("response from server", response.data);
    // Example: await signIn('credentials', { email, password })
    console.log("Registered user:", { email, password });

    if (response.status >= 400) {
      toast.error(response.data.message || "Error");
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      //inform the user that it was success and redirect them to the dashboard
      toast.success(response.data.message || "Success");
      router.push("/dashboard");
    }
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Get started with BoilaPlate today</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                id="email"
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                id="password"
                type="password"
                placeholder="pass123!"
                className={cn(
                  errors.password &&
                    touched.password &&
                    "focus-visible:ring-red-700"
                )}
              />
              {errors.password && touched.password && (
                <span className=" text-sm text-red-700">{errors.password}</span>
              )}
            </div>
            <Button type="submit">Register</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid text-center">
        <span>
          Already have an Account?{" "}
          <Link className="text-blue-950" href="/auth/signin">
            Sign In
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

export default withoutAuth(RegisterForm);
