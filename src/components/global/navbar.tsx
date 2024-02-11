import React from "react";

import Link from "next/link";
import { usePathname } from 'next/navigation'

// import icons
import { RxHamburgerMenu } from "react-icons/rx";

// import components
import { MenuNavbar } from ".";

const ButtonMenu = ({ label, href }: { label: string, href:string }) => {
  const pathname = usePathname()
  return (
    <Link href={href}>
      <div className={`text-white cursor-pointer ${pathname === href ? 'font-bold' : ''}`}>{label}</div>
    </Link>
  );
};

export const Navbar = () => {
  const MENUS_NAVBAR = [
    {
      label: "Posts",
      href:'/',
    },
    {
      label: "User Management",
      href:'/user-management',
    },
  ];

  return (
    <div className="h-16 w-full bg-sky-600 flex items-center md:px-8 px-4 sticky top-0 text-white">
      <div className="flex justify-between w-full">
       <Link href={'/'}><div className="cursor-pointer">BLOGS-GOREST</div> </Link> 
        <div className="flex items-center  ">
          <div className=" flex md:hidden">
            <MenuNavbar
              menuButton={
                <div className="flex cursor-pointer items-center ">
                  <div className="text-neutral-80">
                    <RxHamburgerMenu className="text-xl" />
                  </div>
                </div>
              }
              listMenu={MENUS_NAVBAR}
            />
          </div>
          <div className="md:flex hidden space-x-4">
            {MENUS_NAVBAR.map((menu, index) => (
              <ButtonMenu key={index} label={menu.label} href={menu.href} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
