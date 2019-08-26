import { useState } from "react";
import "../sass/main.scss";
import Page from "../components/Page";
import Welcome from "../components/Welcome";
import UserForm from "../components/User";
import Router from "next/router";
import { setUser } from "../components/UserContext";

export default props => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [hasAutism, setHasAutism] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const onUserFormSubmit = () => {
    setUser({ age, name, hasAutism, hasBackground });
    Router.push("/tutorial");
  };
  return (
    <Page>
      <UserForm
        age={age}
        name={name}
        onNameChange={setName}
        onAgeChange={setAge}
        onSubmit={onUserFormSubmit}
        hasAutism={hasAutism}
        setHasAutism={setHasAutism}
        setHasBackground={setHasBackground}
        hasBackground={hasBackground}
      />
    </Page>
  );
};
