import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import FormPost from "../pages/FormPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            },
            {
                path: "/post",
                element: <FormPost/>
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            }
        ]
        },
    ]);

export default router