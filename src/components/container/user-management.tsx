import React, { useState } from "react";

// import components
import { Button, LoadingOverlay, UserCard, UserDialog } from "../global";
import { toast } from "react-toastify";

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
  const { deleteUser, postUser, editUser } = UsersService();
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
      toast("Sucess Delete User", {
        type: "success",
        autoClose: 3000,
      });
    } catch (error) {
      toast("Failed Delete User", {
        type: "error",
        autoClose: 3000,
      });
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
        toast("Sucess Post User", {
          type: "success",
          autoClose: 3000,
        });
      } else {
        const resError = await resStatus.json();
        let message = "Failed Post User";

        if (resError) {
          message += ` -  ${resError[0].field} is ${resError[0].message}`;
        } else {
          message;
        }
        toast(message, {
          type: "error",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast("Failed Post User", {
        type: "error",
        autoClose: 3000,
      });
    } finally {
      setIsLaodingAction(false);
    }
  };

  const handleEditUser = async (id: number, data: IInitUsers) => {
    setIsLaodingAction(true);
    try {
      const resStatus = await editUser(id, data);
      if (resStatus.status === 200) {
        fetchAllUsers();
        toast("Sucess Edit User", {
          type: "success",
          autoClose: 3000,
        });
      } else {
        const resError = await resStatus.json();
        let message = "Failed Edit User";

        if (resError) {
          message += ` -  ${resError[0].field} is ${resError[0].message}`;
        } else {
          message;
        }

        toast(message, {
          type: "error",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast("Failed Edit User", {
        type: "error",
        autoClose: 3000,
      });
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
        handleEditUser={handleEditUser}
      />

      {isLoadingAction && <LoadingOverlay />}
    </>
  );
};

export default UserManagementContainer;
