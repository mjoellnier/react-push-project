require("dotenv").config({ path: "variables.env" });

const express = require("express");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
var crypto = require("crypto");
const subs = {};
var cors = require("cors");

const createHash = input => {
  const md5sum = crypto.createHash("md5");
  md5sum.update(Buffer.from(input));
  return md5sum.digest("hex");
};

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
  res.send("I'm working!");
});

app.post("/subscribe", (req, res) => {
  let key = createHash(JSON.stringify(req.body));
  subs[key] = req.body;
  res.status(201).send({ id: key });
});

app.post("/send", (req, res) => {
  const payload = JSON.stringify({
    title: req.body.title,
    text: req.body.message,
    icon: "/react-push-project/logo192.png"
  });
  if (subs[req.body.user]) {
    webPush
      .sendNotification(subs[req.body.user], payload)
      .then(
        fullfilled => console.log("Fullfilled!", fullfilled),
        rejected => console.log("Rejected!", rejected)
      )
      .catch(error => console.error("Error!", error));
    res.status(200);
  } else {
    res.status(418);
  }
});

app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
