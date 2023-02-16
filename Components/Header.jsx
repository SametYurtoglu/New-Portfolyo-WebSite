import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const router = useRouter()
    const [nav, setnav] = useState(false)
    return (
        <nav className='bg-gray-800 w-full h-[5.5rem] shadow-lg shadow-gray-700'>
            <div className="container mx-auto flex items-center h-full justify-between">
                <div className="">
                    <h1 className='text-gray-300 text-2xl font-bold'>NotFounds</h1>
                </div>
                <div className="text-gray-200 font-sans">
                    <ul className='hidden gap-5 md:flex'>
                        <li>
                            <Link href={'/'} className={router.pathname === '/' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/Skills'} className={router.pathname === '/Skills' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Skills</Link>
                        </li>
                        <li>
                            <Link href={'/Projects'} className={router.pathname === '/Projects' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Projects</Link>
                        </li>
                        <li>
                            <Link href={'/Repo'} className={router.pathname === '/Repo' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>GithubRepo</Link>
                        </li>
                        <li>
                            <Link href={'/Abouts'} className={router.pathname === '/Abouts' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Abouts</Link>
                        </li>
                    </ul>
                </div>
                <OutsideClickHandler onOutsideClick={() => setnav(false)}>
                {nav &&
                    <div className='bg-gray-800 border border-gray-700 w-full h-[200px] absolute top-20 left-0 md:hidden'>
                        <ul className='flex flex-col justify-center items-center h-full gap-1 text-gray-300'>
                            <li>
                                <Link href={'/'} className={router.pathname === '/' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/Skills'} className={router.pathname === '/Skills' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Skills</Link>
                            </li>
                            <li>
                                <Link href={'/Projects'} className={router.pathname === '/Projects' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Projects</Link>
                            </li>
                            <li>
                                <Link href={'/Repo'} className={router.pathname === '/Repo' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>GithubRepo</Link>
                            </li>
                            <li>
                                <Link href={'/Abouts'} className={router.pathname === '/Abouts' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}>Abouts</Link>
                            </li>
                        </ul>
                        <button className='absolute top-0 right-2 text-white text-xl' onClick={() => setnav(false)}><AiOutlineCloseSquare/></button>
                    </div>}
                </OutsideClickHandler>
                <button className='text-white flex md:hidden bg-blue-600/20 hover:bg-blue-600/40 rounded-lg p-2' onClick={() => setnav(!nav)}><AiOutlineMenu /></button>
            </div>
        </nav>
    )
}

export default Header