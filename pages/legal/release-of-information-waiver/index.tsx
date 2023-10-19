import Head from 'next/head'

export default function ReleaseOfInformationWaiver() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Release of Information Waiver - Max Metrix</title>
            </Head>

            <section className="border-b border-gray-400">
                <div className="p-4 my-24">
                    <h1 className="text-center text-4xl max-md:text-2xl font-bold">
                        Release of Information Waiver
                    </h1>
                </div>
            </section>

            <section className="border-b border-gray-400">
                <div className="px-4 py-8 space-y-8">
                    <h2 className="text-2xl font-semibold">
                        17 years of age or younger
                    </h2>
                    <p>
                        As a condition of participation in a MX Baseball and/or a licensee and/or an affiliate sponsored event, 
                        I hereby give to MX Baseball LLC, its affiliates, licensees and sponsors, my child’s full and complete 
                        permission and consent to use and disclose my child’s name and registered contact information, including 
                        home address and telephone number, and my picture, image, video, likeness, actions, voice, or other personally 
                        identifiable information (collectively your “Name and Image”), in whole or in part, individually or in conjunction 
                        with other images, captured by any means as part of my registration with and/or participation in any MX Baseball 
                        and/or a licensee and/or an affiliate sponsored event. I waive all my child’s rights of privacy or compensation, 
                        which my child may have in connection with my child’s Name and Image as so captured in any media whatsover, to be 
                        used by Max Metrix and/or its licensees, affiliates and/or sponsors for promotional purposes. Such promotional purposes 
                        include, but are not limited to, allowing MX Baseball website subscribers (such as college coaches and college athletic 
                        departments), to access, view and use your child’s Name and Image for recruiting purposes. I grant MX Baseball LLC and 
                        its affiliates, partners, sponsors, officials, employees, representatives, agents, licensees, and assigns the irrevocable 
                        and unrestricted right to use my child’s Name and Image associated with any MX Baseball and/or affiliate sponsored events, 
                        media and in all manners, including the composite or altered representations. I consent for my child to such uses and hereby
                        waive all rights to compensation and any right to inspect or approve the finished product or image, regardless of format.
                    </p>
                </div>
            </section>

            <section>
                <div className="px-4 py-8 space-y-8">
                    <h2 className="text-2xl font-semibold">
                        18 years of age or older
                    </h2>
                    <p>
                        As a condition of participation in a MX Baseball and/or a licensee and/or an affiliate sponsored event, I hereby give to MX Baseball LLC, 
                        its affiliates, licensees and sponsors, my full and complete permission and consent to use and disclose my name and registered contact 
                        information, including home address and telephone number, and my picture, image, video, likeness, actions, voice, or other personally 
                        identifiable information (collectively your “Name and Image”), in whole or in part, individually or in conjunction with other images, 
                        captured by any means as part of my registration with and/or participation in any MX Baseball and/or a licensee and/or an affiliate sponsored 
                        event. I waive all rights of privacy or compensation, which I may have in connection with my Name and Image as so captured in any media whatsover, 
                        to be used by MX Baseball and/or its licensees, affiliates and/or sponsors for promotional purposes. Such promotional purposes include, but are not 
                        limited to, allowing Max Metrix website subscribers (such as college coaches and college athletic departments), to access, view and use your Name 
                        and Image for recruiting purposes. I grant MX Baseball LLC and its affiliates, partners, sponsors, officials, employees, representatives, agents, 
                        licensees, and assigns the irrevocable and unrestricted right to use my Name and Image associated with any MX Baseball and/or affiliate sponsored 
                        events, media and in all manners, including the composite or altered representations. I consent to such uses and hereby waive all rights to compensation 
                        and any right to inspect or approve the finished product or image, regardless of format.
                    </p>
                </div>
            </section>
        </div>
    )
}
