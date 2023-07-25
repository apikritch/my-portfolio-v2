import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhp,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faVuejs,
  faNodeJs,
  faLaravel,
  faBootstrap,
  faAws,
  faFigma,
  faGithub,
  faGitlab,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faXmark,
  faAngleRight,
  faAngleLeft,
  faLink,
  faUser,
  faKey,
  faCircle,
  faQuoteRight,
  faQuoteLeft,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

library.add(
  faPhp,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faVuejs,
  faNodeJs,
  faLaravel,
  faBootstrap,
  faAws,
  faFigma,
  faGithub,
  faGitlab,
  faXmark,
  faAngleRight,
  faAngleLeft,
  faLink,
  faUser,
  faKey,
  faCircle,
  faQuoteRight,
  faQuoteLeft,
  faLinkedinIn,
  faPhone,
  faEnvelope
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
