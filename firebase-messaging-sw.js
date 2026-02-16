// Import Firebase scripts for messaging
importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging.js');

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5DS7HM1yLFGwYAFLt8OkqdYKm0RwQlMw",
  authDomain: "arise-system-19b38.firebaseapp.com",
  projectId: "arise-system-19b38",
  storageBucket: "arise-system-19b38.firebasestorage.app",
  messagingSenderId: "782859526063",
  appId: "1:782859526063:web:e6d9f9a282b676eaac995a",
  measurementId: "G-8H9D0FJSBG"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'ARISE SYSTEM';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new quest or reminder!',
    icon: payload.notification?.icon || '/icon.png',
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});