import React, { useState } from "react";

// import components
import { Button, LoadingOverlay, UserCard, UserDialog } from "../global";

// import type
import { IUsers } from "../types";

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
  const { deleteUser } = UsersService();
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
      alert("Berhasil Delete User");
    } catch (error) {
      alert("Gagal Delete User");
    } finally {
      setIsLaodingAction(false);
    }
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex justify-end">
          <Button onClick={() => setIsOpenModal(true)}>
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
      />

      {isLoadingAction && <LoadingOverlay />}
    </>
  );
};

export default UserManagementContainer;
