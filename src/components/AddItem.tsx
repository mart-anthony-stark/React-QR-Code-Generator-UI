import { FC, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { TQRCode } from "../types/QR";

type Props = {
  user: any;
  toggleModal: (state: boolean) => void;
  getItems: () => void;
};

const AddItem: FC<Props> = ({ user, toggleModal, getItems }) => {
  const [addQr, setAddQr] = useState<TQRCode>({
    title: "",
    user: user._id,
    value: "",
  });

  const handleAddItem = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(addQr);
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
      console.log(data);
      toggleModal(false);
      setAddQr({ title: "", user: user._id, value: "" });
      toast.success("QR Code added successfully!");
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
      />
      <input
        type="text"
        placeholder="Value"
        onChange={(e) => setAddQr({ ...addQr, value: e.target.value })}
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
