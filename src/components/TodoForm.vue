<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, helpers } from '@vuelidate/validators'
import { startOfToday } from 'date-fns'
import { minDateValidator } from '../util/min-date-validator'

const emit = defineEmits(['onSubmitForm'])

const form = reactive({
    priority: undefined,
    description: undefined,
    dueDate: undefined,
})

const rules = {
    priority: { required, $autoDirty: true },
    description: { required, maxLength: maxLength(10), $autoDirty: true },
    dueDate: {
        required,
        minValue: helpers.withMessage(
            'Past days not available',
            minDateValidator(startOfToday())
        ),
        $autoDirty: true,
    },
}

const v$ = useVuelidate(rules, form)

const onSubmit = () => {
    v$.value.$validate()
    if (v$.value.$invalid) return
    const { priority, description } = form
    emit('onSubmitForm', { priority, description })
}
</script>

<template>
    <form class="max-w-sm mx-auto" @submit.prevent="onSubmit">
        <div class="mb-5">
            <label for="priority" class="block">Priority</label>
            <select
                id="priority"
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
            <label for="descritpion">Description</label>
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
        <div class="mb-5">
            <label for="due-date">Due date</label>
            <input
                id="due-date"
                v-model="form.dueDate"
                type="date"
                class="border rounded-lg w-full p-1 text-sm"
            />
            <div v-for="error of v$.dueDate.$errors" :key="error.$uid">
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
