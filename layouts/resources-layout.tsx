import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../components/Modal/Modal'
import styles from '../styles/sidebar.module.css'



export default function ResourcesLayout({ children }: any) {
    const router = useRouter()

    const [isShowing, setIsShowing] = useState(false)

    const showModal = () => setIsShowing(true)
    const closeModal = () => setIsShowing(false)

    return (
        <>
            <Head>
                <title>Resources - Max Metrix</title>
            </Head>

            <div className="max-w-screen-2xl mx-auto grid grid-cols-5 max-lg:grid-cols-1 min-h-screen">
                <div className="border-r border-gray-400 max-lg:hidden">
                    <ul className="sticky top-20 space-y-1 px-4">
                        <li>
                            <Link href="/resources">
                                <button className={router.asPath == "/resources" ? styles.active_button : styles.sidebar_button}>
                                    Info
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/category/guides">
                                <button className={router.asPath == "/resources/category/guides" ? styles.active_button : styles.sidebar_button}>
                                    Guides
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/category/changelog">
                                <button className={router.asPath == "/resources/category/changelog" ? styles.active_button : styles.sidebar_button}>
                                    Changelog
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-4 max-lg:cols-span-1">
                    <div className="flex sticky px-4 py-2 border-b border-neutral-800 backdrop-blur lg:hidden" style={{ top: 64 }}>
                        <button onClick={showModal} className="px-3 py-2 text-sm font-medium rounded-md ease-in duration-150 hover:bg-neutral-300">
                            <div className="flex items-center space-x-1">
                                <svg
                                className="block h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <span>Categories</span>
                            </div>
                        </button>
                    </div>
                    {children}
                </div>
            </div>

            <Modal show={isShowing} closeModal={closeModal}>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">Categories</h2>
                        <button onClick={closeModal} className="p-2 rounded-md ease-in duration-150 hover:bg-neutral-300">
                            <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/resources">
                                <button onClick={closeModal} className={router.asPath == "/resources" ? styles.active_button : styles.sidebar_button}>
                                    Info
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/category/guides">
                                <button onClick={closeModal} className={router.asPath == "/resources/category/guides" ? styles.active_button : styles.sidebar_button}>
                                    Guides
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/category/changelog">
                                <button onClick={closeModal} className={router.asPath == "/resources/category/changelog" ? styles.active_button : styles.sidebar_button}>
                                    Changelog
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Modal>
        </>
    )
}