import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center pt-20'>
            <h2 className='font-bold text-2xl'>Not Found</h2>
            <p className='text-gray-500 mb-5'>Could not find requested country</p>
            <Link className='px-3 py-2 rounded shadow-lg dark:shadow-none dark:bg-gray-500' href="/">Return Home</Link>
        </div>
    )
}