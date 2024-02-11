import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import type { ReactNode } from "react";
import { Fragment } from "react";

interface ListMenu {
  label: ReactNode;
  href: string;
}

export const MenuNavbar = ({
  menuButton,
  listMenu,
}: {
  menuButton?: ReactNode;
  listMenu?: ListMenu[];
}) => {
  const pathname = usePathname()
  return (
    <Menu as="div" className="flex items-center justify-center">
      <Menu.Button>{menuButton}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-4 top-14 w-56 origin-top-right divide-y divide-neutral-20 rounded-lg bg-white px-6 shadow-lg text-black">
          {listMenu?.map((menu: ListMenu, index) => (
            <div key={index} className="cursor-pointer py-4">
              <Menu.Item>
                <Link href={menu.href}>
                  <div className={`${pathname === menu.href ? 'font-bold' : ''}`}>{menu.label}</div>
                </Link>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
