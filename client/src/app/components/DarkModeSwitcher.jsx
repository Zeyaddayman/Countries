'use client';

import { useTheme } from 'next-themes'
import { BsMoon } from "react-icons/bs";

export default function DarkModeSwitcher() {

    const { setTheme, resolvedTheme } = useTheme();

    return (
        <button 
            className="cursor-pointer relative rounded py-2 px-5 pl-10 transition hover:bg-gray-50 dark:hover:bg-slate-700"
            onClick={() => {
                if (resolvedTheme === 'dark') {
                    setTheme('light');
                }
                if (resolvedTheme === 'light') {
                    setTheme('dark')
                }
            }}
        >
            <BsMoon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xl"
            />
            Dark Mode
        </button>
    )
}