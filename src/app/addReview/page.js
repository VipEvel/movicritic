"use client";

import React from "react";
import ReviewForm from "@/components/common/ReviewForm";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddReviewPage = () => {
  const router = useRouter();
  // For adding a new review
  const handleReviewSubmit = async (values, { setSubmitting }) => {
    await axios
      .post("/api/reviews", { ...values })
      .then((res) => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <ReviewForm mode="add" onSubmit={handleReviewSubmit} />
    </>
  );
};

export default AddReviewPage;
