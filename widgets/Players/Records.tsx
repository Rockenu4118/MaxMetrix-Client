import { metricFormatter } from '../../utils/formatters'
import Card from '../../components/Card/Card'

export default function PlayerMetrics(props: any) {
    const { player, records } = props

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

    return (
        <div>
            <Card className="space-y-6">
                <h2 className="text-2xl max-lg:text-xl font-semibold text-center">Personal Records</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {
                        records.map((metric: any) => (
                            <div className="text-center flex-none w-36">
                                <p className="text-3xl font-semibold">{metricFormatter(player[metric as typeof metric], metric)}</p>
                                <p className="text-lg">{metricKey[metric as typeof metric]}</p>
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
    )
}

