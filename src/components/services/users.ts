import { IInitUsers } from "../types";

export const UsersService = () => {
  const getAllUsers = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_GOREST}/public/v2/users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  };

  const getUserById = (idUser: number) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_GOREST}/public/v2/users/${idUser}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  };

  const postUser = (userData: IInitUsers) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_GOREST}/public/v2/users`, {
      method: "POST",
      body: JSON.stringify({
        name: userData?.name,
        email: userData?.email,
        gender: userData?.gender,
        status: userData?.status,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN}`,
      },
    })
      .then((response) => {
        return response
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  };

  const deleteUser = (idUser?: number) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_GOREST}/public/v2/users/${idUser}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUR_ACCESS_TOKEN}`,
        },
        method: "DELETE",
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  };

  return {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser,
  };
};
