import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Authentification Content</h1>
      {children}
    </div>
  );
}
