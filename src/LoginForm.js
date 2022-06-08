import React, { useEffect, useState } from "react";
import LoginAction from "./LoginAction";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };
  const handleLogin = async (e) => {
    setLoading(true);
    setError(null);

    await LoginAction({ email, password })
      .then(() => {
        setLoading(false);
        alert("LOGGED IN");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);

        setLoading(false);
      });
  };
  return (
    <div>
      <h1>LoginForm</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <div>{error}</div>
      <button
        type="submit"
        onClick={(e) => handleLogin(e)}
        disabled={!email || password.length < 6 || loading}
      >
        LOG IN
      </button>
    </div>
  );
}

export default LoginForm;
export const ValidateEmail = (mail) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mailFormat)) {
    return true;
  }
  return false;
};

export const ValidatePhone = (phone) => {
  const phoneFormat = /^\d{10}$/;
  if (phone.match(phoneFormat)) {
    return true;
  }
  return false;
};
