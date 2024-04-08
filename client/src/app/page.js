import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";
import regions from "./utils/regions";

export default async function Home({searchParams}) {

    const query = searchParams?.query || '';
    const region = searchParams?.region || '';

    let countries;

    if (region && regions.includes(region.toLowerCase())) {
        const res = await fetch(`http://localhost:5000/api/countries/region/${region}`);
        countries = await res.json();
        countries = countries.data.countries;
    } else {
        const res = await fetch('http://localhost:5000/api/countries');
        countries = await res.json();
        countries = countries.data.countries;
    }

    return (
        <main>
            <Filters />
            <CountriesList countries={countries} query={query} />
        </main>
    );
}
