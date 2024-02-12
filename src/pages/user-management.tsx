import React, { useCallback, useEffect, useState } from "react";

// import services
import { UsersService } from "@/components/services";

// import types
import { IUsers } from "@/components/types";

// import components
import { LoadingBar } from "@/components/global";
import UserManagementContainer from "@/components/container/user-management";

const UserManagement = () => {
  const { getAllUsers } = UsersService();

  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<IUsers[]>([]);

  const fetchAllUsers = useCallback(async () => {
    setIsLoadingUsers(true);
    try {
      const resAllUsers = await getAllUsers();
      setAllUsers(resAllUsers);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoadingUsers(false);
    }
  }, [getAllUsers]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (isLoadingUsers) {
    return (
      <div className="h-[70vh]">
        <LoadingBar />
      </div>
    );
  }

  return (
    <div className="md:px-8 px-4 pb-10">
      <UserManagementContainer userDatas={allUsers} />
    </div>
  );
};

export default UserManagement;
