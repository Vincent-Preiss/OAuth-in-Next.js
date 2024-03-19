"use client";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }) {
  return (
    <SessionProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </SessionProvider>
  );
}
