<template>
  <div>
    <div v-for="(agent,idx) in availableAgents" :key="idx">
      <h2>{{agent.name}}</h2>
      <router-link :to="{
        name: 'AgentDetail',
        params: {
          agentId: agent._id
        }}">
      <button @click="selectAgentDetail()">Detail</button>
      </router-link>
      <router-link :to="{
        name: 'Customers',
        params: {
          agentId: agent._id
        }}">
      <button @click="selectCustomers()">Customer(s)</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getAgents();
  },
  name: 'Agents',
  computed: {
    availableAgents() {
      return this.$store.state.agents.agents;
    }
  },
  methods: {
    ...mapActions('agents',['getAgents']),
    selectAgentDetail() {

    },
    selectCustomers() {

    }
  }
};
</script>
