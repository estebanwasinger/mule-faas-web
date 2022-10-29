<script setup lang="ts">
import type FaasClient from '@/client/FaaSClient';


const props = defineProps<{
    name: String,
    status: Boolean
    url?: String
    client : FaasClient
}>()

function start() {
    props.client.start(props.name)
}

function stop() {
    props.client.stop(props.name)
}

function remove() {
    props.client.remove(props.name)
}

function getBaseUrl() {
    return `${props.client.getBaseUrl()}/${props.name}`
}

</script>

<template>
    <div class="app-info">

        <div class="left-c">
            <h2>{{name}}</h2>
            <p>Base URL: <a :href=getBaseUrl()>{{getBaseUrl()}}</a></p> 
        </div>
        <div class="right-c">
            <!-- <b-button v-if="!status" variant="success" class="child-right" @click="start">Start</b-button> -->
            <!-- <b-button v-else variant="danger" class="child-right" @click="stop">Stop</b-button> -->
            <b-button variant="danger" class="child-right" @click="remove">Remove</b-button>
        </div>
    </div>
</template>

<style scoped>
.app-info {
    align-content: center;
    width: 90%;
    margin: 0 auto;
    display: flex;
}

.left-c {
    /* background-color: lightblue; */
    min-width: 400px;
    float: left;
}

.right-cd {
    outline: dashed 1px black;
    background-color: red;
    flex-grow: 100;
    align-items: center;
    justify-content: center;
}

.child-right {
    width: 100 px;
    /* Center vertically */
    /* position: absolute; */
    top: 45%;
    transform: translate(0, -50%);
    margin: 0 auto;
}



h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (max-width: 600px) {
    .app-info {
        width: 100%;
    }
}
</style>

