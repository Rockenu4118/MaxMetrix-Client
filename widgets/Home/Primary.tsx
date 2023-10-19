import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/home.module.css'


export default function Primary() {
    const [active, setActive] = useState(0)

    const switchCurrent = () => {
        if (active === 0) {
            setActive(1)
        } else if (active === 1) {
            setActive(2)
        } else {
            setActive(0)
        } 
    } 

    setTimeout(switchCurrent, 3000)

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            <div className="text-center">
                <h1 className="max-lg:hidden">
                    <span className={active === 0 ? styles.main_title_active : styles.main_title}>Evaluate. </span>
                    <span className={active === 1 ? styles.main_title_active : styles.main_title}>Develop. </span>
                    <span className={active === 2 ? styles.main_title_active : styles.main_title}>Recruit. </span>
                </h1>
                <h1 className="lg:hidden">
                    <span className={active === 0 ? styles.main_title_active : styles.main_title}>Evaluate. </span>
                    <br />
                    <span className={active === 1 ? styles.main_title_active : styles.main_title}>Develop. </span>
                    <br />
                    <span className={active === 2 ? styles.main_title_active : styles.main_title}>Recruit. </span>
                </h1>
            </div>

            <div className="max-w-3xl mx-auto sm:px-4 md:px-8 text-center">
                <p className="text-2xl max-md:text-xl font-light text-gray-500">
                    Max Metrix is the data driven platform, enabling baseball players
                    to level up their game and reach their goals.
                </p>
            </div>

            <div className="flex max-sm:hidden justify-center space-x-4">
                <Link href="/get-started">
                    <button className={styles.get_started_button}>
                        Get started
                    </button>
                </Link>
                <div className={styles.learn_more_button_container} style={{ padding: 1 }}>
                    <Link href="/resources/learn-more">
                        <button className={styles.learn_more_button}>
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>

            <div className="sm:hidden px-8 space-y-4">
                <Link href="/get-started">
                    <button className={styles.get_started_button}>
                        Get started
                    </button>
                </Link>
                <div className={styles.learn_more_button_container} style={{ padding: 1 }}>
                    <Link href="/resources/learn-more">
                        <button className={styles.learn_more_button}>
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}