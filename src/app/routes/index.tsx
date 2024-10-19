import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "src/pages/main";
import {DocumentsPage} from "src/pages/documents";
import {PrivacyPolicyPage} from "src/pages/privacy-policy";


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
    }
    // TODO: добавить страницу записи
])

export default router;