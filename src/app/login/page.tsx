'use client';

import LoginForm from "@/components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="flex flex-col p-6 max-w-[50vw] min-w-[20vw] bg-white m-4 rounded-lg shadow">
          <img
            src="/placeholder_logo.svg"
            alt="Submittals Logo"
            className="invert-0 light:invert p-4"
          />
          <LoginForm />
      </div>
    </div>
  );
}



