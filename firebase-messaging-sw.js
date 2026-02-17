importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey:"AIzaSyB5DS7HM1yLFGwYAFLt8OkqdYKm0RwQlMw",
authDomain:"arise-system-19b38.firebaseapp.com",
projectId:"arise-system-19b38",
storageBucket:"arise-system-19b38.firebasestorage.app",
messagingSenderId:"782859526063",
appId:"1:782859526063:web:e6d9f9a282b676eaac995a"
});

const messaging=firebase.messaging();

messaging.onBackgroundMessage(payload=>{
self.registration.showNotification(
payload.notification.title,
{body:payload.notification.body}
);
});
