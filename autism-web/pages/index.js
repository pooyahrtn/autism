import "../sass/main.scss";
import Page from "../components/Page";
import Welcome from "../components/Welcome";

export default () => {
  return <Welcome nextPage="user"/>;
};
