import React from "react";
import Link from "next/link";

import { usePathname } from 'next/navigation'

import { BsJournalPlus } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const SideBarButton = ({
  label,
  icon,
  href,
}: {
  label: string;
  icon: any;
  href: string;
}) => {

  const pathname = usePathname()

  return (
    <div>
      <Link href={href}>
        <div className={`text-xl font-semibold cursor-pointer flex items-center space-x-2 ${pathname === href ? 'text-[#FF971D]' : 'text-black'}`}>
          <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
          <div>{label}</div>
        </div>
      </Link>
    </div>
  );
};

export const SideBarMenu = () => {
  const SIDE_MENUS = [
    {
      label: "Posts",
      icon: <BsJournalPlus className="text-sm" />,
      href: "/",
    },
    {
      label: "Users Management",
      icon: <MdManageAccounts className="text-md" />,
      href: "/user-management",
    },
  ];

  return (
    <div className="pl-8 space-y-6 fixed z-50">
      {SIDE_MENUS.map((menu, index) => (
        <SideBarButton
          key={index}
          label={menu.label}
          icon={menu.icon}
          href={menu.href}
        />
      ))}
    </div>
  );
};
