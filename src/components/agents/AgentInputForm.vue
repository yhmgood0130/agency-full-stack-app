
<template>
  <div class="container">
    <form ref="form" @submit.prevent="submit">
      <label for="Name">Name</label>
      <div class="control">
        <input type="text" v-model="agentInfo.name">
      </div>
      <label for="Address">Address</label>
      <div class="control">
        <input type="text" v-model="agentInfo.address">
      </div>
      <label for="City">City</label>
      <div class="control">
        <input type="text" v-model="agentInfo.city">
      </div>
      <label for="State">State</label>
      <div class="control">
        <input type="text" v-model="agentInfo.state">
      </div>
      <label for="Zip Code">Zip Code</label>
      <div class="control">
        <input type="text" v-model="agentInfo.zipCode">
      </div>
      <label for="Tier">Tier</label>
      <div class="control">
        <input type="text" v-model="agentInfo.tier">
      </div>
      <label for="Primary">Primary</label>
      <div class="control">
        <input type="text" v-model="agentInfo.primary">
      </div>
      <label for="Mobile">Mobile</label>
      <div class="control">
        <input type="text" v-model="agentInfo.mobile">
      </div>
      <button class="submitButton" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import getAgentsMixin from './get-agents-mixin';

export default {
  name: 'AgentInputForm',
  mixins: [getAgentsMixin],
  props: {
    agentId: { type: [String, Number] },
  },
  computed: {
    agentInfo() {
      const { agentId } = this;

      if (agentId) {
        // eslint-disable-next-line no-underscore-dangle
        return this.agents.agents.find(agent => agent._id === +agentId);
      }
      return {
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        tier: '',
        primary: '',
        mobile: '',
      };
    },
  },
  methods: {
    ...mapActions('agents', ['addAgent', 'updateAgent']),
    submit() {
      const { agentId } = this;
      const formData = this.agentInfo;
      if (agentId) {
        this.updateAgent(formData);
        this.$router.push('/agents');
      } else {
        this.addAgent(formData);
        this.$router.push('/agents');
      }
    },
  },
};
</script>
<style>
</style>
