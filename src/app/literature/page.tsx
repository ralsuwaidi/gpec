'use client';
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import LiteratureForm from "../components/forms/LiteratureForm";



export default function Home() {
    return (
        <main className="">
            <div className="md:flex">
                <div className="flex-grow md:h-[90vh] h-[60vh] mb:pb-20">
                    {/* Image component */}
                    <Tilt className="w-full h-full mt-2" tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <Image
                            src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt6WXpCaU5qTmxaUzFoWkRSakxUUTBaR0l0T1RRME15MW1NV1UzTWpsa05ESmxaVE1HT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--e7e8d0833d0c687dc2feda85dc665131ba0201f8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-94fb3cc9ee3.png"
                            alt="Next.js Logo"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </Tilt>

                </div>
                <div className="md:w-1/2 md:pl-6  md:h-[90vh] md:pb-20 md:overflow-y-auto md:no-scrollbar mb-12">
                    {/* Form component */}

                    <LiteratureForm />

                </div>
            </div>
        </main>
    );
}
