import React from "react";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full z-0 inline-block p-32 bg-light ${className}`}>
      {children}
      <Analytics /> {/* Add Analytics here */}
    </div>
  );
};

export default Layout;