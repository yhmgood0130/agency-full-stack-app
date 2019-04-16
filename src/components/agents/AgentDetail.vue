<template>
  <div class="content">
    <div class="top-row">
      <div>Name: {{agent.name}}</div>
      <div>Address: {{agent.address}}</div>
      <div>City: {{agent.city}}</div>
      <div>State: {{agent.state}}</div>
      <div>Zip Code: {{agent.zipCode}}</div>
      <div>Tier: {{agent.tier}}</div>
      <div>Phone</div>
      <div>Primary: {{agent.primary}}</div>
      <div>Mobile: {{agent.mobile}}</div>
    </div>
  </div>
</template>
<script>
import getAgentsMixin from './get-agents-mixin';

export default {
  name: 'AgentDetail',
  mixins: [getAgentsMixin],
  props: {
    agentId: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    agent() {
      const { agentId } = this;
      // eslint-disable-next-line no-underscore-dangle
      return this.agents.agents.find(agent => agent._id === +agentId);
    },
  },
};
</script>
