export default {
  created() {
    this.$store.dispatch('customers/getCustomers');
  },
  computed: {
    customers(agentId) {
      return this.$store.state.customers.find(customer => customer.agent_id === +agentId) || [];
    },
  },
};
