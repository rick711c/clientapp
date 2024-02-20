import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/appbar";

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div>
           <ResponsiveAppBar></ResponsiveAppBar>
        </div>
    )
};

export default Homepage;
