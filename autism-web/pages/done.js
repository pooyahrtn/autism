import { useEffect } from "react";
import "../sass/main.scss";
import Page from "../components/Page";
import Done from "../components/Done";
import fetch from "isomorphic-unfetch";
import { state } from "../components/UserContext";

function transferBody(body) {
  const { name, age, answers, hasBackground, hasAutism } = body;
  return JSON.stringify({
    exam: 1,
    start_time: "2019-10-21T20:19",
    end_time: "2019-10-21T20:19",
    name,
    age: parseInt(age, 10),
    answers,
    has_background: hasBackground,
    has_autism: hasAutism,
  });
}
export default () => {
  console.log(transferBody(state));
  useEffect(() => {
    const url = process.env.api;
    console.log({ url });
    fetch(`${url}/exams/experiment/`, {
      method: "POST",
      body: transferBody(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  });
  return <Done />;
};
