import CountryPreview from "@/app/components/CountryPreview";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
    const id = params.countryId;

    const res = await fetch(`https://countries-erf9.onrender.com/api/countries/${id}`);
    let country = await res.json();
    let countryName = country.data.country.name;

    return {
        title: countryName
    }
}

export default async function Country({ params }) {

    const headersList = headers();
    const fullUrl = headersList.get('referer') || "";

    let id = params.countryId;

    try {
        const res = await fetch(`https://countries-erf9.onrender.com/api/countries/${id}`);

        let country = await res.json();
        country = country.data.country;

        return (
            <CountryPreview country={country} stepBack={fullUrl} />
        )
    } catch (error) {
        return (
            <h1 className="text-center text-xl">This Country Does Not Exist</h1>
        )
    }
}
