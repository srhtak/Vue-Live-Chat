import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/style/index.css";
import "aos/dist/aos.css";
import { projectAuth } from "./firebase/config";

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
