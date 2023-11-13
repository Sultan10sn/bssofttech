'use client'

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Nav() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <Head>
                <title>bssoftech</title>
                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="sticky w-full bg-white shadow-lg">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <Image
                                    src='/logos.png'
                                    alt='logo'
                                    width={115}
                                    height={100}
                                />
                            </Link>
                            <p className='text-xs pl-36 md:pl-8 text-green-600'>RC.1918623</p>
                            <div className="md:hidden">
                                <button
                                    className="p-2 bg-red-700 text-red-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" onClick={() => setNavbar(false)}>
                                <li className="text-red-700 text-sm font-bold">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-sm font-bold text-red-700">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="text-red-700 text-sm font-bold">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}