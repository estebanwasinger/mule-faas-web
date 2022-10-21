<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import AppInfoView from './AppInfoView.vue'

import { ref, computed, reactive, nextTick } from 'vue'
import FaasClient from '@/client/FaaSClient';

const client = new FaasClient();

const form = reactive({
    urlName: '',
    name: '',
    appCode: '',
    food: null,
    checked: [],
})

const foods = [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
const show = ref(true)

const onSubmit = (event) => {
    event.preventDefault()
    client.addApp(form.name, form.urlName, form.appCode)
    window.location.href = "./"
}

const onClean = (event) => {
    if(form.appCode == '') {
        event.preventDefault()
    let appValue = event.clipboardData.getData('text')
    appValue = appValue.replace(/doc:id="(\d|\w|-)*"/gi, '')
    appValue = appValue.replace(/doc:name="(\d|\w|-)*"/gi, '')
    form.appCode = appValue
    }

}

const onReset = (event) => {
    event.preventDefault()
    // Reset our form values
    form.urlName = ''
    form.name = ''
    form.food = null
    form.checked = []
    // Trick to reset/clear native browser form validation state
    show.value = false
    nextTick(() => {
        show.value = true
    })
}
</script>

<template>
    <b-card>
        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Application Name" label-for="input-1"
                    >
                    <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Enter application name"
                        required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Url Name" label-for="input-1"
                    description="This name will be used for the URL">
                    <b-form-input id="input-1" v-model="form.urlName" type="text" placeholder="Enter application name"
                        required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" 
                label="Application Code" 
                label-for="input-2"
                    description="This name will be used for the URL">
                    <b-form-textarea @paste="onClean" id="textarea" v-model="form.appCode" placeholder="<mule>...." rows="3"
                        max-rows="6"></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary">Deploy</b-button>
                <!-- <b-button variant="danger" @click="onClean">Clean</b-button> -->

            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card> -->
        </div>
    </b-card>
</template>
  
