import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import AgentList from '../components/agents/AgentList.vue';
import AgentDetail from '../components/agents/AgentDetail.vue';
import AgentInputForm from '../components/agents/AgentInputForm.vue';
import CustomerList from '../components/customers/CustomerList.vue';
import CustomerDetail from '../components/customers/CustomerDetail.vue';
import CustomerInputForm from '../components/customers/CustomerInputForm.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/agents',
    name: 'Agents',
    component: AgentList,
    props: true,
  }, {
    path: '/agents/:agentId',
    name: 'AgentDetail',
    component: AgentDetail,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.agentId));
      next(isValid);
    },
  }, {
    path: '/agents/new',
    name: 'NewAgent',
    component: AgentInputForm,
  }, {
    path: '/agents/edit',
    name: 'UpdateAgent',
    component: AgentInputForm,
    props: true,
  }, {
    path: '/agents/:agentId/customers',
    name: 'Customers',
    component: CustomerList,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.agentId));
      next(isValid);
    },
  }, {
    path: '/customers/:customerId',
    name: 'CustomerDetail',
    component: CustomerDetail,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.customerId));
      next(isValid);
    },
  }, {
    path: '/agents/:agentId/newCustomer',
    name: 'NewCustomer',
    component: CustomerInputForm,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.agentId));
      next(isValid);
    },
  }, {
    path: '/customers/edit',
    name: 'UpdateCustomer',
    component: CustomerInputForm,
    props: true,
  }],
});
