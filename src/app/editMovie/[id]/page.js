"use client";

import AddNewMovie from "@/components/common/MovieForm";
import React from "react";

const EditMoviePage = () => {
  // For editing an existing movie
  const handleEditMovie = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Movie updated!");
      setSubmitting(false);
    }, 400);
  };

  // Initial values for edit mode
  const initialEditValues = {
    movieName: "Existing Movie",
    releaseDate: "2024-03-31",
  };

  return (
    <>
      <AddNewMovie
        mode="edit"
        initialValues={initialEditValues}
        onSubmit={handleEditMovie}
      />
    </>
  );
};

export default EditMoviePage;
