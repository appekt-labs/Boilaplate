import React from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import axios from "axios";
import toast from "react-hot-toast";

function EditProfileImage({ image }: { image: string | undefined }) {
  return (
    <div className="flex items-center relative justify-center">
      <div className="rounded-full border overflow-hidden flex items-center justify-center border-gray-300">
        {image === undefined ? (
          <Image
            src="https://fakeimg.pl/120x120"
            alt="profile"
            height={120}
            width={120}
          />
        ) : (
          <CldImage src={image} alt="profile" height={120} width={120} />
        )}
        <div className="absolute bottom-0 right-0">
          <CldUploadWidget
            onSuccess={(results) => {
              try {
                if (results.info === undefined) {
                  toast.error("Failed to change profile image");
                  return;
                }
                const info = results.info as CloudinaryUploadWidgetInfo;
                const { url } = info;
                // update the database with the image
                const response = axios.patch("/api/auth/user-profile", {
                  image: url,
                });
                toast.success("Successfully changed profile image");
                console.log("results-object", results);
              } catch (error) {
                toast.error(`Failed to change profile image`);
              }
            }}
            signatureEndpoint={`/api/sign-image`}
          >
            {({ open }) => {
              return (
                <button onClick={() => open()}>
                  <FiEdit2 />
                </button>
              );
            }}
          </CldUploadWidget>
          <span className="sr-only">Upload profile image</span>
        </div>
      </div>
    </div>
  );
}

export default EditProfileImage;
