import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div class={classes.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <span>Jason Alexis</span>.
    </div>
  );
};

export default Footer;
