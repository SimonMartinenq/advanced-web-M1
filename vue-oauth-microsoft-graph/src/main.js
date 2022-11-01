import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faHouse, faUser ,faCircleNotch} from '@fortawesome/free-solid-svg-icons'


library.add(faHouse, faUser,faCircleNotch);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app")