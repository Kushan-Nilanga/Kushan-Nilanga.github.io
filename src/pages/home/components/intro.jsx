import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// Green 44af69
// Red f8333c
// Yellow fcab10
// Blue 2b9eb3
// Metal 292f36

const R = (props) => <b style={{ color: "#f8333c" }}>{props.children}</b>;
const G = (props) => <b style={{ color: "#44af69" }}>{props.children}</b>;
const Y = (props) => <b style={{ color: "#fcab10" }}>{props.children}</b>;
const B = (props) => <b style={{ color: "#2b9eb3" }}>{props.children}</b>;
const M = (props) => <b style={{ color: "#292f36" }}>{props.children}</b>;

export default function Intro() {
    return (
        <Box m="auto" p="1em" width="50%">
            <Typography variant="h5" textAlign="center" fontWeight="100">
                Hi, I'm <R>Don</R>. I'm a cloud <G>solutions architect</G> and a <Y>software developer</Y>. I like building things and solving problems. I'm currently interning at <B>ANZ Banking Group</B> as a <M>cloud architect</M>.
            </Typography>
        </Box>
    );
}
