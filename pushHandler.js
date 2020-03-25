self.addEventListener("push", event => {
  console.log("[Service Worker] Push Received.");

  const { image, url, title, text, icon } = event.data.json();

  const options = {
    data: url,
    body: text,
    icon: image,
    vibrate: [200, 100, 200],
    icon: icon
  };
  //call the method showNotification to show the notification
  event.waitUntil(registration.showNotification(title, options));
});
