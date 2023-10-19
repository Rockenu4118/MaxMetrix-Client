import Link from 'next/link'
import Spinner from '../../../components/Spinner/Spinner'

export default function Results(props: any) {
    const { players, loading } = props

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Spinner size="sm" />
            </div>
        )
    } else {
        if (players.length === 0) {
            return (
                <div className="flex justify-center items-center h-64">
                    <Link href="/search" className="text-blue-600">
                        Search for players to bookmark
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="space-y-2">
                    {
                        players.map((player: any) => (
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
                        ))
                    }
                </div>
            )
        }
    }
}
