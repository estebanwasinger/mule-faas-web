<script setup lang="ts">

const props = defineProps<{
    name: string,
    status: string
    url?: string
}>()

</script>

<template>

    <div class="app-info">
        <div class="left-c">
            <h2>{{name}}</h2>
            <p>Status: running</p>
        </div>
        <div class="right-c">
            <button class="child-right">Start</button>
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
    background-color: lightblue;
    min-width: 300px;
    float: left;
}

.right-c {
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

@media (max-width: 500px) {
    .app-info {
        width: 100%;
    }
}
</style>

