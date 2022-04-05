import { FC, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TQRCode } from "../types/QR";
import { User } from "../types/User";

type Props = {
  toggleModal: (state: boolean) => void;
  getItems: () => void;
  addQr: TQRCode;
  setAddQr: (qr: TQRCode) => void;
};

const AddItem: FC<Props> = ({ toggleModal, getItems, addQr, setAddQr }) => {
  const user: User = useSelector((state: any) => state.user);

  const handleAddItem = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (addQr.title == "" || addQr.user == "" || addQr.value == "") {
      toast.error("Title and value is required for QR Code");
    } else {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + "/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(addQr),
      });
      const data = await res.json();

      if (data.success) toast.success("QR Code added successfully!");
      else toast.error(data.msg);

      toggleModal(false);
      setAddQr({ title: "", user: user._id || "", value: "" });
      getItems();
    }
  };
  return (
    <div className="addItem">
      <h2 className="pri-light">Create New QR Code</h2>
      <QRCode value={addQr?.value} size={200} />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setAddQr({ ...addQr, title: e.target.value })}
        value={addQr.title}
      />
      <input
        type="text"
        placeholder="Value"
        onChange={(e) => setAddQr({ ...addQr, value: e.target.value })}
        value={addQr.value}
      />

      <div className="buttons">
        <button className="cta" onClick={handleAddItem}>
          ADD
        </button>
        <button className="cancel" onClick={() => toggleModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddItem;
