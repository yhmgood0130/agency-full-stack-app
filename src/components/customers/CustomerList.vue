<template>
  <div>
    <div v-for="(customer,idx) in availableCustomers" :key="idx">
      <h2>{{customer.name.first + customer.name.last}}</h2>
      <router-link :to="{
        name: 'CustomerDetail',
        params: {
          customerId: customer._id
        }}">
      <button @click="selectcustomerDetail()">Detail</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getCustomers(this.agentId);
  },
  name: 'Customers',
  props: {
    agentId: { type: [Number, String],
      validator(value) {
          return Number.isInteger(Number(value));
      }, 
    },
  },
  computed: {
    availableCustomers() {
      const { agentId } = this;
      return this.$store.state.customers.customers;
    }
  },
  methods: {
    ...mapActions('customers',['getCustomers']),
    selectCustomerDetail() {

    }
  }
};
</script>
