'use client';
import Image from "next/image";
import ArtForm from "../components/forms/ArtForm";
import Tilt from 'react-parallax-tilt';



export default function Home() {
    return (
        <main className="">
            <div className="md:flex">
                <div className="flex-grow md:h-[90vh] h-[60vh] mb:pb-20">
                    {/* Image component */}
                    <Tilt className="w-full h-full mt-2" tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <Image
                            src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg?quality=75&auto=webp"
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
                    <ArtForm />

                </div>
            </div>
        </main>
    );
}
