"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TbLogout2 as TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaSpinner } from "react-icons/fa";

function LogoutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const router = useRouter();
  //handle logout
  function handleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      setIsSigningOut(true);
      e.preventDefault();

      //logs out the user
      signOut();

      //redirects the user to the signin page
      router.push("/auth/signin");
    } catch (error) {
      console.log("error-logging-out", error);
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="py-2 px-4 flex items-center">
          <span className="text-2xl mr-2">
            {" "}
            <TbLogout strokeWidth={1} />{" "}
          </span>{" "}
          <span className="text-sm">Log Out</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. You will be redirected to the sign-in
            page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 shadow-sm"
            onClick={handleLogout}
            disabled={isSigningOut}
          >
            {isSigningOut && (
              <span className="flex items-center animate-spin justify-center mr-1">
                <FaSpinner />
              </span>
            )}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutButton;
