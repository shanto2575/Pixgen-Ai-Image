import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href,children}) => {
    const pathname=usePathname()
    const isActive=href===pathname
    return <Link href={href} className={`${isActive ? 'border-b-2 border-purple-600 text-orange-700':''}`}>{children}</Link>
}

export default NavLink