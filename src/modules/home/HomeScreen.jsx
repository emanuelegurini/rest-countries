import {CountryCard} from "./components/CountryCard.jsx";
import {CountryFilters} from "./features/country-filters/CountryFilters.jsx";
import {useFetch} from "./hooks/use-fetch.js";

function HomeScreen() {

    const {error, loading, countries, filter} = useFetch();

    // CONDITIONS
    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (

        <div className="w-full flex justify-center bg-gray-50 py-8">
            <div className="max-w-6xl px-4">
                <CountryFilters />
                <div className="flex flex-wrap justify-center gap-6">
                    {countries
                        .filter(country => filter.region !== '' ? country.region === filter.region : country)
                        .filter((country) => ( country.name.toLowerCase().includes(filter.countryName) ))
                        .map((country) => (
                        <div key={country.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                            <CountryCard country={country} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeScreen