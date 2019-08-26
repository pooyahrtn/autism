import { createContext, useContext } from "react";

export let state = {
  name: "",
  age: "",
  hasAutism: false,
  hasBackground: false,
  answers: [],
};

export function setUser(user) {
  state = { ...state, ...user };
}

export function setAnswers(answers) {
  state.answers = answers;
}

const UserContext = createContext();

export function UserProvider({ children }) {
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
