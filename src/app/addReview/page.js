"use client";

import React from "react";
import ReviewForm from "@/components/common/ReviewForm";
import axios from "axios";

const AddReviewPage = () => {
  // For adding a new review
  const handleReviewSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    await axios
      .post("/api/reviews", { ...values, movieid: movie })
      .then(() => {
        Router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <>
      <ReviewForm mode="add" onSubmit={handleReviewSubmit} />
    </>
  );
};

export default AddReviewPage;
