import "../styles/allow-cookies.css";

export default () => {
  return (
    <div className="accept-cookies">
      <h2>This website uses cookies</h2>
      <p>
        We rely on cookies to remember your preferences and to analyze our
        website traffic. By clicking, you agree to our Privacy Policy
      </p>
      <div className="flex">
        <button className="cta">Allow Cookies</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};
