import Navbar from './navbar'
import Footer from './footer'
import { useRouter } from 'next/router'


export default function Layout({ children }: any) {
    const router = useRouter()
    
    return (
        <>
            <Navbar home={router.pathname === "/" ? true : false}/>

            <main className={router.pathname === "/" ? "bg-white min-h-screen" : "bg-inherit min-h-screen"}>
                {children}
            </main>
            
            <Footer home={router.pathname === "/" ? true : false}/>
        </>
    )
}