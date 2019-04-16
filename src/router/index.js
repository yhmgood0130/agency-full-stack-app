import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import AgentList from '../components/agents/AgentList.vue';
import AgentDetail from '../components/agents/AgentDetail.vue';
import CustomerList from '../components/customers/CustomerList.vue';
import CustomerDetail from '../components/customers/CustomerDetail.vue';

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
    path: '/agents/:agentId/customers',
    name: 'Customers',
    component: CustomerList,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.agentId));
      next(isValid);
    },
  }, {
    path: '/agents/:agentId/customers/:customerId',
    name: 'Customer',
    component: CustomerDetail,
    props: true,
    beforeEnter(to, from, next) {
      const isAgentValid = Number.isInteger(Number(to.params.agentId));
      const isCustomerValid = Number.isInteger(Number(to.params.agentId));
      next(isAgentValid && isCustomerValid);
    },
  }],
});
