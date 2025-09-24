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
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "hello_world": "Hello world",
                }
            },
            pt: {
                translation: {
                    "hello_world": "Hello pateta",
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

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
                path: "/countries/:country_name",
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
