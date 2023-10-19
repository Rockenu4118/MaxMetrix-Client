import { Fragment, useState } from 'react'
import Head from 'next/head'
import useFetch from '../../hooks/useFetch'
import RankingsTable from '../../widgets/Rankings/RankingsTable'
import { metricKey } from '../../utils/keys'
import { metricConverter } from '../../utils/formatters'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { recordMetrics } from '../../utils/lists'


export default function Rankings() {
    const [metric, setMetric] = useState("exit-velo")

    const { response: players, loading } = useFetch("/rankings/" + metric)

    return (
        <>
            <Head>
                <title>MX Rankings</title>
                <meta name="description" content="Do you have what it takes to make it to the top?" />
            </Head>

            <div className="max-w-7xl mx-auto p-4 space-y-4">
                <h1 className="text-2xl max-lg:text-xl font-semibold">Rankings</h1>

                <Listbox value={metric} onChange={setMetric}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-40 cursor-default text-sm rounded-lg bg-white py-1 pl-2 text-left border border-gray-300">
                            <span className="block truncate">
                                {metricKey[metricConverter(metric) as keyof typeof metricKey]}
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
                            <Listbox.Options className="absolute mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {recordMetrics.map((metric, metricIdx) => (
                                    <Listbox.Option
                                    key={metricIdx}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100' : 'text-gray-900'}`}
                                    value={metric}
                                    >
                                        {({ selected }) => (
                                                <>
                                                    <span className="block truncate">
                                                        {metricKey[metricConverter(metric) as keyof typeof metricKey]}
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
            
                <RankingsTable players={ players } metric={ metric } loading={ loading } />
            </div>
        </>
    )
}