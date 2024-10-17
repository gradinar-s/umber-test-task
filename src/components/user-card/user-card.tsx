import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  avatarUrl: string;
}

export const UserCard: FC<Props> = ({ avatarUrl }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${avatarUrl})` }}
    />
  );
};
