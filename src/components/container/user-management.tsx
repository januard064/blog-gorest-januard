import React, { useState } from "react";

// import components
import { Button, LoadingOverlay, UserCard, UserDialog } from "../global";

// import type
import { IInitUsers, IUsers } from "../types";

// import icons
import { IoMdAdd } from "react-icons/io";

// import service
import { UsersService } from "../services";

const UserManagementContainer = ({
  userDatas,
  handleFetchDetailUser,
  isLoadingDetailUser,
  selectedUser,
  fetchAllUsers,
}: {
  userDatas: IUsers[];
  handleFetchDetailUser: (id: number) => void;
  isLoadingDetailUser: boolean;
  selectedUser?: IUsers;
  fetchAllUsers: () => void;
}) => {
  const { deleteUser, postUser } = UsersService();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"Add" | "Edit" | "Delete">("Add");
  const [isLoadingAction, setIsLaodingAction] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenEditModal = () => {
    setIsOpenModal(true);
    setModalType("Edit");
  };

  const handleOpenDeleteModal = () => {
    setIsOpenModal(true);
    setModalType("Delete");
  };

  const handleDeleteUser = async (id: number) => {
    setIsLaodingAction(true);
    try {
      const resDelete = await deleteUser(id);
      console.log(resDelete);
      fetchAllUsers();
      alert("Sucess Delete User");
    } catch (error) {
      alert("Failed Delete User");
    } finally {
      setIsLaodingAction(false);
    }
  };

  const handlePostUser = async (data: IInitUsers) => {
    setIsLaodingAction(true);
    try {
      const resStatus = await postUser(data);
      if (resStatus.status === 201) {
        fetchAllUsers();
        alert("Sucess Post User");
        console.log(resStatus?.status)
      } else {
        const resError = await resStatus.json();
        let message = "Failed Post User";

        if (resError) {
          message += ` -  ${resError[0].field} is ${resError[0].message}`;
        } else {
          message;
        }

        alert(message);
      }
    } catch (error) {
      console.log("ERROR", error);
      alert("Failed Post User");
    } finally {
      setIsLaodingAction(false);
    }
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div />
          <Button
            onClick={() => {
              setIsOpenModal(true);
              setModalType("Add");
            }}
          >
            <div className="flex space-x-3 items-center">
              <IoMdAdd />
              <div>Add User</div>
            </div>
          </Button>
        </div>
        {userDatas.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            handleOpenEditModal={handleOpenEditModal}
            handleOpenDeleteModal={handleOpenDeleteModal}
            handleFetchDetailUser={handleFetchDetailUser}
          />
        ))}
      </div>
      <UserDialog
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        type={modalType}
        isLoading={isLoadingDetailUser}
        data={selectedUser}
        handleDeleteUser={handleDeleteUser}
        handlePostUser={handlePostUser}
      />

      {isLoadingAction && <LoadingOverlay />}
    </>
  );
};

export default UserManagementContainer;
