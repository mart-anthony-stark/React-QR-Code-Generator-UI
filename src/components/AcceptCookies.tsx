import "../styles/allow-cookies.css";
import { FC } from "react";

type Props = {
  setVisible: (isVisible: boolean) => void;
};
const AcceptCookies: FC<Props> = ({ setVisible }) => {
  const cancelCookie = () => {
    setVisible(false);
  };

  return (
    <div className="accept-cookies">
      <h2>This website uses cookies</h2>
      <p>
        We rely on cookies to remember your preferences and to analyze our
        website traffic. By clicking, you agree to our Privacy Policy
      </p>
      <div className="flex">
        <button className="cta">Allow Cookies</button>
        <button onClick={cancelCookie}>Cancel</button>
      </div>
    </div>
  );
};

export default AcceptCookies;
