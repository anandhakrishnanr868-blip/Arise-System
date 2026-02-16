// firebase-messaging-sw.js

// Use the compat (UMD) versions for Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase in the Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyB5DS7HM1yLFGwYAFLt8OkqdYKm0RwQlMw",
  authDomain: "arise-system-19b38.firebaseapp.com",
  projectId: "arise-system-19b38",
  storageBucket: "arise-system-19b38.firebasestorage.app",
  messagingSenderId: "782859526063",
  appId: "1:782859526063:web:e6d9f9a282b676eaac995a",
  measurementId: "G-8H9D0FJSBG"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);

  const notificationTitle = payload.notification?.title || "ARISE SYSTEM";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new quest or reminder!",
    icon: payload.notification?.icon || '/icon.png',
    vibrate: [200, 100, 200],
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
