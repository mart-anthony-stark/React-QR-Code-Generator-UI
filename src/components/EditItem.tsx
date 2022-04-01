import { FC, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { TQRCode } from "../types/QR";
import { handleDownload } from "../utils/download";

type Props = {
  user: any;
  toggleModal: (state: boolean) => void;
  getItems: () => void;
  QR: TQRCode;
};

const AddItem: FC<Props> = ({ user, toggleModal, getItems, QR }) => {
  const [editQr, setQR] = useState<TQRCode>(QR);

  const handleEditItem = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (editQr.title == "" || editQr.user == "" || editQr.value == "") {
      toast.error("Title and value is required for QR Code");
    } else {
      const res = await fetch(
        import.meta.env.VITE_API_BASE_URL + `/qr/${QR._id}/user/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: `bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(editQr),
        }
      );
      const data = await res.json();
      toggleModal(false);
      setQR({ title: "", user: user._id, value: "" });
      toast.success("QR Code saved successfully!");
      getItems();
    }
  };
  return (
    <div className="addItem">
      <h2 className="pri-light">Edit QR Code</h2>
      <QRCode className={`C${QR._id}`} value={editQr?.value} size={200} />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setQR({ ...editQr, title: e.target.value })}
        value={editQr.title}
      />
      <input
        type="text"
        placeholder="Value"
        onChange={(e) => setQR({ ...editQr, value: e.target.value })}
        value={editQr.value}
      />
      <button
        className="cta"
        onClick={() =>
          handleDownload({ title: QR.title, selector: `svg.C${QR._id}` })
        }
      >
        Download
      </button>

      <div className="buttons">
        <button className="cta" onClick={handleEditItem}>
          SAVE
        </button>
        <button className="cancel" onClick={() => toggleModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddItem;
