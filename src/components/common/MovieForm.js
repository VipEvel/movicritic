// AddNewMovie.js
import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddNewMovie = ({ mode, initialValues, onSubmit }) => {
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
            {mode === "add" ? "Add new movie" : "Edit movie"}
          </h1>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              if (!values.movieName) {
                errors.movieName = "Required";
              }
              if (!values.releaseDate) {
                errors.releaseDate = "Required";
              }
              return errors;
            }}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full gap-8">
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    type="text"
                    name="movieName"
                    placeholder="Movie Name"
                    className="focus:outline-none w-full"
                  />
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="movieName"
                    component="div"
                  />
                </div>
                <div className="form-input bg-white shadow-md rounded-xl p-4 relative ring-2 ring-indigo-400">
                  <Field
                    type="date"
                    name="releaseDate"
                    className="focus:outline-none w-full"
                  />
                  <ErrorMessage
                    className="text-red-500 text-right w-full"
                    name="releaseDate"
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
                  {mode === "add" ? "Add Movie" : "Update Movie"}
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </motion.div>
  );
};

export default AddNewMovie;
