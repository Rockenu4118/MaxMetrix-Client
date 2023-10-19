import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import Card from '../../components/Card/Card'


export default function index() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn }: any = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: any) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await signIn(email, password)
            router.push("/account")
            console.log("worked")
        } catch (error) {
            setError("Failed to sign in")
            console.log(error)
        }

        setLoading(false)
    }
    return (
        <>
            <Head>
                <title>Login - Max Metrix</title>
            </Head>

            <div className="px-4 py-32 space-y-4">
                <Card className="max-w-md mx-auto space-y-12">
                    <h1 className="text-2xl font-semibold">Login</h1>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Email</label>
                                <input
                                placeholder="Enter your email..."
                                className="px-3 py-2 w-full rounded-md border border-gray-300"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Password</label>
                                <input
                                type="password"
                                placeholder="Enter your password..."
                                className="px-3 py-2 w-full rounded-md border border-gray-300"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                        </div>

                        <div>
                            <button className="text-white font-medium w-full py-2 rounded-md bg-blue-950">Login</button>
                        </div>
                    </form>
                </Card>

                <div className="text-center">
                    <span>Don't have an account? </span>
                    <Link href="/register" className="text-blue-600 hover:text-blue-800">
                        Register
                    </Link>
                </div>
            </div>
        </>
    )
}
