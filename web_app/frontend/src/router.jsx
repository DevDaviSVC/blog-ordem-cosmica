import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Article from "./pages/article/Article";
import CreateArticle from "./pages/createArticle/CreateArticle";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "article/:id",
            element: <Article />
        },
        {
            path: "create",
            element: <CreateArticle />
        }
    ]
}
]);

export default router;