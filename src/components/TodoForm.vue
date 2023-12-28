<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'

const emits = defineEmits(['onSubmitForm'])

const form = reactive({ priority: undefined, description: undefined })
const rules = {
    priority: { required, $autoDirty: true },
    description: { required, maxLength: maxLength(3), $autoDirty: true },
}

const v$ = useVuelidate(rules, form)

const onSubmit = () => {
    v$.value.$validate()
    console.log(v$)
    if (v$.value.$invalid) return
    const { priority, description } = form
    emits('onSubmitForm', { priority, description })
}
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
            <div v-for="error of v$.priority.$errors" :key="error.$uid">
                <div class="text-xs text-red-600">{{ error.$message }}</div>
            </div>
        </div>
        <div class="mb-5">
            <label for="description">Description</label>
            <input
                id="descritpion"
                v-model="form.description"
                type="text"
                class="border rounded-lg w-full p-1 text-sm"
            />
            <div v-for="error of v$.description.$errors" :key="error.$uid">
                <div class="text-xs text-red-600">{{ error.$message }}</div>
            </div>
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
