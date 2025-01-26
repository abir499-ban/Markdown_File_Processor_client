import React from 'react'

const Header = () => {
  return (
    <>
        <header className='flex flex-wrap flex-row justify-center items-center p-5 gap-[10rem] shadow-md text-xl'>
            <p className='font-medium hover:font-semibold hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                Write Md
            </p>
            <p className='font-medium hover:font-semibold hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                See your files
            </p>
            <p className='font-medium hover:font-semibold hover:underline-offset-4 hover:cursor-pointer hover:underline hover:decoration-red-400'>
                Read about md
            </p>
        </header>
    </>
  )
}

export default Header
