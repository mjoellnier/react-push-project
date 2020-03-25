const pushServerPublicKey =
  "BLN0oNeI3RI2PAdGHU963MhGp0YV-1F0nl1-l6b9lE2OlUd0wxknTHEk5Ts477x9DFymWNY0vx61ZCTtmhhlqVs";

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

const urlBase64ToUint8Array = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

/**
 *
 * using the registered service worker creates a push notification subscription and returns it
 *
 */
export const createNotificationSubscription = async () => {
  //wait for service worker installation to be ready, and then
  return await navigator.serviceWorker.ready
    .then(serviceWorker => {
      // subscribe and return the subscription
      return serviceWorker.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(pushServerPublicKey)
        })
        .then(subscription => {
          return subscription;
        });
    })
    .catch(error =>
      console.warn("error during notification subscription: ", error)
    );
};

/**
 * Calls the remote server to register this client to the notification api.
 * Gets its key from the server.
 */
export const registerClientToPushServer = async subscription => {
  return await fetch(
    `https://test.watermelon-solutions.de/api/push-service/subscribe`,
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "sec-fetch-mode": "cors"
      },
      body: JSON.stringify(subscription),
      method: "POST",
      mode: "cors"
    }
  )
    .then(response => response.json())
    .then(result => result.id);
};

export const sendPushMessageViaServer = payload => {
  fetch(`https://test.watermelon-solutions.de/api/push-service/send`, {
    headers: {
      "Content-Type": "application/json",
      mode: "cors"
    },
    body: JSON.stringify(payload),
    method: "POST",
    mode: "cors"
  }).catch(error => console.log("Error during push message sending: ", error));
};
