import React from "react";

// import icons
import { RxHamburgerMenu } from "react-icons/rx";

// import components
import { MenuNavbar } from ".";

const ButtonMenu = ({ label }: { label: string }) => {
  return <div className="text-white cursor-pointer">{label}</div>;
};

export const Navbar = () => {
  const MENUS_NAVBAR = [
    {
      label: "Posts",
      action: () => {},
    },
    {
      label: "User Management",
      action: () => {},
    },
  ];

  return (
    <div className="h-16 w-full bg-sky-600 flex items-center md:px-8 px-4 sticky top-0 text-white">
      <div className="flex justify-between w-full">
        <div className="cursor-pointer">BLOGS-GOREST</div>
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
              <ButtonMenu key={index} label={menu.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
