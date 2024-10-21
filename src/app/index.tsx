import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from "react-redux";
import { App } from './app';
import { FormControlLabel, FormGroup, Switch, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "src/shared/theme";
import { persistor, store, RootState } from "src/app/store";
import { PersistGate } from 'redux-persist/integration/react';
import { toggleTheme } from "src/entities/theme/themeSlice";

const reactRoot = createRoot(
    document.getElementById('root')!,
);

const RootComponent = () => {
    // Выбираем тему из Redux
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    return (
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
            <App />
            <FormGroup sx={{marginTop:'20px'}}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={theme.darkTheme}
                            onChange={() => dispatch(toggleTheme())}
                        />
                    }
                    label="Toggle Theme"
                />
            </FormGroup>
        </ThemeProvider>
    );
};

reactRoot.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootComponent />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
