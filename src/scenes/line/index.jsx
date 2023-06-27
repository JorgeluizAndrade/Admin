import { Box } from "@mui/material";
import Header from "../../componentes/Header";
import LineChart from "../../componentes/LineChart";

import React from 'react'

const Line = () => {
  return (
    <Box m='20px'>
        <Header title="Line Chart" subtitle="Welcome to Line Chart" />
        <Box height='75vh'>
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line
