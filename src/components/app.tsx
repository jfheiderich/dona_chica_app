import React from "react";
import { getDevice } from "../js/framework7-custom.js";
import { f7, f7ready, App, View } from "framework7-react";
import cordovaApp from "../js/cordova-app.js";

import routes from "../js/routes.js";
import store from "../js/store.js";

const MyApp = () => {
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: "dona_chica", // App name
    theme: "auto", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova,
      scrollIntoViewCentered: device.cordova,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />
    </App>
  );
};
export default MyApp;
