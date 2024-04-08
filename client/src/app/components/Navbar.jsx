import Link from "next/link"
import DarkModeSwitcher from "./DarkModeSwitcher";

export const Navbar = () => {
    return (
        <header className="shadow-lg bg-white dark:bg-slate-600 py-8">
            <div className="container flex justify-between px-8 md:px-20 mx-auto">
                <Link href={'/'}>
                <h2 className="font-bold text-2xl ">Where in the world?</h2>
                </Link>
                <DarkModeSwitcher />
            </div>
        </header>
    )
}
