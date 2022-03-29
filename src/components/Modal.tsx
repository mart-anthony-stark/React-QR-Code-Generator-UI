import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
