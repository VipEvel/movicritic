"use client";

import React, { useEffect, useRef, useState } from "react";
import ReviewForm from "@/components/common/ReviewForm";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditReviewPage = ({ params }) => {
  const { id } = params;
  const [reviewData, setReviewData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = async () => {
    axios
      .get(`/api/reviews/${id}?all=false`)
      .then((response) => {
        let data = response?.data?.data || {};
        setReviewData(data);
      })
      .catch((error) => {
        setReviewData({});
        console.error("Error:", error.response.data);
      });
  };
  // For editing an existing movie
  const handleEditReview = async (values, { setSubmitting }) => {
    let finalVal = {
      movie: values?.movie,
      name: values?.name,
      rating: values?.rating,
      comment: values?.comment,
      title: values?.title,
    };
    await axios
      .put(`/api/reviews/${id}`, finalVal)
      .then((response) => {
        router.push(`/movieDetails/${values?.movie}`);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  const handleCancel = (values) => {
    router.push(`/movieDetails/${values?.movie}`);
  };

  return (
    <>
      <ReviewForm
        mode="edit"
        initialValues={reviewData}
        onSubmit={handleEditReview}
        onCancel={handleCancel}
      />
    </>
  );
};

export default EditReviewPage;
