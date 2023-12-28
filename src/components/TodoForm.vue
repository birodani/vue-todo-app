<script setup>
import { reactive } from 'vue'

const emits = defineEmits(['onSubmitForm'])

const onSubmit = () => {
    const { priority, description } = form
    emits('onSubmitForm', { priority, description })
}
const form = reactive({ priority: undefined, description: undefined })
</script>
<template>
    <form class="max-w-sm mx-auto" @submit.prevent="onSubmit">
        <div class="mb-5">
            <label for="priotity" class="block">Priotity</label>
            <select
                id="priotity"
                v-model="form.priority"
                class="appearance-none border rounded-lg w-full p-1 text-sm"
            >
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
            </select>
        </div>
        <div class="mb-5">
            <label for="description">Description</label>
            <input
                id="descritpion"
                v-model="form.description"
                type="text"
                class="border rounded-lg w-full p-1 text-sm"
            />
        </div>
        <div class="text-right">
            <button
                class="bg-emerald-500 text-white font-poppins rounded-lg p-2"
            >
                Create
            </button>
        </div>
    </form>
</template>
