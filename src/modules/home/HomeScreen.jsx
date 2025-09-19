import {useEffect, useState} from "react";
import {getCountries} from "./models/countries.js";
import {CountryCard} from "./components/CountryCard.jsx";

function HomeScreen() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([])

    const loadCoutries = async() => {
        try {
            const response = await getCountries()
            setCountries(response)
        } catch (e) {
            setError(e)
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadCoutries()
    }, [])

    // CONDITIONS
    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (

        <div className="w-full flex justify-center bg-gray-50 py-8">
            <div className="max-w-6xl px-4">
                <div className="flex flex-wrap justify-center gap-6">
                    {countries.map((country) => (
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