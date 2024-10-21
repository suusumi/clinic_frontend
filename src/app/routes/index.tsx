import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "src/pages/main";
import {DocumentsPage} from "src/pages/documents";
import {PrivacyPolicyPage} from "src/pages/privacy-policy";
import {LoginPage} from "src/pages/login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/documents",
        element: <DocumentsPage />
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />
    },
    {
        path: "/auth-admin",
        element: <LoginPage/>   //  TODO: если залогинен -> на страницу админки
    }
    // TODO: добавить страницу записи
])

export default router;