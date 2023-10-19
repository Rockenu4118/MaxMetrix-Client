import ResourcesLayout from "../../layouts/resources-layout"
import Card from "../../components/Card/Card"

export default function index() {

    const items = [
        {
            "name": "Metric Descriptions",
            "description": "Definitions of the different baseball metrics and their importance."
        },
        {
            "name": "MX Standard",
            "description": "Our standardized system for how a player's metrics are evaluated."
        }
    ]

    return (
        <ResourcesLayout>
            <div>
                <div className="flex justify-center items-center h-56 border-b border-gray-300">
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl font-semibold">Max Metrix Info</h1>
                        <p className="text-gray-500">Info Regarding Max Metrix</p>
                    </div>
                </div>

                <div className="p-12 max-md:p-6 space-y-4">
                    {
                        items.map((item) => (
                            <Card className="space-y-2">
                                <h2 className="text-xl font-medium text-blue-600">{item.name}</h2>
                                <p>{item.description}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </ResourcesLayout>
    )
}
