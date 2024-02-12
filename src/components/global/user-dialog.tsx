import React, { useEffect, useState } from "react";

// import components
import { Button, DialogBox, InputLabel, SelectLabel } from ".";
import { IInitUsers, IPosts, IUsers } from "../types";

interface IDialogBox {
  isOpen: boolean;
  handleClose: () => void;
  type?: "Add" | "Edit" | "Delete";
  isLoading?: boolean;
  data?: IUsers;
  handleDeleteUser: (id: number) => void;
  handlePostUser: (data: IInitUsers) => void
}

export const UserDialog = (props: IDialogBox) => {
  const initUser = {
    name: "",
    email: "",
    gender: "default",
    status: "default",
  };

  const [userData, setUserData] = useState<IInitUsers>(initUser);
  const [isDisableButton, setIsDisableButton] = useState<boolean>(true)

  const deleteAction = () => {
    const id = props.data?.id;
    if (id) {
      props.handleDeleteUser(id);
    }
  };

  const postAction = () => {
    props.handlePostUser(userData)
  };

  const GENDER_OPTION = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
  ];

  const STATUS_OPTION = [
    {
      value: "active",
      label: "active",
    },
    {
      value: "inactive",
      label: "inactive",
    },
  ];

  useEffect(() => {
    if(userData?.email !== "" && userData?.name !== "" && userData?.gender !== "default" && userData?.status !== "default" ){
      setIsDisableButton(false)
    } else{
      setIsDisableButton(true)
    }
  },[userData])

  return (
    <DialogBox isOpen={props.isOpen} handleClose={props.handleClose}>
      <div className=" px-6 pb-6">
        <div className="flex justify-center">
          <p className="text-lg font-semibold">{props?.type} User</p>
        </div>
        <div className=" pt-6 pb-8">
          {props?.type === "Delete" && (
            <p>
              {" "}
              Are you sure want to delete{" "}
              <span className="font-semibold">
                {" "}
                {props?.data?.name} - {props?.data?.email}{" "}
              </span>{" "}
              ?
            </p>
          )}
          {props?.type === "Add" && (
            <div className="w-full space-y-3">
              <InputLabel
                label="Name"
                name="name"
                value={userData?.name}
                placeholder="Input name..."
                onChange={(e: any) => {
                  setUserData((curr) => ({
                    ...curr,
                    name: e.target.value,
                  }));
                }}
              />
              <InputLabel
                label="Email"
                name="email"
                value={userData?.email}
                placeholder="Input email..."
                onChange={(e: any) => {
                  setUserData((curr) => ({
                    ...curr,
                    email: e.target.value,
                  }));
                }}
              />
              <SelectLabel
                label="Gender"
                option={GENDER_OPTION}
                value={userData?.gender}
                onChange={(e: any) => {
                  setUserData((curr) => ({
                    ...curr,
                    gender: e.target.value,
                  }));
                }}
              />

              <SelectLabel
                label="Status"
                option={STATUS_OPTION}
                value={userData?.status}
                onChange={(e: any) => {
                  setUserData((curr) => ({
                    ...curr,
                    status: e.target.value,
                  }));
                }}
              />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <div className="flex items-center space-x-3">
            {" "}
            <Button onClick={props.handleClose}>Cancel</Button>
            {props.type === "Delete" && (
              <Button onClick={deleteAction}>Delete</Button>
            )}
            {props.type === "Add" && <Button onClick={postAction} disabled={isDisableButton}>Add</Button>}
          </div>
        </div>
      </div>
    </DialogBox>
  );
};
