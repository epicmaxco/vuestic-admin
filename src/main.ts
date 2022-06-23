import { createApp } from "vue";
import stores from "./stores";
import router from "./router";
import i18n from "./i18n";
import { VuesticPlugin } from "vuestic-ui";
import vuesticGlobalConfig from "./services/vuestic-ui/global-config";
import App from "./App.vue";

const app = createApp(App);

app.use(stores);
app.use(router);
app.use(i18n);
app.use(VuesticPlugin, vuesticGlobalConfig);

app.mount("#app");
