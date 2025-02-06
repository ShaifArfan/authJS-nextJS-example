import CredLogin from "@/components/CredLogin";
import React from "react";
import { prisma } from "../../../prisma/prisma";
import { signIn } from "@/auth/authSetup";

function page() {
  const signup =async ({
    name,
    email,
    password
  }: {
    name: string,
    email: string,
    password: string
  }) => {
    "use server";
      console.log({name, email, password});
      const user = await prisma.user.create({
        data: {
          email: email,
          name: name,
          password: password // password will be hashed
        }
      })
      console.log(user);
      
      await signIn('credentials', { email: email, password: password, redirectTo: '/my-account' })
  } 
  return (
   <CredLogin signup={signup}></CredLogin> 
  );
}

export default page;
