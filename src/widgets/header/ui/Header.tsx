import {AppBar, Box, CssBaseline, FormControlLabel, Switch, Toolbar} from "@mui/material";
import {Logo} from "src/shared/assets/logo";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/app/store";
import {toggleTheme} from "src/entities/theme/themeSlice";
import React from "react";

export const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                   <Logo/>
                </Toolbar>
                <FormControlLabel
                    control={
                        <Switch
                            checked={theme.darkTheme}
                            onChange={() => dispatch(toggleTheme())}
                        />
                    }
                    label="Toggle Theme"
                />
            </AppBar>
        </Box>
    );
};
