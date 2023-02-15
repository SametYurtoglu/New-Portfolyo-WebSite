import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
    const router = useRouter()
    const date = new Date()
    return (
        <>
            <div className='bg-gray-800/30 w-full h-[200px]'>
                <div className="container mx-auto flex justify-between items-center h-full">
                    <div>
                        <h1 className='text-gray-300 font-bold text-4xl'>NotFounds</h1>
                    </div>
                    <ul className='text-white text-center'>
                        <li className='font-semibold text-gray-200 text-lg'>Sayfalar</li>
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
                    <ul className='text-gray-200 text-center'>
                        <li className='font-bold text-lg'>Sosyal Medya</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Discord</li>
                        <li>Twitter</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 text-center text-gray-300">
                <h1>Copyright © 2022 - {date.getFullYear()}  Tüm Hakları Saklıdır. <a href="https://github.com/SametYurtoglu" className='hover:text-blue-600 underline'>NotFounds</a></h1>
            </div>
        </>
    )
}

export default Footer