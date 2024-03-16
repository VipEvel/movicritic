"use client";

import React, { useEffect, useRef, useState } from "react";
import ReviewForm from "@/components/common/ReviewForm";
import axios from "axios";

const EditReviewPage = ({ params }) => {
  const { id } = params;
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = async () => {
    console.log(id);
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
        Router.push("/");
      })
      .catch((error) => {
        // setMoviesDetails({});
        console.error("Error:", error.response.data);
      });
  };

  return (
    <>
      <ReviewForm
        mode="edit"
        initialValues={reviewData}
        onSubmit={handleEditReview}
      />
    </>
  );
};

export default EditReviewPage;
