<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
    isOpen: Boolean,
})

const emit = defineEmits(['modal-close'])

const frame = ref(null)
onClickOutside(frame, () => emit('modal-close'))
</script>

<template>
    <div
        v-if="props.isOpen"
        class="fixed z-50 top-0 left-0 w-full h-full bg-opacity-50 bg-black"
    >
        <div ref="frame" class="w-80 mx-auto my-52 bg-white rounded-lg">
            <div class="flex flex-row justify-between items-center">
                <slot name="header"> default header </slot>
                <button class="text-end p-3" @click.stop="emit('modal-close')">
                    <font-awesome-icon
                        icon="fa-regular fa-circle-xmark"
                        class="text-emerald-500 size-6"
                    />
                </button>
            </div>
            <div class="p-4">
                <div></div>
                <div>
                    <slot name="content"> default content </slot>
                </div>
                <div>
                    <slot name="footer"> </slot>
                </div>
            </div>
        </div>
    </div>
</template>
