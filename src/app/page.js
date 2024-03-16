"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SearchComponent from "@/components/common/Search";
import MovieLists from "@/components/common/MovieLists";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col p-4 sm:px-8 md:px-12 lg:px-20 2xl:px-48 gap-16">
        <h1 className="text-3xl mt-10">The best movie review site!</h1>
        <MovieLists />
      </div>
    </motion.div>
  );
}
