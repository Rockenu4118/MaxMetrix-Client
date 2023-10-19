import Head from 'next/head'
import Link from 'next/link'
import Card from '../../components/Card/Card'


export default function index() {
    return (
        <>
            <Head>
                <title>Register - Max Metrix</title>
            </Head>

            <div className="px-4 py-32 space-y-4">
                <Card className="max-w-md mx-auto space-y-12">
                    <h1 className="text-2xl font-semibold">Register</h1>

                    <form className="space-y-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Email</label>
                                <input
                                placeholder="Enter your email..."
                                className="px-3 py-2 w-full rounded-md border border-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Password</label>
                                <input
                                type="password"
                                placeholder="Enter your password..."
                                className="px-3 py-2 w-full rounded-md border border-gray-300"
                                />
                            </div>
                        </div>

                        <div>
                            <button className="text-white font-medium w-full py-2 rounded-md bg-blue-950">Register</button>
                        </div>
                    </form>
                </Card>

                <div className="text-center">
                    <span>Already have an account? </span>
                    <Link href="/login" className="text-blue-600 hover:text-blue-800">
                        Login
                    </Link>
                </div>
            </div>
        </>
    )
}