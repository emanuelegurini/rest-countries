/*
* This functions is returning a raw data from the API
* This is the repository layer.
* Data coming from this function should always be clened.
*/
export const fetchCountries = async() => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}all?fields=name,capital,flags,population,region`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
}

/*
* This functions is returning a raw data from the API
* This is the repository layer.
* Data coming from this function should always be clened.
*/
export const fetchRegions = async() => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}all?fields=region`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
}