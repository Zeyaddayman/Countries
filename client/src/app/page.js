import AllCountries from "./components/AllCountries";
import Filters from "./components/Filters";
import RegionCountries from "./components/RegionCountries";
import regions from "./utils/regions";

export default async function Home({ searchParams }) {

    const query = searchParams?.query || '';
    const region = searchParams?.region || '';

    if (region && regions.includes(region.toLowerCase())) {
        return (
            <main>
                <Filters />
                <RegionCountries region={region} query={query} />
            </main>
        )
    } else {
        return (
            <main>
                <Filters />
                <AllCountries query={query} />
            </main>
        )
    }
}