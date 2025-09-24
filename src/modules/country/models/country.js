import { fetchCountry, fetchCountries } from "../lib/api.js";

const extractNativeName = (nativeNameObj) => {
    if (!nativeNameObj) return null;

    const firstKey = Object.keys(nativeNameObj)[0];
    return nativeNameObj[firstKey]?.common || null;
};

const extractCurrencies = (currenciesObj) => {
    if (!currenciesObj) return [];

    return Object.values(currenciesObj)
        .map(currency => currency.name)
        .filter(Boolean);
};

const isValidCountryData = (data) => {
    return data && Array.isArray(data) && data.length > 0 && data[0];
};

export const getCountry = async (country) => {
    const data = await fetchCountry(country);

    if (!isValidCountryData(data)) {
        throw new Error(`Country "${country}" not found or invalid data received`);
    }

    const countryData = data[0];

    const cleanedCountry = {
        name: countryData.name?.common || null,
        nativeName: extractNativeName(countryData.name?.nativeName),
        population: countryData.population || 0,
        region: countryData.region || null,
        subregion: countryData.subregion || null,
        capital: countryData.capital || [],
        tld: countryData.tld || [],
        currencies: extractCurrencies(countryData.currencies),
        languages: countryData.languages || {},
    };

    if (countryData.borders && countryData.borders.length > 0) {
        try {
            const borderCountries = await fetchCountries(countryData.borders);
            if (isValidCountryData(borderCountries)) {
                cleanedCountry.borders = borderCountries
                    .map(border => border?.name?.common)
                    .filter(Boolean);
            } else {
                cleanedCountry.borders = [];
            }
        } catch (borderError) {
            cleanedCountry.borders = [];
        }
    } else {
        cleanedCountry.borders = [];
    }

    return cleanedCountry;
};