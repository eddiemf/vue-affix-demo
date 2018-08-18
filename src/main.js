import Vue from 'vue';
import Scrollactive from 'vue-scrollactive';
import Affix from 'vue-affix';

Vue.use(Affix);
Vue.use(Scrollactive);

const app = new Vue({
  el: '#app',
});

export default app;
