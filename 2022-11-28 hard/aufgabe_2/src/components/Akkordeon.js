import App from "../App";
import { useState } from "react";

const Akkordeon = () => {
  const [info, setInfo] = useState(false);

  const show = () => {
    setInfo((prevCheck) => !prevCheck);
    console.log(info);
  };

  return (
    <section>
      <article>
        <h1>
          Why is react great?
          <button onClick={show}>+</button>
        </h1>
      </article>
      <article className={info ? " " : "displayNone"}>
        <p>Ich bin das Content</p>
      </article>
    </section>
  );
};

export default Akkordeon;
