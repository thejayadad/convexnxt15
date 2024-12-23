'use client'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import MobileMenu from './mobile-menu'
import Link from 'next/link'
import {FiPlusCircle} from "react-icons/fi"

const Header = () => {
  return (
    <header className='w-full border-b-[1px] py-6'>
        <nav className='mx-auto max-w-screen-xl h-full w-full flex items-center justify-between px-6'>
            <div>LOGO</div>
            <div className='flex items-center space-x-4'>
                <Link href={'/'}>
                    <p className='flex items-center space-x-1'>
                        <FiPlusCircle size={24} />
                        <span className='hidden lg:block'>Create</span>
                    </p>
                </Link>
                <UserButton />
            </div>
        </nav>
    </header>
  )
}

export default Header