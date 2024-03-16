"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../layout/NavBar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-white via-violet-50 to-sky-300"
      >
        <div className="h-20">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)] vip-body overflow-auto">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
