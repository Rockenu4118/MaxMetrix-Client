import { Fragment, useState } from 'react'
import Head from 'next/head'
import Card from '../../../../components/Card/Card'
import PlayerLayout from "../../../../layouts/player-layout"
import Progression from '../../../../widgets/Players/Events/Progression'
import { baseUrl } from '../../../../data/urls'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { recordMetrics } from '../../../../utils/lists'
import { dateFormatter } from '../../../../utils/formatters'
import { metricKey } from '../../../../utils/keys'

export default function index(props: any) {
    const { events } = props
    const [metric, setMetric] = useState("exit_velo")

    return (
        <>
            <Head>
                <title>Events</title>
            </Head>

            <PlayerLayout>
                <div className="p-4 space-y-4">
                    <div>
                        <h1 className="text-2xl max-lg:text-xl font-semibold">Events</h1>
                    </div>

                    <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4">
                        <Card className="col-span-2 max-xl:col-span-1">
                            <h2 className="text-center text-lg font-medium">Progression</h2>

                            <Listbox value={metric} onChange={setMetric}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-40 cursor-default text-sm rounded-lg bg-white py-1 pl-2 text-left border border-gray-300">
                                        <span className="block truncate">{metricKey[metric as keyof typeof metricKey]}</span>
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
                                                                {metricKey[metric as keyof typeof metricKey]}
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

                            <Progression events={ events } currentMetric={ metric }/>
                        </Card>

                        <Card className="col-span-1 space-y-4">
                            <h2 className="text-center text-lg font-medium">Log</h2>

                            <div className="space-y-1">
                                {
                                    events.map((event: any) => (
                                        <div className="px-4 py-2 rounded-md hover:bg-gray-200">
                                            <p>{dateFormatter(event.date_attended)}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </div>
                </div>
            </PlayerLayout>
        </>
    )
}

export async function getServerSideProps({ params }: any) {

    const res = await fetch(`${baseUrl}/player-events/${params.id}`)
    const data = await res.json()

    return {
        props: {
            events: data
        }
    }
}


