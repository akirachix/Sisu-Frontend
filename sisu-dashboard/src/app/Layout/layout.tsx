"use client"; // Ensure this is at the top if you're using client-side functionality

import React, { ReactNode } from "react";
import Sidebar from "../sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default Layout;
