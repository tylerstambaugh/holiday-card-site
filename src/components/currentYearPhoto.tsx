
import React from "react"
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Front2024 from "../assets/images/holiday-cards/2024_Back_Catalogue.jpg";
import { Box, } from "@mui/material";
import "../App.css"

export const CurrentYearPhoto: React.FC = () => {
    return (

        <Box justifyContent={"center"} sx={{ pt: 2, }} >
            <Zoom>
                <img src={Front2024} className="current-year-photo" />
            </Zoom>
        </Box>
    )
}