import { FC } from "react";
import "../styles/account-badge.css";

type Props = {
  type: string;
};

const AccountBadge: FC<Props> = ({ type }) => {
  return <div className={`account-badge ${type}`}>{type.toUpperCase()}</div>;
};

export default AccountBadge;
