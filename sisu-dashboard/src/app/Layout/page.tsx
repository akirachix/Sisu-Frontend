"use client";
import React from "react";
<<<<<<< HEAD:sisu-dashboard/src/app/Layout/index.tsx
import Sidebar from "../Sidebar/page";
=======
import Sidebar from "../Componentsfeature/Sidebar/page";
>>>>>>> 9a5915b536c5ae0b98d5850b341b76bbde136045:sisu-dashboard/src/app/Layout/page.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-[#18315b] text-white">
        <Sidebar />
      </div>
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
