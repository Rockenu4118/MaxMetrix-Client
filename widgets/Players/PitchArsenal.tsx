import { measurementKey } from '../../utils/keys'
import Card from '../../components/Card/Card'


export default function PitchArsenal(props: any) {
    const { player, pitches, pitchArsenal } = props

    const metricKey: any = {
        exit_velo: "Exit Velo",
        pulldown_velo: "Pulldown Velo",
        of_velo: "OF Velo",
        if_velo: "IF Velo",
        pop_time: "Pop Time",
        thirty_time: "30 Yd Dash",
        sixty_time: "60 Yd Dash",
        fb_velo_top: "Fastball Velo",
        fb_velo_avg: "Fastball Velo Avg",
        fb_spin_avg: "Fastball Spin Rate Avg",
        fb_vbreak_avg: "Fastball V Break Avg",
        fb_hbreak_avg: "Fastball H Break Avg",
        cb_velo_avg: "Curveball Velo Avg",
        cb_spin_avg: "Curveball Spin Rate Avg",
        cb_vbreak_avg: "Curveball V Break Avg",
        cb_hbreak_avg: "Curveball H Break Avg",
        ch_velo_avg: "Changeup Velo Avg",
        ch_spin_avg: "Changeup Spin Rate Avg",
        ch_vbreak_avg: "Changeup V Break Avg",
        ch_hbreak_avg: "Changeup H Break Avg",
    }

    console.log(player)

    if (pitches.length !== 0) {
        return (
            <Card className="space-y-6">
                <h2 className="text-2xl max-lg:text-xl font-semibold text-center">Pitching Arsenal</h2>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="p-3 tracking-wide text-gray-700 font-medium text-left">Pitch</th>
                                <th className="p-3 tracking-wide text-gray-700 font-medium text-left">Velo</th>
                                <th className="p-3 tracking-wide text-gray-700 font-medium text-left">Spin</th>
                                <th className="p-3 tracking-wide text-gray-700 font-medium text-left whitespace-nowrap">V Break</th>
                                <th className="p-3 tracking-wide text-gray-700 font-medium text-left whitespace-nowrap">H Break</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pitches.map((pitch: any) => (
                                    <tr className="hover:bg-gray-200">
                                        <td className="p-3 text-gray uppercase">
                                            {pitch}
                                        </td>
                                        <td className="p-3 text-gray">
                                            {!(player[`${pitch}_velo_avg`] === null) ? player[`${pitch}_velo_avg`] : "N/A"}
                                        </td>
                                        <td className="p-3 text-gray">
                                            {!(player[`${pitch}_spin_avg`] === null) ? player[`${pitch}_spin_avg`] : "N/A"}
                                        </td>
                                        <td className="p-3 text-gray">
                                            {!(player[`${pitch}_vbreak_avg`] === null) ? player[`${pitch}_vbreak_avg`] : "N/A"}
                                        </td>
                                        <td className="p-3 text-gray">
                                            {!(player[`${pitch}_hbreak_avg`] === null) ? player[`${pitch}_hbreak_avg`] : "N/A"}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Card>
        )
    } else {
        return null
    }
}