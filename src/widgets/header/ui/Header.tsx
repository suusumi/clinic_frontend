import {AppBar, Box, CssBaseline, IconButton, Toolbar} from "@mui/material";

export const Header = () => {
    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton/>

                </Toolbar>
            </AppBar>
        </Box>
    );
};
