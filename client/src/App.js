import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import "./style/App.css";
import GitHubButton from "react-github-btn";
import { TwitterFollowButton } from "react-twitter-embed";
import {
  isPushNotificationSupported,
  initializePushNotifications,
  sendNotification,
  createNotificationSubscription,
  registerClientToPushServer,
  sendPushMessageViaServer
} from "./utils/push-notification";

function App() {
  const [clientKey, setClientKey] = useState();
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    if (isPushNotificationSupported()) {
      initializePushNotifications().then(consent => {
        if (consent === "granted") {
          sendNotification();
        }
      });
      createNotificationSubscription().then(sub => {
        registerClientToPushServer(sub).then(key => setClientKey(key));
      });
    }
  }, []);

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
        <div id="notification-form-wrapper">
          <form id="notification-form" action="submit">
            <input
              className="input-field"
              placeholder="Notification-Title"
              maxLength={50}
              value={notificationTitle}
              onChange={target => setNotificationTitle(target.target.value)}
            />
            <input
              className="input-field"
              placeholder="Notification-Message"
              maxLength={200}
              value={notificationMessage}
              onChange={target => setNotificationMessage(target.target.value)}
            />
            <input
              type="button"
              value="SEND!"
              className="send-button"
              onClick={() =>
                sendPushMessageViaServer({
                  user: clientKey,
                  title: notificationTitle,
                  message: notificationMessage
                })
              }
            />
          </form>
        </div>
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
