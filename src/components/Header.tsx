import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const pathname = useLocation().pathname
    return (
        <>
            <header className='flex flex-wrap flex-row justify-center items-center p-5 gap-[10rem] shadow-md text-xl'>
                <a
                    href="/"
                    className={`font-medium   hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400`}
                >
                    Write Md
                </a>
                <Link to='/files' className='font-medium  hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                    See your files
                </Link>
                <Link to='/upload' className='font-medium  hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                    Upload a file
                </Link>
                <p className='font-medium  hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                    Read about md
                </p>
                
            </header>
        </>
    )
}

export default Header
