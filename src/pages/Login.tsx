const Login = () => {
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
    </div>
  );
};

export default Login;
