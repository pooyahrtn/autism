import React from "react";
import "../sass/main.scss";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Tutorial from "./components/Tutorial";
import UserForm from "./components/User";
import Done from "./components/Done";
import Sound from "react-audio-player";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const url = process.env.URL;
    const res = await fetch(`${url}/exams/exams/0/`);
    const data = await res.json();
    return { data };
  }

  result = {
    version: 0,
    answers: {}
  };
  state = {
    step: 0,
    showOrientationWarning: true,
    showWelcome: true,
    showTutorial: true,
    done: false,
    showUserForm: true,
    age: "",
    name: "",
    mute: true,
    data: []
  };

  onItemClick = index => {
    const { step } = this.state;
    const {
      data: { posts }
    } = this.props;

    if (step < posts.length - 1) {
      this.result.answers[String(step)] = index;
      this.setState(
        prevState => ({
          step: prevState.step + 1,
          mute: true
        }),
        this.playStep
      );
    } else {
      this.setState({
        done: true
      });
      this.result.answers[String(step)] = index;
      console.log(this.result);
    }
  };

  // onConfirmWelcome = () => {
  //   this.setState({
  //     showWelcome: false
  //   });
  // };

  // onTutotiralConfirm = () => {
  //   this.startTime = new Date();
  //   this.setState({
  //     showTutorial: false
  //   });
  //   this.playStep();
  // };

  // onUserFormSubmit = () => {
  //   this.setState({
  //     showUserForm: false
  //   });
  // };

  render() {
    const {
      step,
      showOrientationWarning,
      showTutorial,
      showWelcome,
      showUserForm,
      age,
      name,
      done,
      mute
    } = this.state;
    const {
      data: { posts }
    } = this.props;
    const { first_image, second_image, sound_one } = posts[step];

    return (
      <div className="screen">
        {!showTutorial && !done && (
          <Sound
            ref={element => {
              this.rap = element;
            }}
            src={sound_one}
            autoPlay
            loop
            onended="this.play();"
          />
        )}

        <Head>
          <meta
            name="viewport"
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, , target-densitydpi=device-dpi"'
          />
          <meta charSet="utf-8" />
        </Head>
        {showOrientationWarning && (
          <OrientationWarning onClick={this.onConfirmWarning} />
        )}

        {showTutorial && <Tutorial onClick={this.onTutotiralConfirm} />}
        {showUserForm && (
          <UserForm
            age={age}
            name={name}
            onNameChange={name => {
              this.setState({ name });
            }}
            onAgeChange={age => {
              this.setState({ age });
            }}
            onSubmit={this.onUserFormSubmit}
          />
        )}
        {showWelcome && <Welcome onClick={this.onConfirmWelcome} />}
        {done && <Done />}

        <Card image={first_image} onClick={() => this.onItemClick(0)} />
        <Card image={second_image} onClick={() => this.onItemClick(1)} />
      </div>
    );
  }
}

export default Index;
