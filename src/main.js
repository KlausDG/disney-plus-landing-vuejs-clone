import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const files = require.context('./', true, /\.vue$/i);
files.keys().map((key) => Vue.component(
  key
    .split('/')
    .pop()
    .split('.')[0],
  files(key).default,
));

Vue.filter('priceNumber', (valor) => {
  const newValor = Number(valor);
  if (!Number.isNaN(newValor)) {
    return newValor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return '';
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
