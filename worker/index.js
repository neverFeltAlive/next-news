self.__WB_DISABLE_DEV_LOGS = true;

self.addEventListener('message', async (event) => {
  console.log(event);
  // if (event.data && event.data.action === 'CACHE_NEW_ROUTE') {
  //   caches.open('others').then((cache) =>
  //     cache.match(event.source.url).then((res) => {
  //       if (res === undefined) {
  //         return cache.add(event.source.url);
  //       }
  //     })
  //   );
  // }
});

self.addEventListener('fetch', (event) => {
  console.log(event);
});
