# agency-full-stack-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Introduction

This web application gives you the option to explore a list of agents and each agents has a list of their own customers. The user can view, add, and edit the agent, which is self-explanatory, and for customers, the user can view, add, edit and also delete the customer. Delete option for customer is inside the customer detail page.

### Questions

- When the customer is being removed from the list, should there be archivedOn column to track the effective inactive date?

- If so, should we create an archived page to see a list of inactive customers?

- Should we restrict the access between agents that agents can only see a list of customer that they are directly working with?

- I found that there was duplicated IDs in customer.json in which ID was duplicated ID :9848. [Fixed this issue]

- I noticed that the balance, latitude, and longitude were string, will it be temporary or permanent solution?