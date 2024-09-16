"use client";
import React from "react";
import withAuth from "@/components/Auth/withAuth";
import TopBar from "@/components/Dashboard/TopBar";

function page() {
  return (
    <div
      suppressHydrationWarning={true}
      className="flex items-center justify-center h-full flex-col gap-2 "
    >
      <TopBar />
      {/* page */}
      <div className="flex-1 bg-gray-400 rounded-md w-full h-full flex items-center justify-center">
        Dashboard Content
      </div>
    </div>
  );
}

export default withAuth(page);
