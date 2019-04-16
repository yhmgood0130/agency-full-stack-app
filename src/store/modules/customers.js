import axios from 'axios';

export default {
  namespaced: true,
  state: {
    customer: [],
    customers: [],
  },
  mutations: {
    getCustomer(state, customer) {
      state.customer = customer;
    },
    getCustomerList(state, customers) {
      state.customers = customers;
    },
    addCustomer(state, newCustomer) {
      state.customers.push(newCustomer);
    },
    updateCustomer(state, updateCustomer) {
      state.customers = [...state.customers.filter(
        // eslint-disable-next-line no-underscore-dangle
        customer => customer._id !== +updateCustomer._id,
      ), updateCustomer];
    },
    deleteCustomer(state, customerId) {
      // eslint-disable-next-line no-underscore-dangle
      state.customers.filter(customer => customer._id !== +customerId);
    },
  },
  actions: {
    getCustomerById({ commit }, customerId) {
      console.log(customerId);
      axios.get(`/api/customers/${customerId}`)
        .then(result => commit('getCustomer', result.data[0]))
        .catch(console.error);
    },
    getCustomersByAgentId({ commit }, agentId) {
      axios.get(`/api/agents/${agentId}/customers`)
        .then(result => commit('getCustomerList', result.data))
        .catch(console.error);
    },
    addCustomer({ commit }, newCustomer) {
      return axios.post('/api/customers', newCustomer)
        .then(() => commit('addCustomer', newCustomer))
        .catch(`${console.error}HELLLOOOOO`);
    },
    updateCustomer({ commit }, updatedCustomer) {
      console.log(updatedCustomer);

      // eslint-disable-next-line no-underscore-dangle
      return axios.put(`/api/customers/${updatedCustomer._id}`, updatedCustomer)
        .then(() => commit('updateCustomer', updatedCustomer));
    },
    deleteCustomer({ commit }, customerId) {
      axios.delete(`/api/customers/${customerId}`)
        .then(result => commit('deleteCustomer', result.data))
        .catch(console.error);
    },
  },
  getters: {
  },
};
