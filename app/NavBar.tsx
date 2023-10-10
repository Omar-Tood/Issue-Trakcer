'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import {AiFillBug} from 'react-icons/ai'

const NavBar = () => {
    const currentPath = usePathname()
    console.log(currentPath)
    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"}
    ]
  return (
    <nav className="flex space-x-2 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><AiFillBug/></Link>
        <ul className="flex space-x-6 ">
            {links.map(link => <Link key={link.href} href={link.href} className={`${link.href === currentPath ? "text-pink-900" : "text-zinc-500"} hover:text-pink-600 transition-colors`}>{link.label}</Link>)}
            
        </ul>
    </nav>
  )
}

export default NavBar