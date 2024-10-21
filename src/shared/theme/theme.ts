import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#288e81',
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
                    backgroundColor: "#ffffff",
                }
            }
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#288e81',
        },
        background: {
            paper: "#393939",
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                }
            }
        }
    }
});