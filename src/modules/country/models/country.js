import {fetchCountry, fetchCountries} from "../lib/api.js";

/*
* This functions return a clean version of the country object
*/
export const getCountry = async (country) => {
    const data = await fetchCountry(country)
    const obj = {
        name: data[0]?.name?.common,
        nativeName: data[0]?.name?.nativeName[Object.keys(data[0]?.name?.nativeName)[Object.keys(data[0]?.name?.nativeName).length - 1]]?.common,
        population: data[0]?.population,
        region: data[0]?.region,
        subregion: data[0]?.subregion,
        capital: data[0]?.capital,
        tld: data[0]?.tld,
        currencies: data[0]?.currencies[Object.keys(data[0]?.currencies)[0]]?.name,
        languages: data[0]?.languages,
    }

    if (data[0]?.borders) {
        const countryData = await getCountries(data[0]?.borders)
        obj.borders = countryData.map(country => country?.name?.common)
    }

    return  obj
}

/*
* This functions return a clean version of the country object
*/
export const getCountries = async (countries) => {
    const data = await fetchCountries(countries)
    return data
}