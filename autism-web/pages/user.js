import { useState } from "react";
import "../sass/main.scss";
import Page from "../components/Page";
import Welcome from "../components/Welcome";
import UserForm from "../components/User";
import Router from "next/router";

export default () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const onUserFormSubmit = () => {
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
      />
    </Page>
  );
};
