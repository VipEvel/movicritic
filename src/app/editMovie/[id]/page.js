"use client";

import AddNewMovie from "@/components/common/MovieForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";

const EditMoviePage = ({ params }) => {
  const { id } = params;
  const [moviesDetails, setMoviesDetails] = useState({});
  const router = useRouter();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    await axios
      .get(`/api/movies/${id}`)
      .then((response) => {
        setMoviesDetails(response?.data?.data || []);
      })
      .catch((error) => {
        // setMoviesDetails({});
        console.error("Error:", error.response.data);
      });
  };
  // For editing an existing movie
  const handleEditMovie = async (values, { setSubmitting }) => {
    await axios
      .put(`/api/movies/${id}`, {
        movieTitle: values?.movieName,
        releaseDate: values?.releaseDate,
      })
      .then((response) => {
        router.push("/");
      })
      .catch((error) => {
        // setMoviesDetails({});
        console.error("Error:", error.response.data);
      });
  };

  // Initial values for edit mode
  const initialEditValues = {
    movieName: moviesDetails?.movieTitle,
    releaseDate: moment(moviesDetails?.releaseDate).format("YYYY-MM-DD"),
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
