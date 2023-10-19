import Link from 'next/link'
import { metricRankingFormatter, measurementFormatter } from '../../utils/formatters'
import styles from '../../styles/rankings.module.css'
import Spinner from '../../components/Spinner/Spinner'


export default function RankingsTable(props: any) {
    const { players, metric, loading } = props

    
    // Render spinner or table
    if (loading) {
        return (
            <Spinner className="h-96"/>
        )
    } else {
        return (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className={styles.th}>Rank</th>
                            <th className={styles.th}>{measurementFormatter(metric)}</th>
                            <th className={styles.th}>Player</th>
                            <th className={styles.th}>Class</th>
                            <th className={styles.th}>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player: any) => (
                            <tr className=" border-gray-300 hover:bg-gray-200">
                                <td className={styles.td}>{players.indexOf(player) + 1}</td>
                                <td className={styles.td}>{metricRankingFormatter(player, metric)}</td>
                                <td className={styles.td_link}>
                                    <Link href={"/players/" + player.player_id}>
                                        {player.first_name + " " + player.last_name}
                                    </Link>
                                </td>
                                <td className={styles.td}>{player.class}</td>
                                <td className={styles.td}>{player.secondary_position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}