"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NoImage } from "@/assets/Icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import moment from "moment";

const MovieLists = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getMovieLists();
  }, []);

  const getMovieLists = async () => {
    axios
      .get("/api/movies")
      .then((response) => {
        setMoviesList(response?.data?.data || []);
      })
      .catch((error) => {
        setMoviesList([]);
        console.error("Error:", error.response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/movies?id=${id}`)
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
      <div className=" flex flex-wrap gap-4">
        <AnimatePresence>
          {moviesList?.map((movie) => (
            <React.Fragment key={movie?._id}>
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
                  <Link href={`/movieDetails/${movie?._id}`}>
                    <div className="h-full">
                      <div className="text-xl font-[400] mb-3 capitalize">
                        {movie?.movieTitle}
                      </div>
                      <div className="flex text-sm flex-col gap-3">
                        <div className="text-base">
                          <span className="mr-2">Released:</span>
                          {moment(movie?.releaseDate).format("DD MMM, YYYY")}
                        </div>
                        <div className="text-base font-bold">
                          Rating: {movie.averageRating || 0}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex w-full justify-end text-xl gap-4">
                    <Link href={`/editMovie/${movie?._id}`}>
                      <FaEdit className="text-indigo-400" />
                    </Link>
                    <button onClick={() => handleDelete(movie?._id)}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MovieLists;
