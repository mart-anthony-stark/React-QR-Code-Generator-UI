import { useState } from "react";

const Login = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  return (
    <div className="login">
      <form>
        <div className="field">
          <input type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div className="field">
          <input type="text" placeholder="your password" />
        </div>
      </form>
      <button disabled={btnDisabled}></button>
    </div>
  );
};

export default Login;
