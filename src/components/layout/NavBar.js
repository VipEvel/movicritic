"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariant = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact Me" },
  ];

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-gray-300">
      {/* Logo */}
      <Link className="font-bold text-2xl" href="/">
        MOVIECRITIC
      </Link>
      <div className="flex gap-4">
        <Link href={'/addMovie'} className="bg-white ring-2 text-indigo-500 ring-indigo-300 rounded-md p-2 text-sm font-bold">
          Add new movie
        </Link>
        <Link href={'/addReview'} className="bg-indigo-500 rounded-md text-white border-none p-2 text-sm font-bold">
          Add new review
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
