<script setup>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { compareFn } from '../util/sort-by-id'

const props = defineProps(['todos'])
const emits = defineEmits(['onItemClick', 'onDeleteItemClick'])

const sortedTodos = computed(() => {
    return [...props.todos].sort(compareFn)
})
</script>
<template>
    <ul>
        <TodoItem
            v-for="todo in sortedTodos"
            :key="todo.id"
            :todo="todo"
            @on-item-click="emits('onItemClick', $event)"
            @on-delete-item-click="emits('onDeleteItemClick', $event)"
        />
    </ul>
</template>
