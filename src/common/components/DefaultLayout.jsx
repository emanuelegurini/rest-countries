import { Outlet } from "react-router";
import {Header} from "./Header.jsx";
import {CountryProvider} from "../../providers/CountryProvider.jsx";
import {FiltersProvider} from "../../providers/FiltersProvider.jsx";
import {RegionsProvider} from "../../providers/RegionsProvider.jsx";


const DefaultLayout = () => {
    return (
        <FiltersProvider>
            <RegionsProvider>
                <CountryProvider>
                    <div>
                        <Header />
                        <div className="content">
                            <Outlet />
                        </div>
                    </div>
                </CountryProvider>
            </RegionsProvider>
        </FiltersProvider>
    );
};

export default DefaultLayout;