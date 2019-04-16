<template>
  <div>
    <div>First Name: {{customer.name.first}}</div>
    <div>Last Name: {{customer.name.last}}</div>
    <div>Age: {{customer.age}}</div>
    <div>Active: {{customer.isActive}}</div>
    <div>Balance: {{customer.isAgentValid}}</div>
    <div>eyeColor: {{customer.eyeColor}}</div>
    <div>Company: {{customer.company}}</div>
    <div>Email: {{customer.email}}</div>
    <div>Phone: {{customer.phone}}</div>
    <div>Address: {{customer.address}}</div>
    <div>Registered Date: {{customer.registered}}</div>
    <div>Latitude: {{customer.latitude}}</div>
    <div>Longitude: {{customer.longitude}}</div>
    <div>Tag(s): {{customer.tags.ToString()}}</div>
  </div>
</template>
<script>
import getCustomersMixin from './get-customers-mixin';

export default {
  name: 'customerDetail',
  mixins: [getCustomersMixin],
  props: {
    customerId: { type: [Number, String],
      validator(value) {
          return Number.isInteger(Number(value));
      }, 
    },
  },
  computed: {
    customer() {
      const { customerId } = this;
      return this.customers.customers.find(age => age._id === +customerId);
    },
  },
};
</script>
