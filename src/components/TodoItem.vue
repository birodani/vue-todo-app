<script setup>
defineProps(['todo'])
const emits = defineEmits(['onItemClick', 'onDeleteItemClick'])
</script>

<template>
    <li class="flex flex-row items-center rounded-lg mb-4 shadow-md">
        <button
            class="appearance-none font-poppins bg-slate-100 w-full pr-4 flex flex-row items-center"
            aria-label="toggle todo status"
            @click="emits('onItemClick', { id: todo.id })"
        >
            <span
                class="w-4 py-6 rounded-l-lg"
                :class="{
                    'bg-rose-600': todo.priority === 'HIGH',
                    'bg-orange-600': todo.priority === 'MEDIUM',
                    'bg-amber-400': todo.priority === 'LOW',
                }"
            >
            </span>
            <p class="pl-4" :class="{ 'line-through': todo.status === 'DONE' }">
                {{ todo.description }}
            </p>
        </button>
        <button
            class="appearance-none p-3 bg-slate-100 rounded-r-lg"
            aria-label="delete todo"
            @click="emits('onDeleteItemClick', { id: todo.id })"
        >
            <font-awesome-icon
                class="pr-2 text-red-300"
                icon="fa-solid fa-trash-can"
            />
        </button>
    </li>
</template>
