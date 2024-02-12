import React from "react";

// import icons
import { MdOutlineEdit, MdDelete } from "react-icons/md";

// import type
import { IUsers } from "../types";

export const UserCard = ({ user }: { user: IUsers }) => {
  return (
    <div className="grid grid-cols-6 bg-white rounded-md p-4">
      <div className="grid grid-cols-2 w-full col-span-5 ">
        <div className="md:col-span-1 col-span-2">
          <p>Name: {user?.name}</p>
          <p>Gender: {user?.gender}</p>
        </div>
        <div className="md:col-span-1 col-span-2">
          <p>Email: {user?.email}</p>
          <p>Status: {user?.status}</p>
        </div>
      </div>
      <div className="flex space-x-3 justify-end col-span-1">
        <MdOutlineEdit className="text-lg cursor-pointer" />
        <MdDelete className="text-lg  cursor-pointer" />
      </div>
    </div>
  );
};
