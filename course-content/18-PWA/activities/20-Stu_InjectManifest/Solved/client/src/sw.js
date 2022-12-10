import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Import the expiration plugin
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);

const cacheName = 'static-resources';
// The destination read-only property of the Request interface returns a string describing the type of content being requested.
// https://developer.mozilla.org/en-US/docs/Web/API/Request/destination
const matchCallback = ({ request }) => {
  console.log(request);
  return (
    // CSS
    request.destination === 'style' ||
    // JavaScript
    request.destination === 'script'
  );
};

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Register route for caching images
// The cache first strategy is often the best choice for images because it saves bandwidth and improves performance.
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'my-image-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


// const matchCb = ({url, request, event}) => {
//   return url.pathname === '/www.omdbapi.com/';
// };


// registerRoute(
//   matchCb,
//   new CacheFirst({
//     cacheName: 'my-json-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );


