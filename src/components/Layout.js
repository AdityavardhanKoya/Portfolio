import React from 'react'
import { Analytics } from "@vercel/analytics/react";

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 inline-block p-32 bg-light ${className}`}>
        {children}
        <Analytics />
    </div>
  )
}

export default Layout