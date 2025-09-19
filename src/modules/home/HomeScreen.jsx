import {useEffect, useState} from "react";
import {getCountries} from "./models/countries.js";

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
        <div className="min-h-screen bg-gray-50">
            {
                countries.map((country) => (
                    <div key={country.id}>{country.name}</div>
                ))
            }
        </div>
    )
}

export default HomeScreen