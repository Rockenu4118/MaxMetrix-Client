import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from "../../components/Card/Card"
import defaultProfilePic from '../../assets/defaultProfilePic.jpg'
import { heightConverter } from '../../utils/converters'
import { AiOutlineLink } from 'react-icons/ai'
import { Transition } from '@headlessui/react'



export default function Details(props: any) {
    const { player } = props
    const [showToast, setShowToast] = useState(false)

    const closeToast = () => setShowToast(false)

    const handleCopyLink = () => {
        // navigator.clipboard.writeText(window.location.href)
        setShowToast(true)
        setTimeout(closeToast, 2000)
    }

    return (
        <>
            <Card className="space-y-4 max-lg:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <Image src={defaultProfilePic} alt="Profile Pic" width={275} className="max-md:mx-auto" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl max-lg:text-xl font-semibold">{player.full_name}</h1>
                        <div className="space-y-2">
                            <p>
                                <span className={span}>Bat / Throw:</span> {`${player.bat} / ${player.throw}`}
                            </p>
                            <p>
                                <span className={span}>Position:</span> {player.primary_position}
                            </p>
                            <p>
                                <span className={span}>Height:</span> {heightConverter(player.height)}
                            </p>
                            <p>
                                <span className={span}>Weight:</span> {player.weight}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-2xl max-lg:text-xl font-semibold">{`Class of ${player.class}`}</p>
                        <div className="space-y-2">
                            <p>
                                <span className={span}>Hometown:</span> {player.city}
                            </p>
                            <p>
                                <span className={span}>High School: </span>
                                <Link href={`/schools/${player.high_school}`} className="text-blue-600 hover:text-blue-800">
                                    {player.school_name}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-end pr-4">
                    <button onClick={handleCopyLink}>
                        <AiOutlineLink size={28} className="text-blue-600 hover:text-blue-800"/>
                    </button>
                </div>
            </Card>

            <Transition
            show={showToast}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <div className="fixed shadow-lg bottom-12 left-12 max-md:bottom-4 max-md:left-4 w-56 p-4 rounded-md border border-gray-200 items-center bg-white">
                    <div className="flex items-center space-x-4">
                        <AiOutlineLink size={20}/>
                        <div className="text-sm">
                            Player link copied
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    )
}

const span = "font-semibold text-base"
