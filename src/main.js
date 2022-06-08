import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/style/index.css";
import "aos/dist/aos.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { projectAuth } from "./firebase/config";

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(autoAnimatePlugin);
    app.mount("#app");
  }
});
