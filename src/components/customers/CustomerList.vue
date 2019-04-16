<template>
  <div class="top-row">
    <router-link :to="`/agents/${agentId}/newCustomer`">
      <button @click="selectcustomerDetail()">Add</button>
      </router-link>
    <div class="border-box" v-for="(customer,idx) in availableCustomers" :key="idx">
      <h2>{{customer.firstName + customer.lastName}}</h2>
      <router-link :to="{
        name: 'CustomerDetail',
        params: {
          customerId: customer._id
        }}">
      <button @click="selectcustomerDetail()">Detail</button>
      </router-link>
      <router-link :to="{
        name: 'UpdateCustomer',
        params: {
          customerId: customer._id
        }}">
      <button @click="selectcustomerDetail()">Update</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';


export default {
  created() {
    this.getCustomersByAgentId(this.agentId);
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
      return this.$store.state.customers.customers;
    },
    agentIdProp() {
      return this.agentId;
    }
  },
  methods: {
    ...mapActions('customers',['getCustomersByAgentId']),
    selectcustomerDetail() {
    }
  }
};
</script>
