import { auth } from "@/auth/authSetup";
import React from "react";

async function ServerComponent() {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <div className="text-center max-w-[300px] mx-auto bg-slate-800 p-2 rounded-md w-full">
      <h1 className="mb-2">This is Server component</h1>
      <div className="bg-slate-900 p-2 rounded-md">
        <h1>This is protected data</h1>
        <p>Name: {session.user?.name}</p>
      </div>
    </div>
  );
}

export default ServerComponent;
