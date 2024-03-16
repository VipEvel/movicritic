"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NoImage } from "@/assets/Icons";
import { FaEdit, FaTrash } from "react-icons/fa";

const MovieDetails = () => {
  const reviewList = [
    {
      id: "p-1",
      title: "project 1",
      desc: "dekhte hain",
      img: "",
      release: "1, jan 2024",
      rating: "4",
      link: "",
      github: "",
    },
    {
      id: "p-2",
      title: "project 2",
      desc: "dekhte hain",
      img: "",
      release: "1, jan 2024",
      link: "",
      rating: "4",
      github: "",
    },
    {
      id: "p-3",
      title: "project 3",
      release: "1, jan 2024",
      desc: "dekhte hain",
      rating: "4",
      img: "",
      link: "",
      github: "",
    },
  ];

  const handleDelete = () => {};

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col p-4 sm:px-8 md:px-12 lg:px-20 2xl:px-48 gap-16">
        <div className="text-3xl mt-10 flex justify-between">
          <h1 className="">The best movie review site!</h1>
          <div className="text-indigo-500">{`8.8 / 10`}</div>
        </div>

        <div className=" flex flex-col gap-4">
          <AnimatePresence>
            {reviewList?.map((project) => (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                  layout
                  whileHover={{
                    boxShadow: "4px 4px 11px -3px #a4a4a4",
                  }}
                  className="rounded-2xl p-4 border-2 border-black/10 bg-white w-full hover:shadow-md"
                >
                  <motion.div
                    whileHover="hover"
                    className="flex flex-col w-full gap-4 h-full"
                  >
                    <div className="flex w-full justify-center items-center">
                      <div className="w-20 h-20 mb-4">
                        <NoImage />
                      </div>
                    </div>
                    <div className="h-full w-full flex gap-4 justify-between items-end">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="text-base break-words">{project?.release}</div>
                        <div className="text-base italic">
                          By {project.rating}
                        </div>
                      </div>
                      <div className="flex justify-end text-xl gap-4 items-center">
                        <Link href="/editReview/12">
                          <FaEdit className="text-indigo-400" />
                        </Link>
                        <button onClick={handleDelete}>
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetails;
