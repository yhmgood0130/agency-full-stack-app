
<template>
  <div class="top-row">
    <form ref="form" @submit.prevent="submit">
      <label for="First Name">First Name</label>
      <div class="control">
        <input type="text" v-model="customerInfo.firstName">
      </div>
      <label for="Last Name">Last Name</label>
      <div class="control">
        <input type="text" v-model="customerInfo.lastName">
      </div>
      <label for="Age">Age</label>
      <div class="control">
        <input type="number" v-model="customerInfo.age">
      </div>
      <label for="Active">Active</label>
      <div class="control">
        <input type="checkbox" id="checkbox" :checked="check" @click="check($event)" v-model="picked">
      </div>
      <label for="Balance">Balance</label>
      <div class="control">
        <input type="text" v-model="customerInfo.balance">
      </div>
      <label for="Eye Color">Eye Color</label>
      <div class="control">
        <input type="text" v-model="customerInfo.eyeColor">
      </div>
      <label for="Company">Company</label>
      <div class="control">
        <input type="text" v-model="customerInfo.company">
      </div>
      <label for="Email">Email</label>
      <div class="control">
        <input type="text" v-model="customerInfo.email">
      </div>
      <label for="Phone">Phone</label>
      <div class="control">
        <input type="text" v-model="customerInfo.phone">
      </div>
      <label for="Address">Address</label>
      <div class="control">
        <input type="text" v-model="customerInfo.address">
      </div>
      <label for="Registered">Registered</label>
      <div class="control">
        <input type="text" v-model="customerInfo.registered">
      </div>
      <label for="Latitude">Latitude</label>
      <div class="control">
        <input type="text" v-model="customerInfo.latitude">
      </div>
      <label for="Longitude">Longitude</label>
      <div class="control">
        <input type="text" v-model="customerInfo.longitude">
      </div>
      <label for="Tag">Tag</label>
      <div class="control">
        <input type="text" v-model="customerInfo.tags">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  created() {
    if (this.customerId) {
      this.$store.dispatch('customers/getCustomerById', { customerId: this.customerId });
    }
  },
  name: 'CustomerInputForm',
  data() {
    return {
      picked: true,
    };
  },
  props: {
    customerId: { type: [String, Number] },
    agentId: { type: [String, Number] },
  },
  computed: {
    customers() {
      return this.$store.state.customers || [];
    },
    customerInfo() {
      const { customerId } = this;

      if (customerId) {
        // eslint-disable-next-line no-underscore-dangle
        return this.customers.customers.find(customer => customer._id === +customerId);
      }
      return {
        firstName: '',
        lastName: '',
        agent_id: this.$route.params.agentId,
        age: null,
        isActive: false,
        balance: '',
        eyeColor: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        registered: '',
        latitude: '',
        longitude: '',
        tags: [],
      };
    },
  },
  methods: {
    ...mapActions('customers', ['addCustomer', 'updateCustomer']),
    check() {
      return true;
    },
    submit() {
      const { customerId, $data } = this;
      const formData = this.customerInfo;

      formData.age = +formData.age;
      formData.isActive = $data.picked;

      if (typeof formData.tags === 'string') {
        formData.tags = formData.tags.split(',');
      }
      if (customerId) {
        this.updateCustomer(formData);
        this.$router.push('/agents');
      } else {
        this.addCustomer(formData);
        this.$router.push('/agents');
      }
    },
  },
};
</script>
<style>
form {
  display: inline;
}
.inbox-box > input {
  width: 250px;
}
</style>
