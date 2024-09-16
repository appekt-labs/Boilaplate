"use client";
import React from "react";
import { Button } from "../ui/button";
import { TbLogout } from "react-icons/tb";
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

function LogoutButton() {
  const router = useRouter();
  //handle logout
  function handleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    //logs out the user
    signOut();

    //redirects the user to the signin page
    router.push("/auth/signin");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="py-2 px-4 flex items-center">
          <span className="text-2xl mr-2">
            {" "}
            <TbLogout />{" "}
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
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutButton;
