/**
 * checks if Push notification and service workers are supported by your browser
 */
export const isPushNotificationSupported = () => {
  return "serviceWorker" in navigator && "PushManager" in window;
};

/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */
export const initializePushNotifications = () => {
  // request user grant to show notification
  return Notification.requestPermission(function(result) {
    return result;
  });
};
/**
 * shows a notification
 */
export const sendNotification = () => {
  const img = "/react-push-project/logo192.png";
  const text = "I'm a automatic push message!";
  const title = "Hello there 👋";
  const options = {
    body: text,
    icon: "/react-push-project/logo192.png",
    vibrate: [200, 100, 200],
    tag: "welcome-push",
    image: img,
    badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [
      {
        action: "Detail",
        title: "View",
        icon: "https://via.placeholder.com/128/ff0000"
      }
    ]
  };
  navigator.serviceWorker.ready.then(function(serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
};
