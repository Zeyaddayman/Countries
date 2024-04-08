import regions from "../utils/regions";
import CountriesList from "./CountriesList";

export default async function RegionCountries({ region, query }) {

    let countries;
    
    const res = await fetch(`https://countries-erf9.onrender.com/api/countries/region/${region}`);
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

// export async function getStaticProps() {
//     return regions.map((region) => (
//         {region}
//     ))
// }