self.addEventListener("install",e=>{
e.waitUntil(
caches.open("arise").then(c=>
c.addAll(["index.html","beep.mp3","icon.png"])
)
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
