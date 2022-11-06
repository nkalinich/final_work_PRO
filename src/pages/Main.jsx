import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Axios from "../hooks/axios";
import img from "../components/img/start.png";


const Setting = () => {

  let apiUrl = "/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  const { loading, error } = Axios({ url: apiUrl});

  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!!
      </Typography>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/question");
  };

  return (
    <form onSubmit={handleSubmit}>
      <img className="start-pic" src={img} alt="Quiz" />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Setting;