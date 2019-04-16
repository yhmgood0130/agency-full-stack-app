import axios from 'axios';

export default {
  namespaced: true,
  state: {
    customers: [],
  },
  mutations: {
    getCustomerList(state, customers) {
      state.customers = customers;
    },
  },
  actions: {
    getCustomers({ commit }) {
      axios.get('/api/customers')
        .then(result => commit('getCustomerList', result.data))
        .catch(console.error);
    },
  },
  getters: {
  },
};
