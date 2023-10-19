import AccountLayout from "../../../layouts/account-layout"
import Card from '../../../components/Card/Card'
import Results from "../../../widgets/Account/Bookmarks/Results"
import { useBookmark } from "../../../contexts/BookmarkContext"

export default function index() {
    const { players, loading }: any = useBookmark()

    return (
        <AccountLayout>
            <div className="p-4 space-y-4">
                <div>
                    <h1 className="text-2xl max-lg:text-xl font-semibold">Bookmarks</h1>
                </div>

                <Card className="space-y-2">
                    <h2 className="text-2xl max-lg:text-xl font-semibold text-center">Players</h2>
                    
                    <Results players={ players } loading={ loading }/>
                </Card>
            </div>
        </AccountLayout>
    )
}