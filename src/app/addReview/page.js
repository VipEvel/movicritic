"use client";

import ReviewForm from "@/components/common/ReviewForm";
import React, { useState } from "react";

const AddReviewPage = () => {
  // For adding a new review
  const handleReviewSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <ReviewForm mode="add" onSubmit={handleReviewSubmit} />
    </>
  );
};

export default AddReviewPage;
