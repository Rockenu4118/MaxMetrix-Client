import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/navbar.module.css'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Transition } from '@headlessui/react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navbar(props: any) {
    const { home } = props
    const { currentUser }: any = useAuth()

    const scrollPosition = useScrollPosition()
    const [isExpanded, setIsExpanded] = useState(false)

    const closeNavbar = () => setIsExpanded(false)

    const navItems = [
        {
            "name": "Rankings",
            "link": "/rankings"
        },
        {
            "name": "Insights",
            "link": "/insights"
        },
        {
            "name": "Resources",
            "link": "/resources"
        }
    ]

    return (
        <nav className={!home ? styles.navbar : scrollPosition > 10 ? styles.navbar_scrolled : styles.navbar_home}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" onClick={closeNavbar}>
                                <span className={!home ? styles.navbar_brand : styles.navbar_brand_home}>
                                    Max Metrix
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex justify-between items-baseline space-x-4">
                                {
                                    navItems.map((item) => (
                                        <Link href={item.link}>
                                            <span className={!home ? styles.navbar_button : styles.navbar_button_home}>{item.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center">
                        <Link href={currentUser ? "/account": "/login"}>
                            <span className={!home ? styles.navbar_button : styles.navbar_button_home}>{currentUser ? currentUser.email : "Login"}</span>
                        </Link>
                        <Link href="/search">
                            <button className={!home ? styles.navbar_button : styles.navbar_button_home}>
                                <AiOutlineSearch size={26}/>
                            </button>
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        type="button"
                        className={!home ? styles.nav_menu : styles.nav_menu_home}
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isExpanded ? (
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
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                                ) : (
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
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
            show={isExpanded}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {
                                navItems.map((item) => (
                                    <Link href={item.link} onClick={closeNavbar}>
                                        <span className={!home ? styles.nav_button_collapsed : styles.nav_button_collapsed_home}>
                                            {item.name}
                                        </span>
                                    </Link>
                                ))
                            }
                            <Link href={currentUser ? "/account": "/login"} onClick={closeNavbar}>
                                <span className={!home ? styles.nav_button_collapsed : styles.nav_button_collapsed_home}>
                                    {currentUser ? currentUser.email : "Login"}
                                </span>
                            </Link>
                            <Link href="/search" onClick={closeNavbar}>
                                <button className={!home ? styles.nav_button_collapsed : styles.nav_button_collapsed_home}>
                                    <AiOutlineSearch size={28}/>
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}