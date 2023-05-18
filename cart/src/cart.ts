import React, { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

export const login = (username: string, password: string) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      // getCart()
      return data.access_token;
    });

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe(() => {
      setLoggedIn(!!jwt.value);
    });
    return () => subscription.unsubscribe();
  }, []);
  return loggedIn;
};
