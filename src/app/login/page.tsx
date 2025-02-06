"use client";
import CredLogin from "@/components/CredLogin";
import { signIn } from "next-auth/react";
import React from "react";

function page() {
  return (
   <CredLogin></CredLogin> 
  );
}

export default page;
