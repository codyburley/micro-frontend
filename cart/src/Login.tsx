import React, { useState, useEffect } from "react";

import { login, useLoggedIn } from "./cart";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [userName, setUserName] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{ width: 300, top: "2rem" }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border text-sm border-gray-400 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(userName, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
