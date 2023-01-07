// home component
import React from "react";
import { Container, Box } from "@mui/system";

import background from "../../resources/background.jpeg";
import Intro from "./components/intro";

const Home = () => (
    <>
        <Box
            component="img"
            sx={{
                width: "100%",
            }}
            alt="The house from the offer."
            src={background}
        />
        <Container>
            <Box display="flex" width="100%">
                <Intro />
            </Box>
        </Container>
    </>
);

export default Home;
