<script setup>
import { format } from 'date-fns'
const toDay = new Date()
</script>
<template>
    <header
        class="font-poppins bg-emerald-500 text-white rounded-b-lg shadow-xl px-4 py-6 mb-4 md:w-3/4 flex flex-row"
    >
        <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-white pr-4 h-10 text-2xl"
        />
        <div>
            <h1>Dailly tasks</h1>
            <p class="text-xs">{{ format(toDay, 'eeee, yyyy. MMM. dd') }}</p>
        </div>
    </header>
</template>
