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
    addNewAgent(state, newAgent) {
      state.agents.push(newAgent);
    },
  },
  actions: {
    getAgents({ commit }) {
      axios.get('/api/agents')
        .then(result => commit('getAgents', result.data))
        .catch(console.error);
    },
    addNewAgent({ commit }, newAgent) {
      return axios.post('/api/agent', newAgent)
        .then(() => commit('addNewAgent', newAgent));
    },
  },
  getters: {
  },
};
