'use client';

import { Button, Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    GPEC
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p className='text-indigo-600 font-bold'>
                        Art
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Literature
                </Navbar.Link>
                <Navbar.Link href="#">
                    Code
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


