import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PhotosPage from "../pages/PhotosPage";
import HomePage from "../pages/HomePage";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "photos",
                element: <PhotosPage />
            },
        ]
    },
]);


export default router;