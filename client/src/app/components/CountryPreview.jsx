import Image from "next/image";
import Link from "next/link";
import formatter from "../lib/formmater";
import { BsArrowLeft } from "react-icons/bs";

export default function CountryPreview({ country, stepBack }) {

    stepBack = stepBack || '/';

    let formattedCurrencis = formatter(country.currencies);
    let formattedLanguages = formatter(country.languages);
    let formattedPopulation = Number(country.population).toLocaleString();

    return (
        <section className="py-12">
            <div className="container px-8 md:px-20 mx-auto">
                <Link
                    href={`${stepBack}`}
                    className="relative block py-2 px-6 pl-10 mb-16 w-fit rounded-md transition bg-white dark:bg-transparent shadow-md dark:shadow-none dark:hover:bg-slate-700"
                >
                    <BsArrowLeft
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-xl"
                    />
                    Back
                </Link>
                <div className="flex gap-12 items-center flex-col md:flex-row">
                    <Image 
                    src={country.flag}
                    alt={`${country.name}'s flag`}
                    width={320}
                    height={320}
                    />
                    <div className="info">
                        <div className="flex flex-wrap items-center mb-8 gap-12 [&>div>p:not(:last-child)]:mb-2 [&>div>p>span]:text-gray-600 dark:[&>div>p>span]:text-gray-300">
                            <div>
                                <h3 className="text-2xl mb-3 font-bold">{country.name}</h3>
                                <p>Native Name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{formattedPopulation}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Sbu Region: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                <p>Currencies: <span>{formattedCurrencis}</span></p>
                                <p>Languages: <span>{formattedLanguages}</span></p>
                            </div>
                        </div>
                        <div>
                            <p className="flex flex-wrap items-center [&>span]:ml-2">Border Countries: {country.borders.map((border) => (
                                <span className="py-2 px-3 shadow-lg text-gray-600 dark:text-white dark:shadow-none dark:bg-slate-700 " key={border}>{border}</span>
                            ))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
