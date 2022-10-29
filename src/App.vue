<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppInfoView from './views/AppInfoView.vue'
</script>

<template>
  <h1><a href="/">Mule FaaS</a></h1>
  <RouterView />

</template>

<style scoped>
.app-info {
  border: 2px;
  border-color: black;
  border-style: dashed;
}

.container {
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

h1 a {color:black;}

/* @media (prefers-color-scheme: dark) {
  h1 a {color:grey;}
} */
</style>
