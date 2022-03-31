import { FC } from "react";
import "../styles/add-icon.css";

type Props = {
  onClick?: () => void;
};

const AddIcon: FC<Props> = ({ onClick }) => {
  return (
    <button className="add-icon" onClick={onClick}>
      <div className="plus">+</div>
      <h4>Add New QR Code</h4>
    </button>
  );
};

export default AddIcon;
