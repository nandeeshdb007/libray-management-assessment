"use client";

import { LibraryProvider } from "@/src/context/LibraryContext";

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <LibraryProvider>
      {children}
    </LibraryProvider>
  );
}
