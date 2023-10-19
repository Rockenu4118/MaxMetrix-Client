import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'
import { AuthProvider } from '../contexts/AuthContext'
import { BookmarkProvider } from '../contexts/BookmarkContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <BookmarkProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </BookmarkProvider>
        </AuthProvider>
    )
}
