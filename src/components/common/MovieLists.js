"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NoImage } from "@/assets/Icons";
import { FaEdit, FaTrash } from "react-icons/fa";

const MovieLists = () => {

  const projectLists = [
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
      <div className=" flex flex-wrap gap-4">
        <AnimatePresence>
          {projectLists?.map((project) => (
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
                className="rounded-2xl p-4 border-2 border-black/10 bg-white min-w-72 w-80 hover:shadow-md"
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
                  <Link href="#">
                    <div className="h-full">
                      <div className="text-xl font-[400] mb-3 capitalize">
                        {project?.title}
                      </div>
                      <div className="flex text-sm flex-col gap-3">
                        <div className="text-base">
                          Released: {project?.release}
                        </div>
                        <div className="text-base font-bold">
                          Rating: {project.rating}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex w-full justify-end text-xl gap-4">
                    <Link href="/editMovie/12">
                      <FaEdit className="text-indigo-400" />
                    </Link>
                    <button onClick={handleDelete}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MovieLists;
