import Header from "../../componentes/Header";
import { Box } from "@mui/material";
import BarChart from "../../componentes/BarChart";

const Bar = () => {
    return (
        <Box m='20px'>
            <Header title="Bar Chart" subtitle="Welcome to Bar Chart"  />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;