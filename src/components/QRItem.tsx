import { FC } from "react";
import QRCode from "react-qr-code";

type Props = {
  title: string;
  value: string;
};

import "../styles/qr-item.css";

const QRItem: FC<Props> = ({ title, value }) => {
  return (
    <div className="item">
      <QRCode className="qr" size={150} value={value} />
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default QRItem;
