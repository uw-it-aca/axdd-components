import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import AxddComponents from "../dist/axdd-components";
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap js
import "bootstrap";

// custom axdd bootstrap
import "../src/assets/css/custom.scss";

// import axdd-component styles along with library
import "../dist/style.css";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// axdd-components
app.use(AxddComponents);

app.use(router);
app.mount("#app");
