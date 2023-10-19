import Link from 'next/link'

export default function PageNotFound() {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="text-center space-y-4 bg-gray-100">
                <div>
                    <p className="text-2xl font-semibold text-blue-700">
                        404
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="text-5xl max-md:text-2xl font-semibold">
                        This page does not exist.
                    </p>
                    <p className="text-lg text-gray-500">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>                    
                <div>
                    <Link href="/" className="text-blue-600">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
