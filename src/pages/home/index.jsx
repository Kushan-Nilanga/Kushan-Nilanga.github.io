// home component
import React from "react";
import { Container, Box } from "@mui/system";
import background from "../../resources/background.jpeg";

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
        <Container></Container>
    </>
);

export default Home;
