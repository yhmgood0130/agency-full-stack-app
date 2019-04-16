import Vue from 'vue';
import Vuex from 'vuex';

import agentsModule from './modules/agents';
import customersModule from './modules/customers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    agents: agentsModule,
    customers: customersModule,
  },
});
