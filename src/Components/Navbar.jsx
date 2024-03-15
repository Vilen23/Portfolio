"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { NavLink } from './NavLink'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const navLinks = [
    {
        title: 'About',
        href: '#about'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-6 py-4'>
        <Link href={"/"} className=' text-2xl md:text-5xl font-semibold'>Shivam</Link>
        <div className='mobile-menu block md:hidden'>
            {isOpen?<button>
                <XMarkIcon onClick={()=>setIsOpen(!isOpen)} className='text-white w-8 h-8'/>
            </button>:<button>
                <Bars3Icon onClick={()=>setIsOpen(!isOpen)} className='text-white w-8 h-8'/>
                </button>}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
