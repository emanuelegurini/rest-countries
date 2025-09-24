/*
* This functions is returning a raw data from the API
* This is the repository layer.
* Data coming from this function should always be clened.
*/
export const fetchCountry = async(country) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}name/${country}?fullText=true`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
}

export const fetchCountries = async(countries) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}alpha?codes=${countries}`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
}