import { createApp } from "vue";
import { createPinpa } from "pinpa";
import App from "./app.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  const pinpa = createPinpa();
  app.use(pinpa);
  app.moumt("#app");
});
