"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function UpdatePassword() {
  const {
    values,
    touched,
    isValid,
    handleChange,
    errors,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: async (values) => {
      try {
        // same shape as initial values
        // make a request to the database
        const response = await axios.patch("/api/auth/user-profile", {
          password: values.password,
        });

        //generic successful response;
        if (response.status < 300) {
          toast.success("successfully updated password");
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Error updating password");
      }
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <Button
          variant="ghost"
          className="bg-red-200 hover:bg-red-300 hover:text-red-900 transition-all text-red-600"
        >
          Change Password
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently change your
            password
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
            id="update-password-form"
          >
            <div className="text-sm grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value={values.password}
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {/* If this field has been touched, and it contains an error, display it
               */}
              {touched.password && errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={values.confirmPassword}
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {/* If this field has been touched, and it contains an error, display
           it */}
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="text-sm text-red-600">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </form>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={
              values.confirmPassword.length === 0 ||
              values.password.length === 0 ||
              !isValid
            }
            type="submit"
            form="update-password-form"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UpdatePassword;
