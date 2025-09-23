import {fetchCountries, fetchRegions} from "../lib/api.js";

/*
* This functions return a clean version of the country list
*/
export const getCountries = async () => {
    const countries = await fetchCountries()
    return countries.map((country) => {
        return {
            flag: { png: country?.flags?.png, alt: country?.flags?.alt},
            name: country?.name?.common,
            population: country?.population,
            region: country?.region,
            capital: country?.capital[0],
        }
    })
}

/*
* This functions return a clean version of the region list
* Problem with region api is that we have many duplicate data
*/
export const getRegions = async () => {
    const regionsCleaned = new Set();
    const regions = await fetchRegions()
    regions.map((region) => {
        regionsCleaned.add(region.region)
    })
    return Array.from(regionsCleaned)
}

