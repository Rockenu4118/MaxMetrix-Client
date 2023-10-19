import Head from 'next/head'
import Link from 'next/link'
import { TbSwitchHorizontal } from 'react-icons/tb'
import { baseUrl } from '../../../data/urls'


export default function index(props: any) {
    const { school } = props

    return (
        <>
            <Head>
                <title>{school.name} - Max Metrix</title>
            </Head>

            <div className="max-w-7xl mx-auto p-4">
                <div className="space-y-16 pb-2 border-b border-gray-400">
                    <div className="space-y-2">
                        <h1 className="text-4xl max-md:text-3xl font-semibold">{school.name}</h1>
                        <p className="text-lg text-gray-500">{`${school.city}, ${school.state}`}</p>
                    </div>

                    <h2 className="text-2xl font-medium">Players</h2>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }: any) {

    const res = await fetch(`${baseUrl}/schools/${params.id}`)
    const data = await res.json()

    return {
        props: {
            school: data[0]
        }
    }
}
