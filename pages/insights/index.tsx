import Link from 'next/link'

import Layout from '../../layouts/insights-layout'

export default function Insights() {
    return (
        <Layout>
            <div className="p-4">
                <div>
                    <h1 className="text-2xl max-lg:text-xl font-semibold">Overview</h1>
                </div>

                <div className="text-center py-32 space-y-4">
                    <p className="text-gray-500">Select a metric to view data</p>
                    <div>
                        <Link href="/resources/metric-descriptions" className="text-blue-600 hover:text-blue-800">
                            Metric Descriptions
                        </Link>
                    </div>
                    <div>
                        <Link href="/resources/mx-standard" className="text-blue-600 hover:text-blue-800">
                            MX Standard
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}