import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomePage from './pages/HomePage.jsx'
import ErrorPage from "./pages/error-pages.jsx";
import DefaultLayout from "./common/components/DefaultLayout.jsx";
import CountryPage from "./pages/CountryPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                Component: HomePage,
            },
            {
                path: "/countries/:country-name",
                Component: CountryPage,
            },
        ]
    },
])


createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
            <BrowserRouter />
    </RouterProvider>
)
