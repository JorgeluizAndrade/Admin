import { Box } from "@mui/material";
import Header from "../../componentes/Header";
import PieChart from "../../componentes/PieChart";
import React from "react";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Welcome to Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
