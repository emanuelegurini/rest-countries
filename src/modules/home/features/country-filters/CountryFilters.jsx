import { useContext } from "react";
import {FiltersContext} from "../../../../providers/FiltersProvider.jsx";
import {RegionsContext} from "../../../../providers/RegionsProvider.jsx";

const filterByRegion = 'Filter by Region'

export const  CountryFilters = () => {

    const {filter, setFilter} = useContext(FiltersContext);
    const { regions } = useContext(RegionsContext);

    const handleChange = (e) => {
       setFilter(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSelect = (e) => {
        setFilter(prev => ({ ...prev, region: e.target.value }));
    }

    const isDefaultRegionOption = (region) => {
       return region === filterByRegion ? '' : region
    }

    return (
        <div className="p-4">
            <input type='text' name='countryName' placeholder='Search for a country...' value={filter.countryName}
                   onChange={handleChange}/>

            <select name="regionName" onChange={handleSelect}>
                {
                    ['Filter by Region', ...regions]?.map((region) => {
                        const isDefault = isDefaultRegionOption(region);
                        return <option key={region} value={isDefault}>{region}</option>
                    })
                }
            </select>
        </div>
    )
}