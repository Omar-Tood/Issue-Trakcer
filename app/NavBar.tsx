import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex space-x-2">
        <Link href="/">Logo</Link>
        <ul className="flex">
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/">Issue</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar