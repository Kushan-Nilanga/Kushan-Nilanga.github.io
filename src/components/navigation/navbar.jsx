// navbar
import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    useScrollTrigger,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const nav_items = ["about", "projects", "resume"];

const ScrollHandler = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined,
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "black" : "transparent",
            color: trigger ? "white" : "black",
            transition: trigger ? "0.3s" : "0.5s",
            boxShadow: "none",
            padding: "1em",
        },
    });
};

const Navbar = () => (
    <ScrollHandler>
        <AppBar position="fixed" component="nav">
            <Toolbar variant="dense">
                <Typography
                    variant="p"
                    component="div"
                    sx={{ flexGrow: 1, display: { sm: "block" } }}
                >
                    <Link
                        to={"/"}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <CloudIcon
                                sx={{ display: { xs: "none", sm: "block" } }}
                            />
                            <span style={{ padding: "1em" }}>Don Athalage</span>
                        </div>
                    </Link>
                </Typography>
                <Box sx={{ display: { sm: "block" } }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {nav_items.map((item) => (
                            <Link
                                to={item}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    padding: "0.5em",
                                }}
                                key={item}
                            >
                                {item}
                            </Link>
                        ))}
                        <a
                            href="https://github.com/Kushan-Nilanga"
                            style={{ textDecoration: "none" }}
                        >
                            <GitHubIcon sx={{ p: "0.5em" }} />
                        </a>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    </ScrollHandler>
);

export default Navbar;
