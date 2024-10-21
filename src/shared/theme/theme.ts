import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#6456ff',
        },
        background: {
            paper: "#f3f7fa",
        },
        text: {
            primary: "#000000",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    backgroundColor: "transparent",
                }
            }
        },
    },
});

export const darkTheme = createTheme({
    palette: {},
    components: {}
});