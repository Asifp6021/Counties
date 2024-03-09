import { filteredElements } from './searchCountry.js';

export function selectCountryByRegion(countryArray, countries, searchQuery) {
	const filterCountry = countryArray.filter(function (con) {
		return con.region.toLowerCase().includes(searchQuery.toLowerCase());
	});

	filteredElements(filterCountry, countries);
}
