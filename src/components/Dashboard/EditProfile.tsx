"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import * as Yup from "yup";
import UpdatePassword from "./UpdatePassword";
import EditProfileImage from "./EditProfileImage";
interface IUser {
  name?: string;
  image?: string;
  email: string;
  isVerified?: boolean;
  isSubscribed?: boolean;
}
interface IData {
  data: {
    message: string;
    user: IUser;
  };
}

function EditProfile() {
  const [profileSnapshot, setProfileSnapshot] = useState<IUser>({
    name: "",
    image: "",
    email: "",
  });

  // fetch user profile
  const { data, error, isLoading, isError } = useQuery<IData>({
    queryKey: ["user-profile"],
    queryFn: async () => await axios.get("/api/auth/user-profile"),
  });

  async function handleUpdate(
    e: React.FocusEvent<HTMLInputElement, Element>,
    field: "email" | "name"
  ) {
    try {
      e.preventDefault();
      //ensure profile snapshot and userprofile are not null
      if (profileSnapshot === null) {
        return;
      }
      console.log("profileSnapshot", profileSnapshot);
      //ensure the user name is of sufficient length
      const updateObj: any = {};
      if (field === "email") {
        //ensure the new email is valid
        const emailSchema = Yup.string().email();

        if (await emailSchema.isValid(profileSnapshot.email)) {
          updateObj.email = profileSnapshot.email;
        } else {
          toast.error(`Invalid ${field}`);
          return;
        }
      } else {
        //then the field is the name
        const nameSchema = Yup.string().min(6).max(12);
        if (await nameSchema.isValid(profileSnapshot?.name)) {
          updateObj.name = profileSnapshot.name;
        } else {
          toast.error(`Invalid ${field}`);
          return;
        }
      }

      const response = await axios.patch("/api/auth/user-profile", {
        ...updateObj,
      });

      // generic successful response
      if (response.status < 300) {
        toast.success(`${field} successfully updated`);
      }
    } catch (error) {
      console.log("error updating name", error);
      toast.error(`Error updating ${field}`);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || data === undefined) {
    if (error) {
      console.log("error", error);
      toast.error("Error fetching user profile");
    }
    return <div>Error fetching user profile</div>;
  }
  console.log("data-user-profile", data);
  return (
    <div className="ml-2 w-[240px] grid gap-8">
      {/* profile pic */}
      <EditProfileImage image={data.data.user.image} />
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label className="font-semibold text-lg" htmlFor="name">
            Name
          </Label>
          <Input
            onChange={(e) =>
              setProfileSnapshot((prev) => ({ ...prev, name: e.target.value }))
            }
            onBlur={(e) => handleUpdate(e, "name")}
            defaultValue={data?.data?.user?.name || ""}
            placeholder="name"
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <Label className="font-semibold text-lg" htmlFor="email">
            Email
          </Label>
          <Input
            onChange={(e) =>
              setProfileSnapshot((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={(e) => handleUpdate(e, "email")}
            defaultValue={data?.data?.user?.email || ""}
            placeholder="email"
            type="email"
          />
        </div>
        {/* change password section */}
        <div>
          <UpdatePassword />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
