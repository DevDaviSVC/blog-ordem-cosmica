import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            index: true,
            element: <Home />
        }
    ]
}
]);

export default router;