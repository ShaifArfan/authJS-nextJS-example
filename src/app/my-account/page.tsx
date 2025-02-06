import { auth } from "@/auth/authSetup";
import React from "react";

async function page() {
  const session = await auth();
  const user = session?.user;
  
  if(!session) {
    return null;
  }

  const userInfo = {
    name: user?.name,
    email: user?.email,
  };


  return (
    <>
      <div>This is my account page</div>
      <pre className="bg-slate-900 p-2 rounded-md">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
    </>
  );
}

export default page;
