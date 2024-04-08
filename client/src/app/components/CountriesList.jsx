import CountryCard from "./CountryCard";

export default async function CountriesList({ countries }) {
    return (
        <div className="pb-12">
            <div className="container flex flex-wrap justify-center gap-8 px-8 md:px-20 mx-auto">
                {countries.map((country) => (
                    <CountryCard key={country._id} country={country} />
                ))}
            </div>
        </div>
    )
}