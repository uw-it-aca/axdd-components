import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import AxddComponents from "./components/";
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

// custom axdd bootstrap css
import "../public/custom.scss";

// Import all of Bootstrap's JS
import "bootstrap";

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
