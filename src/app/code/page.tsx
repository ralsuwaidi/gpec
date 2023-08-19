'use client';
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import CodeForm from "../components/forms/CodeForm";



export default function Home() {
    return (
        <main className="">
            <div className="md:flex">
                <div className="flex-grow md:h-[90vh] h-[60vh] mb:pb-20">
                    {/* Image component */}
                    <Tilt className="w-full h-full mt-2" tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <Image
                            src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxqWWpKaU5qZzNOaTAxT0dNd0xUUXlPV1F0WW1OaU1pMWxZakF3WWpJeU1XWmxZMkVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--557f216e46e388c1f1e953960f6983419a311626/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-49c99415575.png"
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
                    <CodeForm />
                </div>
            </div>
        </main>
    );
}
