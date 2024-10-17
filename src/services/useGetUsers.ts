import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { generateUniqueRandomArray, getRandomNumber } from "../utils";
import { useEffect, useState } from "react";
import { keys } from "./queryKeys";

export interface User {
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
}

const getUsers = async ({ count = 10 }): Promise<User[]> => {
  const data = await axios(
    `https://randomuser.me/api?results=${count}&inc=picture,login`
  );

  return data.data?.results ?? [];
};

export const useGetUsers = () => {
  const [count, setCount] = useState(10);
  const [users, setUsers] = useState<User[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: keys.users,
    refetchInterval: 3000,
    refetchOnWindowFocus: false,
    queryFn: () => getUsers({ count }),
  });

  useEffect(() => {
    if (!users?.length && data?.length) {
      setUsers(data);
    }

    if (users?.length && data?.length) {
      const indexes = generateUniqueRandomArray(count);

      const updatedUsers = users.map((item, index, array) => {
        if (indexes.includes(index) && index < array.length) {
          return data[indexes.indexOf(index)];
        }

        return item;
      });

      setCount(getRandomNumber());
      setUsers(updatedUsers);
    }
  }, [data]);

  return { data: users, isLoading, isError };
};
