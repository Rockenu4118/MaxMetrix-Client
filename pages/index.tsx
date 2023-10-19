import Head from 'next/head'
import Primary from '../widgets/Home/Primary'
import Secondary from '../widgets/Home/Secondary'
import Tertiary from '../widgets/Home/Tertiary'


export default function Home() {
    return (
        <>
            <Head>
                <title>Max Metrix</title>
            </Head>

            <main>
                <Primary />
                <Secondary />
                {/* <Tertiary /> */}
            </main>
        </>
    )
}
