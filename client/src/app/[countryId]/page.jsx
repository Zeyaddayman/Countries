import CountryPreview from "@/app/components/CountryPreview";
import { headers } from "next/headers";
import NotFound from "./not-found";

export async function generateMetadata({ params }) {
    const id = params.countryId;

    const res = await fetch(`https://countries-erf9.onrender.com/api/countries/${id}`);
    let country = await res.json();
    if (country.status === 'success') {
        let countryName = country.data.country.name;
        return {
            title: countryName
        }
    } else {
        return {
            title: 'Country Not Found'
        }
    }
}

export default async function Country({ params }) {

    const headersList = headers();
    const fullUrl = headersList.get('referer') || "";

    let id = params.countryId;

    const res = await fetch(`https://countries-erf9.onrender.com/api/countries/${id}`);
    let country = await res.json();
    if (country.status === 'success') {
        country = country.data.country;
        return (
            <CountryPreview country={country} stepBack={fullUrl} />
        )
    } else {
        return <NotFound />
    }
}


export async function generateStaticParams() {
    const res = await fetch(`https://countries-erf9.onrender.com/api/countries`);
    let countries = await res.json();
    countries = countries.data.countries;

    return countries.map((country) => (
        {countryId: country._id}
    ))
}