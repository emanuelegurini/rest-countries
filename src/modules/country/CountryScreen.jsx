import { getCountry } from "./models/country.js";
import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router";

export const CountryScreen = () => {

    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const {country_name} = useParams();

   const loadCountry = async (value) => {
       try {
           const response = await getCountry(value);
           setCountry(response);
       } catch (e) {
           setError(e);
           console.error(e)
       } finally {
           setLoading(false);
       }
   }

   useEffect(() => {
       loadCountry(country_name);
   }, [country_name]);

    // CONDITIONS
    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div>

            {
                country?.borders?.map((country) => (
                    <NavLink to={`/countries/${country.toLowerCase()}`}>
                        {country}
                    </NavLink>
                ))
            }
        </div>)
}