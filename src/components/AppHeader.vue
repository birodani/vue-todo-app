<script setup>
import { onClickOutside } from '@vueuse/core'
import { format } from 'date-fns'
import { ref } from 'vue'
const menu = ref(null)
const dropDownMenu = ref(null)
const toDay = new Date()
const emits = defineEmits(['onAddNewItem'])
const showMenu = ref(false)
onClickOutside(dropDownMenu, () => (showMenu.value = false))
</script>
<template>
    <header
        class="font-poppins bg-emerald-500 text-white rounded-b-lg shadow-xl px-4 py-6 mb-4 h-24 w-5/6 xl:w-3/4 flex flex-row justify-between overflow-visible"
    >
        <div ref="dropDownMenu" class="relative w-5">
            <input
                id="menu"
                ref="menu"
                v-model="showMenu"
                type="checkbox"
                class="hidden"
            />
            <label for="menu">
                <font-awesome-icon
                    v-if="!showMenu"
                    icon="fa-solid fa-bars"
                    class="text-white pr-4 h-10 text-2xl animate-dropdownMenu"
                />
                <font-awesome-icon
                    v-if="showMenu"
                    icon="fa-solid fa-x"
                    class="text-white pr-4 h-10 text-2xl animate-dropdownMenu"
                />
            </label>

            <div
                v-if="showMenu"
                class="bg-white min-w-48 z-30 p-4 right-0 rounded-2xl shadow-xl border-2 animate-dropdownMenu"
            >
                <p class="text-center w-full mb-2 text-emerald-500">Filters</p>
                <p class="text-emerald-500 font-poppins mb-2">Priority</p>
                <ul class="text-center ms-6">
                    <li class="mb-3">
                        <input
                            id="high"
                            type="checkbox"
                            name="high"
                            value="HIGH"
                            class="hidden peer"
                        />
                        <label
                            for="high"
                            class="border-2 rounded-xl p-1 bg-rose-200 peer-checked:border-rose-600 peer-checked:text-rose-600"
                        >
                            <p class="inline-block w-32 text-center">High</p>
                        </label>
                    </li>
                    <li class="mb-3">
                        <input
                            id="medium"
                            type="checkbox"
                            name="medium"
                            value="MEDIUM"
                            class="hidden peer"
                        />
                        <label
                            for="medium"
                            class="border-2 rounded-xl p-1 bg-orange-200 peer-checked:border-orange-600 peer-checked:text-orange-600"
                        >
                            <p class="inline-block w-32 text-center">Medium</p>
                        </label>
                    </li>
                    <li class="mb-3">
                        <input
                            id="low"
                            type="checkbox"
                            name="low"
                            value="LOW"
                            class="hidden peer"
                        />
                        <label
                            for="low"
                            class="border-2 rounded-xl p-1 bg-amber-100 peer-checked:border-amber-400 peer-checked:text-amber-400"
                        >
                            <p class="inline-block w-32 text-center">Low</p>
                        </label>
                    </li>
                </ul>
                <p class="text-emerald-500 font-poppins mb-2">Expiring</p>
                <ul class="text-center ms-6">
                    <li class="mb-3">
                        <input
                            id="today"
                            type="checkbox"
                            name="today"
                            value="TODAY"
                            class="hidden peer"
                        />
                        <label
                            for="today"
                            class="border-2 rounded-xl p-1 bg-stone-300 peer-checked:border-stone-800 peer-checked:text-stone-800"
                        >
                            <p class="inline-block w-32 text-center">Today</p>
                        </label>
                    </li>
                    <li class="mb-3">
                        <input
                            id="tomorrow"
                            type="checkbox"
                            name="tomorrow"
                            value="TOMORROW"
                            class="hidden peer"
                        />
                        <label
                            for="tomorrow"
                            class="border-2 rounded-xl p-1 bg-stone-300 peer-checked:border-stone-800 peer-checked:text-stone-800"
                        >
                            <p class="inline-block w-32 text-center">
                                Tomorrow
                            </p>
                        </label>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h1>Dailly tasks</h1>
            <p class="text-xs">{{ format(toDay, 'eeee, yyyy. MMM. dd') }}</p>
        </div>
        <button @click="emits('onAddNewItem')">
            <font-awesome-icon
                icon="fa-solid fa-plus"
                class="text-white pl-4 h-10 text-2xl"
            />
        </button>
    </header>
</template>
