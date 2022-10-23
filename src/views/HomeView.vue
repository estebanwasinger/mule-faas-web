<script setup lang="ts">
import {onMounted, ref} from 'vue'
import FaasClient from '@/client/FaaSClient';
import AppInfoView from './AppInfoView.vue'
import type { AppDescription } from '@/client/AppDescription';

const items = ref<AppDescription[]>([])

const client = new FaasClient();

function getApps() : void {
  
  client.listApps().then((result) => {
    return items.value = result.data;
  });
}

onMounted(() => getApps())

var intervalId = setInterval(function () {
  getApps()
}, 10000);

</script>

<template>
  <h1>Apps</h1>
  <b-button href="/deploy">Deploy app</b-button>
  <div class="container">
    <p v-if="items.length == 0">No apps</p>
    <AppInfoView v-for="app in items" :name="app.name" :status="app.running" :client="client" />

  </div>
</template>
