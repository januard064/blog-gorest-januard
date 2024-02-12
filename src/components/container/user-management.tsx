import React from "react";

// import components
import { Button, UserCard } from "../global";

// import type
import { IUsers } from "../types";

// import icons

import { IoMdAdd } from "react-icons/io";

const UserManagementContainer = ({ userDatas }: { userDatas: IUsers[] }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <Button icon={<IoMdAdd />} label="Add User" />
      </div>
      {userDatas.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserManagementContainer;
