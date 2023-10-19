import React from 'react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { AiOutlineTrophy } from 'react-icons/ai'

export default function Secondary() {
    return (
        <div className="max-w-7xl mx-auto space-y-16 px-4 py-16">
            <h2 className="text-2xl font-semibold text-center my-4">What do we provide?</h2>

            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 text-center">
                <div className="max-w-sm mx-auto space-y-6">
                    <CgProfile size={90} className="mx-auto bg-white rounded-2xl p-2 shadow-lg"/>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                            Player Recruitment Profiles
                        </h3>
                        <p>
                            Get your metrics evaluated and seen, more
                            affordably and easily than ever before!
                        </p>
                    </div>
                </div>

                <div className="max-w-sm mx-auto space-y-6">
                    <TbDeviceAnalytics size={90} className="mx-auto bg-white rounded-2xl p-2 shadow-lg"/>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                            In-Depth Insights
                        </h3>
                        <p>
                            Utilize our comprehensive data to 
                            understand
                            where you stand amongst your peers.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm mx-auto space-y-6">
                    <AiOutlineTrophy size={90} className="mx-auto bg-white rounded-2xl p-2 shadow-lg"/>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                            Detailed Rankings
                        </h3>
                        <p>
                            To be the best, you must beat the best.
                            Work your way up the leaderboards.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Link href="/resources/get-started" className="text-center my-5">
                    <button className="text-lg border border-black rounded-lg w-48 py-2 ease-in duration-150 hover:text-white hover:bg-black">
                        Get started
                    </button>
                </Link>
            </div>
        </div>
    )
}