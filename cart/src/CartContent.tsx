import React, { useState, useEffect } from "react";

import Login from "./Login";
import { login, jwt } from "./cart";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const subscription = jwt.subscribe((val) => {
      setToken(val ?? "");
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
    </div>
  );
};

export default CartContent;
