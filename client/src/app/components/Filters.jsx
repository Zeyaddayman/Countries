'use client';
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { BiSearch } from "react-icons/bi";

export default function Filters() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (searchTerm) => {
        const params = new URLSearchParams(searchParams)
        if (searchTerm) {
            params.set('query', searchTerm);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const handleRegion = (region) => {
        const params = new URLSearchParams(searchParams)
        if (region && region.toLowerCase() !== 'all') {
            params.set('region', region)
        } else {
            params.delete('region');
        }
        replace(`${pathname}?${params.toString()}`);
    }


    return (
        <div className="flex flex-wrap gap-8 justify-between items-center py-12 container px-8 md:px-20 mx-auto">
            <div className="relative w-96 max-w-96">
                <BiSearch
                className="text-xl absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                id="search-term"
                name="search-term"
                className="p-3 w-full pl-10 rounded shadow-md outline-none" type="text" 
                placeholder="Search for a country..." 
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                />
            </div>
            <select
            className="px-6 py-3 cursor-pointer outline-none rounded shadow-md"
            defaultValue={searchParams.get('region')?.toString().toLowerCase()}
            onChange={(e) => {
                handleRegion(e.target.value);
            }}
            >
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}
