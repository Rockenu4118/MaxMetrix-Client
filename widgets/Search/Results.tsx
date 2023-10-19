import Link from 'next/link'
import Card from '../../components/Card/Card'
import Spinner from '../../components/Spinner/Spinner'

export default function SearchResults(props: any) {
    const { results, loading, noResult, error, searchType } = props

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Spinner size="md"/>
            </div>
        )
    } else {
        if (error !== "") {
            return (
                <div className="flex items-center justify-center h-96">
                    <p className="text-xl text-gray-500">
                        {error}
                    </p>
                </div>  
            )
        } else if (results.length === 0) {
            if (noResult) {
                return (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-xl text-gray-500">
                            No results found
                        </p>
                    </div>
                )
            } else {
                return (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-xl text-gray-500">
                            {"Search " + searchType + "..."}
                        </p>
                    </div>
                )
            }
        } else {
            return (
                resultsCards(results, searchType)
            )
        }
    } 
}

const resultsCards = (results: any, searchType: any) => {

    if (searchType === "players") {
        return (
            <div className="space-y-2">
                {results.map((player: any) => (
                    <div className="px-4 py-2 rounded-md space-y-1 hover:bg-gray-200">
                        <Link href={"/players/" + player.player_id}>
                            <p className="text-lg font-medium text-blue-600">
                                {player.full_name}
                            </p>
                        </Link>
                                    
                        <div>
                            <p>
                                {player.class + " • " + player.bat + "/" + player.throw + " • " + player.primary_position}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    } else if (searchType === "schools") {
        return (
            <div className="space-y-2">
                {results.map((school: any) => (
                    <div className="px-4 py-2 rounded-md space-y-1 hover:bg-gray-200">
                        <Link href={"/schools/" + school.school_id}>
                            <p className="text-lg font-medium text-blue-600">
                                {school.name}
                            </p>
                        </Link>

                        <p>
                            {school.city + ", " + school.state}
                        </p>
                    </div>
                ))}
            </div>
        )
    }
    return null
}