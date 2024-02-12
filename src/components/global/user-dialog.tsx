import React from "react";

// import components
import { Button, DialogBox } from ".";
import { IUsers } from "../types";

interface IDialogBox {
  isOpen: boolean;
  handleClose: () => void;
  type?: "Add" | "Edit" | "Delete";
  isLoading?: boolean;
  data?: IUsers;
  handleDeleteUser: (id: number) => void;
}

export const UserDialog = (props: IDialogBox) => {
  const deleteAction = () => {
    const id = props.data?.id;
    if (id) {
      props.handleDeleteUser(id);
    }
  };

  return (
    <DialogBox isOpen={props.isOpen} handleClose={props.handleClose}>
      <div className=" px-6 pb-6">
        <div className="flex justify-center">
          <p className="text-lg font-semibold">{props?.type} User</p>
        </div>
        {props?.type === "Delete" && (
          <div className="h-[20vh] overflow-y-auto pt-6">
            <p>
              {" "}
              Are you sure want to delete{" "}
              <span className="font-semibold">
                {" "}
                {props?.data?.name} - {props?.data?.email}{" "}
              </span> ?
            </p>
          </div>
        )}
        <div className="flex justify-end">
          <div className="flex items-center space-x-3">
            {" "}
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={deleteAction}>Delete</Button>
          </div>
        </div>
      </div>
    </DialogBox>
  );
};
