"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NoImage } from "@/assets/Icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const MovieDetails = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getMovieLists();
  }, []);

  const getMovieLists = async () => {
    axios
      .get("/api/reviews")
      .then((response) => {
        console.log(response?.data?.data);
        setReviewList(response?.data?.data || []);
      })
      .catch((error) => {
        setReviewList([]);
        console.error("Error:", error.response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/reviews?id=${id}`)
      .then((response) => {
        getMovieLists();
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

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
            {reviewList?.map((review) => (
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
                        <div className="text-base break-words">
                          {review?.release}
                        </div>
                        <div className="text-base italic">
                          By {review.rating}
                        </div>
                      </div>
                      <div className="flex justify-end text-xl gap-4 items-center">
                        <Link href="/editReview/12">
                          <FaEdit className="text-indigo-400" />
                        </Link>
                        <button onClick={() => handleDelete(review?._id)}>
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
