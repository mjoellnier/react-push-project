![header]

# React Push Project

This is my test project to get my hands dirty with push notfications to a ReactJS PWA. As this is my _get to know project_ I highly appreciate every pull request or any other feedback that arrives to me. We can get in touch via [Twitter](https://twitter.com/coding_max) - feel free to contact me there!

This project is by no means secure or ready for high scaled performance! It's a pure test project for myself to get some handson experience with the notification API.

# Client project

The client project contains a installable ReactJS PWA that triggers a automatic push notification on visit (as soon as you approved you want the messages). Furthermore the client registers itself to the backend and receives an id. With this id it's possible to trigger push messages specific to that client.

# Server project

The server implementation is based upon an express node server and the [web-push framework](https://www.npmjs.com/package/web-push). It's pretty straight forward to implement. It's important to note that this test project has no real persistance layer like a database or something. It holds an inmemory map with the hashes. So don't be too surprised when there is some strange behaviour - the chances are high that I did something on the backend and your id is flushed from the map.

## Screenshots

**Message notification on installed PWA icon**

![icon_message]

**Push message in notification central (Android)**

![message_central]

[icon_message]: ./docs/images/icon_message.png
[message_central]: ./docs/images/message_central.png
[header]: ./docs/images/header.png
