import React, { useCallback, useEffect, useState } from "react";

// import services
import { UsersService } from "@/components/services";

// import types
import { IUsers } from "@/components/types";

// import components
import { LoadingBar } from "@/components/global";
import UserManagementContainer from "@/components/container/user-management";

import Head from "next/head";

const UserManagement = () => {
  const { getAllUsers, getUserById, deleteUser } = UsersService();

  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<IUsers[]>([]);

  const [isLoadingDetailUser, setIsLoadingDetailUser] =
    useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUsers>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchAllUsers = useCallback(
    async (page?: number) => {
      setIsLoadingUsers(true);
      try {
        const resAllUsers = await getAllUsers(page?.toString());
        setAllUsers(resAllUsers);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        setIsLoadingUsers(false);
      }
    },
    [getAllUsers]
  );

  const handleFetchDetailUser = async (id: number) => {
    setIsLoadingDetailUser(true);
    try {
      const resSelectedUser = await getUserById(id);
      setSelectedUser(resSelectedUser);
    } catch (error) {
    } finally {
      setIsLoadingDetailUser(false);
    }
  };

  const handleNext = () => {
    if (currentPage !== 0) setCurrentPage(currentPage + 1);
  };
  const handleePrev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    fetchAllUsers(currentPage);
  }, [currentPage]);

  if (isLoadingUsers) {
    return (
      <div className="h-[70vh]">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Users - Management</title>
      </Head>
      <div className="md:px-8 px-4 pb-10">
        <UserManagementContainer
          userDatas={allUsers}
          handleFetchDetailUser={handleFetchDetailUser}
          isLoadingDetailUser={isLoadingDetailUser}
          selectedUser={selectedUser}
          fetchAllUsers={fetchAllUsers}
          currentPage={currentPage}
          handleNext={handleNext}
          handleePrev={handleePrev}
        />
      </div>
    </>
  );
};

export default UserManagement;
