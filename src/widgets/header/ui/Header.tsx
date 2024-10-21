import {AppBar, Box, CssBaseline, Toolbar} from "@mui/material";
import {Logo} from "src/shared/assets/logo";

export const Header = () => {
    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                   <Logo/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
