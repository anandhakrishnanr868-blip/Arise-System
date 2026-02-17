/* Firebase Messaging Service Worker */

/* Import Firebase scripts (COMPAT versions ONLY for service worker) */
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

/* Firebase config */
firebase.initializeApp({
  apiKey:"AIzaSyB5DS7HM1yLFGwYAFLt8OkqdYKm0RwQlMw",
authDomain:"arise-system-19b38.firebaseapp.com",
projectId:"arise-system-19b38",
storageBucket:"arise-system-19b38.firebasestorage.app",
messagingSenderId:"782859526063",
appId:"1:782859526063:web:e6d9f9a282b676eaac995a"
});

/* Messaging instance */
const messaging = firebase.messaging();

/* Background notifications */
messaging.onBackgroundMessage(function(payload) {
  console.log("Background message received:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png",
    vibrate: [200,100,200]
  });
});

/* Click notification */
self.addEventListener("notificationclick", function(event){
  event.notification.close();

  event.waitUntil(
    clients.openWindow("/")
  );
});
