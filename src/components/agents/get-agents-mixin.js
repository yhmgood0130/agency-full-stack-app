export default {
  created() {
    this.$store.dispatch('agents/getAgents');
  },
  computed: {
    agents() {
      return this.$store.state.agents || [];
    },
  },
};
