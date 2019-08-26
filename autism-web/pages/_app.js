import React, { createContext, useReducer } from "react";
import App, { Container } from "next/app";
import { UserProvider } from "../components/UserContext";

const initialState = {
  name: "",
  age: "",
  hasAutism: false,
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "setUser":
//       return {
//         ...state,
//         ...action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Container>
    );
  }
}
