<template>
  <div class="content">
    <div class="top-row">
      <router-link :to="{
          name: 'NewAgent'}">
        <button @click="selectCustomers()">Add</button>
        </router-link>
      <div class="border-box" v-for="(agent,idx) in availableAgents" :key="idx">
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
        <router-link :to="{
          name: 'UpdateAgent',
          params: {
            agentId: agent._id
          }}">
        <button @click="selectAgentUpdate()">Update</button>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
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

    },selectAgentUpdate() {

    }
  }
};
</script>

<style>
.content {
  position: relative;
}
.top-row {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
button {
  margin: 1rem;
  width: 140px;

}
.border-box {
  border: 3px solid #aaa;
}
</style>
