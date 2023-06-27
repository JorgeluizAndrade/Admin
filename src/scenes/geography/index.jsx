import { Box } from "@mui/material";
import Header from "../../componentes/Header";
import GeoChart from "../../componentes/GeoChart";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
   <Box m='20px'>
    <Header title="Geo Chart" subtitle="Welcome to Geography Chart" />
    <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeoChart />
      </Box>
   </Box>

  )
}

export default Geography
