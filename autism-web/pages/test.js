import { useState, useEffect, useRef } from "react";
import "../sass/main.scss";
import Router from "next/router";
import Page from "../components/Page";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";
import PlayButton from "../components/PlaySoundButton";
import fetch from "isomorphic-unfetch";
// import Sound from "react-audio-player";
import Card from "../components/Card";
import { setAnswers } from "../components/UserContext";

const result = {
  version: 0,
  answers: [],
};

export default () => {
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState();
  const [playSound, setPlaySound] = useState(false);
  const soundRef = useRef();
  useEffect(() => {
    const url = process.env.api;
    setLoading(true);
    fetch(`${url}/exams/exams/0/`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [step]);

  if (loading) {
    return <Loading />;
  }
  const { posts } = data;

  const addAnswer = (postId, answer) => {
    result.answers = [
      ...result.answers,
      {
        post: postId,
        answer,
      },
    ];
  };

  const onItemClick = (pk, index) => {
    if (step < posts.length - 1) {
      addAnswer(pk, index);
      setStep(step + 1);
      setPostLoading(true);
    } else {
      addAnswer(pk, index);
      setAnswers(result.answers);
      Router.push("/done");
    }
  };

  const { first_image, second_image, sound_one, pk } = posts[step];

  const onPlayPressed = () => {
    if (soundRef.current.play) {
      soundRef.current.play();
    }
  };

  return (
    <Page>
      <Card
        image={first_image}
        onClick={() => onItemClick(pk, 0)}
        onLoad={() => setPostLoading(false)}
      />
      <PlayButton onClick={onPlayPressed} />
      <audio src={sound_one} ref={soundRef} />

      <Card
        image={second_image}
        onClick={() => onItemClick(pk, 1)}
        onLoad={() => setPostLoading(false)}
      />
    </Page>
  );
};
