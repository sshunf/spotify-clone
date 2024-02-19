"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi"
import Box from "./Box"
import { ImInsertTemplate } from "react-icons/im";
import SidebarItem from "./SidebarItem"
import Library from "./library";

// Define Sidebar Properties
interface SidebarProps {
    children: React.ReactNode;
}

// Define Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    // useMemo ensures the code in the first bracket is executed only when there is a change to the variable specified in the second parameter
    // in this case, second parameter is not specified, meaning code is executed only once
    // the code defines properties of each sidebar 
    const routes = useMemo(() => [
    {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
    },
    {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search'
    }
    ],
    [])
    return(
        <div className="flex h-full">
            <div className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            ">
                <Box>
                   <div className="
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                   "
                >
                    {routes.map((item) => (
                        <SidebarItem
                            key={item.label}
                            {...item}
                        />
                    ))}
                    </div>  
                </Box>
                <Box className="overflow-y-auto h=-full">
                   <Library />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;