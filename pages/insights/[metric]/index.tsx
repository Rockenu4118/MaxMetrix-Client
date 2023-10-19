import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import InsightsLayout from '../../../layouts/insights-layout'
import DistributionGraph from '../../../widgets/Insights/DistributionGraph/DistributionGraph'
import AveragesGraph from '../../../widgets/Insights/AveragesGraph/AveragesGraph'
import { metricKey } from '../../../utils/keys'
import { metricConverter } from '../../../utils/formatters'
import Card from '../../../components/Card/Card'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { yearsList } from '../../../utils/lists'


export default function MetricInsights() {
    const router = useRouter()
    const { metric } = router.query

    // The current class selection for the distribution graph
    const [distributionClass, setDistributionClass] = useState("2022")

    return (
        <InsightsLayout>
            <div className="p-4 space-y-4">
                <div>
                    <h1 className="text-2xl max-lg:text-xl font-semibold">{metricKey[metricConverter(metric) as keyof typeof metricKey]} Insights</h1>
                </div>

                <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
                    <Card>
                        <h2 className="text-center text-lg font-medium">Class Averages</h2>                            
                        <AveragesGraph metric={ metric }/>
                    </Card>

                    <Card>
                        <h2 className="text-center text-lg font-medium">Class Distribution</h2>

                        <Listbox value={distributionClass} onChange={setDistributionClass}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-24 cursor-default text-sm rounded-lg bg-white py-1 pl-2 text-left border border-gray-300">
                                    <span className="block truncate">
                                        {distributionClass}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                        className="h-4 w-4 text-gray-400"
                                        aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {yearsList.map((year, yearIdx) => (
                                            <Listbox.Option
                                            key={yearIdx}
                                            className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100' : 'text-gray-900'}`}
                                            value={year}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="block truncate">
                                                            {year}
                                                        </span>
                                                        {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                                                                </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <DistributionGraph distributionClass={ distributionClass } metricName={ metric } />
                    </Card>
                </div>

                <div className="text-center">
                    Note: Some data may be missing due to small sample sizes
                </div>
            </div>
        </InsightsLayout>
    )
}
