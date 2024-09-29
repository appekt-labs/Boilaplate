"use client";
import React from "react";

function error() {
  return (
    <div className="items-center justify-center flex w-screen h-dvh">
      <video
        id="banner-video"
        autoPlay={true}
        muted
        playsInline={true}
        loop={true}
      >
        <source src="/error.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default error;
