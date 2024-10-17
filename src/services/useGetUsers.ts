import { useQuery } from "@tanstack/react-query";
import { generateUniqueRandomArray, getRandomNumber } from "../utils";
import { useEffect, useState } from "react";
import { getUsers, User } from "../api/getUsers";

export const useGetUsers = () => {
  const [count, setCount] = useState(10);
  const [users, setUsers] = useState<User[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
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
