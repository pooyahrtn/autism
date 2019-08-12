import React, { useState } from "react";
import OrientationWarning from "./OrientationWarning";
import Head from "next/head";
export default props => {
  const [orientationWarning, setOrientationWarning] = useState(true);
  const onConfirmWarning = () => {
    setOrientationWarning(false);
  };

  return (
    <div className="screen">
      <Head>
        <meta
          name="viewport"
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, , target-densitydpi=device-dpi"'
        />
        <meta charSet="utf-8" />
        <title>غربالگری اتیسم</title>
      </Head>
      {orientationWarning && <OrientationWarning onClick={onConfirmWarning} />}
      {props.children}
    </div>
  );
};
