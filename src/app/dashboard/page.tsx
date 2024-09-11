"use client";
import React from "react";
import withAuth from "@/components/Auth/withAuth";
import TopBar from "@/components/Dashboard/TopBar";

function page() {
  return (
    <div
      suppressHydrationWarning={true}
      className="flex items-center justify-center h-full"
    >
      <TopBar />
      {/* page */}
    </div>
  );
}

export default withAuth(page);
