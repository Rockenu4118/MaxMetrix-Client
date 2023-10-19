import Head from "next/head"
import PlayerLayout from "../../../layouts/player-layout"
import { baseUrl } from "../../../data/urls"
import { recordMetrics, pitcherMetrics, pitchList } from "../../../utils/lists"
import Details from '../../../widgets/Players/Details'
import Records from "../../../widgets/Players/Records"
import PitchArsenal from "../../../widgets/Players/PitchArsenal"

export default function Player(props: any) {
    const { player } = props

    const records: any = []
    const pitchArsenal: any = []
    const pitches: any = []


    const checkRecords = () => {

        for (let i = 0 ; i < recordMetrics.length ; i++) {
            if (player[recordMetrics[i]] > 0) {
                records.push(recordMetrics[i])
            }
        }

        for (let i = 0 ; i < pitcherMetrics.length ; i++) {
            if (player[pitcherMetrics[i]] > 0) {
                pitchArsenal.push(pitcherMetrics[i])
            }
        }

        for (let i = 0 ; i < pitchList.length ; i++) {
            for (const property in player) { 
                if (property.includes(pitchList[i] + "_")) {
                    if (player[property] !== null) {
                        pitches.push(pitchList[i])
                        break
                    }
                }
            }
        }
    }

    checkRecords()

    return (
        <>
            <Head>
                <title>{`${player.full_name} - Max Metrix`}</title>
            </Head>

            <PlayerLayout player={player}>
                <div className="p-4 space-y-4">
                    <div>
                        <p className="text-2xl max-lg:text-xl font-semibold">Overview</p>
                    </div>

                    <Details player={ player }/>

                    <Records player={ player } records={ records }/>

                    <PitchArsenal player={ player } pitches={ pitches } pitchArsenal={ pitchArsenal } />
                </div>
            </PlayerLayout>
        </>
    )
}


export async function getServerSideProps({ params }: any) {

    const res = await fetch(`${baseUrl}/players/${params.id}`)
    const data = await res.json()

    return {
        props: {
            player: data[0]
        }
    }
}