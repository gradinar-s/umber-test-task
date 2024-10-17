import axios from "axios";

export const getUsers = async ({ count = 10 }): Promise<User[]> => {
  const data = await axios(
    `https://randomuser.me/api?results=${count}&inc=picture,login`
  );

  return data.data?.results ?? [];
};

export interface User {
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
}
