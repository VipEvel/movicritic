"use client";

import React from "react";
import axios from "axios";
import AddNewMovie from "@/components/common/MovieForm";
import { Router } from "next/router";

const AddMoviePage = () => {
  // For adding a new movie
  const handleAddMovie = async (values, { setSubmitting }) => {
    await axios
      .post("/api/movies", {
        movieTitle: values?.movieName,
        releaseDate: values?.releaseDate,
      })
      .then(() => {
        Router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <>
      <AddNewMovie mode="add" onSubmit={handleAddMovie} />
    </>
  );
};

export default AddMoviePage;
