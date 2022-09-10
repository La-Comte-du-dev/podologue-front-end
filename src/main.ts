import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import router from "./router/routes";

createApp(App).use(router, PrimeVue).mount("#app");
