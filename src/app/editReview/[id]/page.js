"use client";

import ReviewForm from "@/components/common/ReviewForm";
import React from "react";

const EditReviewPage = () => {
  // For editing an existing movie
  const handleEditReview = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Movie updated!");
      setSubmitting(false);
    }, 400);
  };

  // Initial values for edit mode
  const initialEditValues = {
    movie: "vip",
    name: "vip",
    rating: 10,
    comment: "hi",
  };

  return (
    <>
      <ReviewForm
        mode="edit"
        initialValues={initialEditValues}
        onSubmit={handleEditReview}
      />
    </>
  );
};

export default EditReviewPage;
