const workboxBuild = require("workbox-build");

const buildSW = () => {
  return workboxBuild.generateSW({
    swDest: "build/sw.js",
    clientsClaim: true,
    skipWaiting: true,
    globDirectory: "build",
    globIgnores: ["**/service-worker.js", "**precache-manifest**"],
    globPatterns: ["**/*{js,css,html,json}"],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 10
          }
        }
      }
    ]
  });
};

buildSW();
