import { Workbox } from "workbox-window";

export default function register(): void {
  if ("serviceWorker" in navigator) {
    // @ts-expect-error copied from https://github.com/shadowwalker/next-pwa/blob/master/register.js
    window.workbox = new Workbox("/medication-calendar/sw.js", {
      scope: "/medication-calendar/",
    });

    // @ts-expect-error copied from https://github.com/shadowwalker/next-pwa/blob/master/register.js
    window.workbox.addEventListener("activated", function (event) {
      if (!event.isUpdate) {
        caches.keys().then(function (c) {
          if (!c.includes("start-url")) {
            fetch("/medication-calendar/");
          }
        });
      }
    });

    // @ts-expect-error copied from https://github.com/shadowwalker/next-pwa/blob/master/register.js
    window.workbox.register();
  }
}
