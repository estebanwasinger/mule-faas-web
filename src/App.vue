<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppInfoView from './views/AppInfoView.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
  <h1>Apps</h1>

  <div class="container">

    <AppInfoView name="App Name" status=false />
    <AppInfoView name="App Name" status=false />

  </div>

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
</style>
