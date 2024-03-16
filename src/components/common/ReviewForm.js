"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ReviewForm = ({ mode, initialValues, onSubmit }) => {
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

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="m-auto p-8 bg-gradient-to-br from-indigo-200 via-blue-300 to-violet-300 w-[30rem] rounded-xl">
          <h1 className="text-3xl mb-8">
            {mode === "add" ? "Add New Review" : "Edit Review"}
          </h1>
          <Formik
            initialValues={
              initialValues || {
                movie: "",
                name: "",
                rating: "",
                comment: "",
              }
            }
            validate={(values) => {
              const errors = {};
              // Add validation logic here if needed
              return errors;
            }}
            onSubmit={(values, { isSubmitting }) => {
              onSubmit(
                {
                  ...values,
                  title: moviesList?.find((item) => item?._id === values?.movie)
                    ?.movieTitle,
                },
                { isSubmitting }
              );
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full gap-8">
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    as="select"
                    name="movie"
                    className="focus:outline-none w-full"
                  >
                    <option value="">Select a movie</option>
                    {moviesList?.map((movie) => (
                      <option key={movie?._id} value={movie?._id}>
                        {movie?.movieTitle}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="movie"
                    component="div"
                  />
                </div>
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="focus:outline-none w-full"
                  />
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="name"
                    component="div"
                  />
                </div>
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    type="number"
                    placeholder="Rating out of 10"
                    name="rating"
                    className="focus:outline-none w-full"
                  />
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="rating"
                    component="div"
                  />
                </div>
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    as="textarea"
                    placeholder="Review comment"
                    name="comment"
                    className="focus:outline-none w-full"
                  />
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="comment"
                    component="div"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{
                    boxShadow: "4px 4px 11px -3px #a4a4a4",
                    backgroundColor: "rgba(16,36,231)",
                  }}
                  disabled={isSubmitting}
                  className="rounded-xl bg-indigo-600 h-20 text-white font-bold text-2xl"
                >
                  {mode === "add" ? "Add Review" : "Update Review"}
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewForm;
