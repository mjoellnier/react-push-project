require("dotenv").config({ path: "variables.env" });

const express = require("express");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client")));

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
  "mailto:max@max-wuest.de",
  publicVapidKey,
  privateVapidKey
);

app.get("/test", function(req, res) {
  console.log("Test request incoming: ", req);
  res.send("I'm working!");
});

app.post("/subscribe", (req, res) => {
  console.log("Incoming subscription body:", req.body);
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({
    title: "Push notifications with Service Workers",
    text: "HEY - I'm from the server! 🍉"
  });

  webPush
    .sendNotification(subscription, payload)
    .then(
      fullfilled => console.log("Fullfilled!", fullfilled),
      rejected => console.log("Rejected!", rejected)
    )
    .catch(error => console.error("Error!", error));
});

app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
