import darkThemeLogo from '../footer_logo.svg';
import lightThemeLogo from '../header_logo.svg';
import {useSelector} from "react-redux";
import {RootState} from "src/app/store";

export const Logo = () => {

    // Получаем информацию о том, какая тема сейчас установлена
    const theme = useSelector((state: RootState) => state.theme.darkTheme);
    return (
        <img src={theme ? darkThemeLogo : lightThemeLogo} alt="logo" />
    );
};