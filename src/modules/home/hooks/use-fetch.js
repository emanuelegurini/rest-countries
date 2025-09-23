import {useContext, useEffect, useState} from "react";
import {CountryContext} from "../../../providers/CountryProvider.jsx";
import {FiltersContext} from "../../../providers/FiltersProvider.jsx";
import {RegionsContext} from "../../../providers/RegionsProvider.jsx";
import {getCountries, getRegions} from "../models/countries.js";

export const useFetch = () => {

    const { countries, setCountries} = useContext(CountryContext);
    const { filter } = useContext(FiltersContext);
    const { setRegions} = useContext(RegionsContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const response = await Promise.all([getRegions(), getCountries()])
            setRegions(response[0])
            setCountries(response[1])
        } catch (e) {
            setError(e)
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (countries && countries.length > 0 && filter && filter !== null) {
            setLoading(false)
            return
        }
        loadData()
    }, [])

   return {error, loading, countries, filter }
}