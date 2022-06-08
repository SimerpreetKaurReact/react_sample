import React from "react";

export function LoginAction({ email, password }) {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "pass123" && !!email) {
        resolve();
      } else {
        reject(new Error("incorrect mail or password"));
      }
    }, delay);
  });
}

export default LoginAction;
