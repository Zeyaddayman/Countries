import CountriesList from "./CountriesList";

export default async function AllCountries({ query }) {

    let countries;
    
    const res = await fetch("https://countries-erf9.onrender.com/api/countries");
    countries = await res.json();
    countries = countries.data.countries;

    if (query) {
        countries = countries.filter((country) => 
            (country.name.toLowerCase()).includes(query.toLowerCase())
        )
    }

    return (
        <CountriesList countries={countries} />
    )
}