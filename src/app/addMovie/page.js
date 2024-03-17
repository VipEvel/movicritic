"use client";

import React from "react";
import axios from "axios";
import AddNewMovie from "@/components/common/MovieForm";
import { useRouter } from "next/navigation";

const AddMoviePage = () => {
  const router = useRouter();
  // For adding a new movie
  const handleAddMovie = async (values, { setSubmitting }) => {
    await axios
      .post("/api/movies", {
        movieTitle: values?.movieName,
        releaseDate: values?.releaseDate,
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <AddNewMovie
        mode="add"
        onSubmit={handleAddMovie}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AddMoviePage;
