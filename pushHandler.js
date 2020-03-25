self.addEventListener("push", event => {
  console.log("[Service Worker] Push Received.");

  const { image, tag, url, title, text, icon } = event.data.json();

  const options = {
    data: url,
    body: text,
    icon: image,
    vibrate: [200, 100, 200],
    icon: icon,
    //tag: tag,
    //image: image,
    badge: "https://spyna.it/icons/favicon.ico"
  };
  //call the method showNotification to show the notification
  event.waitUntil(registration.showNotification(title, options));
});

// actions: [
//   {
//     action: "Detail",
//     title: "View",
//     icon: "https://via.placeholder.com/128/ff0000"
//   }
// ]
