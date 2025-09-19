export const CountryCard = ({ country }) => {

    const { flag, name = "N/A", population, region = "N/A", capital= "N/A" } = country;

    return (
        <div className="country-card bg-white rounded-sm shadow-md overflow-hidden h-full">
            <div className="w-full h-40">
                <img
                    className="country-card__img w-full h-full object-cover"
                    src={flag.png}
                    alt={flag.alt}
                />
            </div>
            <div className="country-card__info px-6 py-8">
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-sm text-gray-600 mb-1">Population: {population ? population.toLocaleString() : "N/A"}</p>
                <p className="text-sm text-gray-600 mb-1">Region: {region}</p>
                <p className="text-sm text-gray-600">Capital: {capital}</p>
            </div>
        </div>
    );
};