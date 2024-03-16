"use client";

import React from "react";
import AddNewMovie from "@/components/common/MovieForm";

const AddMoviePage = () => {
  // For adding a new movie
  const handleAddMovie = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <AddNewMovie mode="add" onSubmit={handleAddMovie} />
    </>
  );
};

export default AddMoviePage;
