<template>
  <div class="top-row">
    <button @click="selectDeleteCustomer()">Delete</button>
    <div>First Name: {{customer.firstName}}</div>
    <div>Last Name: {{customer.lastName}}</div>
    <div>Age: {{customer.age}}</div>
    <div>Active: {{customer.isActive}}</div>
    <div>Balance: {{customer.balance}}</div>
    <div>eyeColor: {{customer.eyeColor}}</div>
    <div>Company: {{customer.company}}</div>
    <div>Email: {{customer.email}}</div>
    <div>Phone: {{customer.phone}}</div>
    <div>Address: {{customer.address}}</div>
    <div>Registered Date: {{customer.registered}}</div>
    <div>Latitude: {{customer.latitude}}</div>
    <div>Longitude: {{customer.longitude}}</div>
    <div>Tag(s): {{customer.tags}}</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getCustomerById(this.customerId);
  },
  name: 'customerDetail',
  props: {
    customerId: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    customer() {
      return this.$store.state.customers.customer;
    },
  },
  methods: {
    ...mapActions('customers', ['getCustomerById', 'deleteCustomer']),
    selectDeleteCustomer() {
      const { customerId } = this;
      this.deleteCustomer(customerId);
      this.$router.push('/agents');
    },
  },
};
</script>
