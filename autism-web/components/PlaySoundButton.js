import { Fragment } from "react";
export default props => (
  <Fragment>
    <button className="play_button" onClick={props.onClick}>
      پخش صدا
    </button>
    <style jsx>{`
      .play_button {
        border-width: 1px;
        border: none;
        background-color: #28b485;
        color: white;
        font-weight: bold;
        margin: 4rem 4rem;
        padding: 2rem 3rem;
        border-radius: 10rem;
        font-size: 2rem;
      }
    `}</style>
  </Fragment>
);
