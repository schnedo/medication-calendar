export default function register(): void {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/medication-calendar/sw.js");
  }
}
