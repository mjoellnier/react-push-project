import React from "react";
import logo from "./assets/images/logo.svg";
import "./style/App.css";
import GitHubButton from "react-github-btn";
import { TwitterFollowButton } from "react-twitter-embed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the test PWA for my{" "}
          <a
            href="https://github.com/mjoellnier/react-push-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Push Project
          </a>
        </p>
        <div className="socialBanner">
          <TwitterFollowButton screenName={"coding_max"} />
          <GitHubButton
            href="https://github.com/mjoellnier"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
            aria-label="Follow @mjoellnier on GitHub"
            style={{ float: "right" }}
          >
            Follow @mjoellnier
          </GitHubButton>
        </div>
      </header>
    </div>
  );
}

export default App;
