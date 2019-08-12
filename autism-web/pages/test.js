import { useState, useEffect } from "react";
import "../sass/main.scss";
import Router from "next/router";
import Page from "../components/Page";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";
import fetch from "isomorphic-unfetch";
// import Sound from "react-audio-player";
import Card from "../components/Card";

export default () => {
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const url = "http://134.209.202.175:8000";
    fetch(`${url}/exams/exams/0/`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  const { posts } = data;

  const result = {
    version: 0,
    answers: {}
  };

  const onItemClick = index => {
    if (step < posts.length - 1) {
      result.answers[String(step)] = index;
      setStep(step + 1);
      setPostLoading(true);
    } else {
      result.answers[String(step)] = index;
      Router.push("/done");
    }
  };

  const { first_image, second_image, sound_one } = posts[step];

  return (
    <Page>
      <audio
        src={sound_one}
        autoPlay
        loop
        // playsinline
        // onEnded="this.play();"
      />
      <Card
        image={first_image}
        onClick={() => onItemClick(0)}
        onLoad={() => setPostLoading(false)}
      />
      <Card
        image={second_image}
        onClick={() => onItemClick(1)}
        onLoad={() => setPostLoading(false)}
      />
      {postLoading && <Loading />}
    </Page>
  );
};
