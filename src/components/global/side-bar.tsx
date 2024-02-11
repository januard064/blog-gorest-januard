import React from "react";

import { BsJournalPlus } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const SideBarButton = ({ label, icon }: { label: string; icon: any }) => {
  return (
    <div className="text-xl font-semibold cursor-pointer flex items-center space-x-2">
      {icon}
      <div>{label}</div>
    </div>
  );
};

export const SideBarMenu = () => {
  const SIDE_MENUS = [
    {
      label: "Posts",
      icon: <BsJournalPlus className="text-sm" />,
    },
    {
      label: "Users Management",
      icon: <MdManageAccounts className="text-md" />,
    },
  ];

  return (
    <div className="pl-8 space-y-6 fixed z-50">
    {SIDE_MENUS.map((menu, index) => (
        <SideBarButton key={index} label={menu.label} icon={menu.icon} />
    ))}
    </div>
  );
};
