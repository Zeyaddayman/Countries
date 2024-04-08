import Image from "next/image";
import Link from "next/link";

export default function CountryCard({country}) {

    let formattedPopulation = Number(country.population).toLocaleString();

    return (
        <div className="country-card">
            <Link 
            href={`/${country._id}`}
            className="flex flex-col min-h-full relative"
            >
                <Image 
                    src={country.flag}
                    alt={`${country.name}'s flag`}
                    width={320}
                    height={320}
                    // layout="fill"
                    className="rounded-t-lg"
                />
                <div className="max-w-80 flex-1 bg-white dark:bg-slate-600 rounded-b-lg p-5 [&>p:not(:last-child)]:mb-2 [&>p>span]:text-gray-600 dark:[&>p>span]:text-gray-300 shadow-xl">
                    <h4 className="font-bold text-xl mb-4">{country.name}</h4>
                    <p>Population: <span>{formattedPopulation}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                </div>
            </Link>
        </div>
    )
}
