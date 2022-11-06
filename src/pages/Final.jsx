import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { handleScoreChnage } from "../reducer/actions";
import img from "../components/img/start.png";

const Final = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChnage(0));
    navigate("/");
  };

  return (
    <Box mt={10}>
      <img className="start-pic" src={img} alt="Quiz oicture" />
      <Typography variant="h3" mb={5}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined" fullWidth>
        Back to start!
      </Button>
    </Box>
  );
};

export default Final;