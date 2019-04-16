import axios from 'axios';

export default {
  namespaced: true,
  state: {
    agents: null,
  },
  mutations: {
    getAgents(state, agents) {
      state.agents = agents;
    },
    addAgent(state, newAgent) {
      state.agents.push(newAgent);
    },
  },
  actions: {
    getAgents({ commit }) {
      axios.get('/api/agents')
        .then(result => commit('getAgents', result.data))
        .catch(console.error);
    },
    addAgent({ commit }, newAgent) {
      return axios.post('/api/agents', newAgent)
        .then(() => commit('addAgent', newAgent));
    },
    updateAgent({ commit }, updatedAgent) {
      // eslint-disable-next-line no-underscore-dangle
      return axios.put(`/api/agents/${updatedAgent._id}`, updatedAgent)
        .then(() => commit('updateAgent', updatedAgent));
    },
  },
  getters: {
  },
};
