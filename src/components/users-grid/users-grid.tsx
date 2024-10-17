import { useGetUsers } from "../../services/useGetUsers";
import { UserCard } from "../user-card";
import styles from "./styles.module.scss";

export const UsersGrid = () => {
  const { data } = useGetUsers();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data?.map((user) => (
          <UserCard key={user.login.uuid} avatarUrl={user.picture.large} />
        ))}
      </div>
    </div>
  );
};
