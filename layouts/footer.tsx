import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer(props: any) {
    const { home } = props

    return (
        <div className={!home ? styles.footer : styles.footer_home}>
            <div className="max-w-7xl mx-auto grid grid-cols-5 max-lg:grid-cols-1 gap-6 my-16 px-8">
                <div>
                    <h2 className="text-xl font-bold">Max Metrix</h2>
                </div>
                <div className="space-y-3">
                    <h2>Features</h2>
                    <ul className={!home ? styles.footer_list : styles.footer_list_home}>
                        <li>
                            <Link href="/rankings">
                                Rankings
                            </Link>
                        </li>
                        <li>
                            <Link href="/insights">
                                Insights
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h2>Resources</h2>
                    <ul className={!home ? styles.footer_list : styles.footer_list_home}>
                        <li>
                            <Link href="/resources/category/guides">
                                Guides
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h2>Company</h2>
                    <ul className={!home ? styles.footer_list : styles.footer_list_home}>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h2>Legal</h2>
                    <ul className={!home ? styles.footer_list : styles.footer_list_home}>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        <li>
                            <Link href="/legal/release-of-information-waiver">
                                Release of Information Waiver
                            </Link>
                        </li>
                        <li>
                            Patents
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center p-6">
                <p className={!home ? "text-gray-300" : "text-gray-500"}>
                    Copyright &copy; 2022 MX Baseball LLC. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}