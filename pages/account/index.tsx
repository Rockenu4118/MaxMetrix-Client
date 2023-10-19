import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import AccountLayout from '../../layouts/account-layout'


export default function index() {
    const router = useRouter()
    const { currentUser, loading, signOut }: any = useAuth()

    if (loading) { 
        return ( 
            <div className="text-center px-4 pt-64">
                <p className="text-lg text-gray-500">
                    Validating authorization status...
                </p>
            </div>
        ) 
    } else {
        if (!currentUser) {
            router.push("/login")
        } else {
            return (
                <AccountLayout>
                    <div className="p-4">
                        <div>
                            <h1 className="text-2xl max-lg:text-xl font-semibold">Details</h1>
                        </div>

                        <div className="flex justify-center items-center h-96">
                            <p>
                                <span className="font-semibold">Email:</span> {currentUser.email}
                            </p>
                        </div>
                    </div>
                </AccountLayout>
            )
        }
    }
}