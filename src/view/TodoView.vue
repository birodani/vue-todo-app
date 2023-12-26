<script setup>
import { reactive } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import TodoEmptyState from '../components/TodoEmptyState.vue'
import TodoList from '../components/TodoList.vue'

let state = reactive({
    todos: [
        {
            id: 1,
            priority: 'HIGH',
            dueDate: '',
            description: 'Do home work',
            status: 'ACTIVE',
            note: '',
        },
        {
            id: 2,
            priority: 'MEDIUM',
            dueDate: '',
            description: 'Buy food',
            status: 'ACTIVE',
            note: '',
        },
        {
            id: 3,
            priority: 'LOW',
            dueDate: '',
            description: 'Watch TV',
            status: 'DONE',
            note: 'good',
        },
    ],
})

function onItemClick(event) {
    let eventTodo = state.todos.find((todo) => todo.id === event.id)
    state.todos = [
        ...state.todos.filter((todo) => todo.id !== event.id),
        {
            ...eventTodo,
            status: eventTodo.status === 'ACTIVE' ? 'DONE' : 'ACTIVE',
        },
    ]
}

function onDeleteItemClick(event) {
    state.todos = state.todos.filter((todo) => todo.id !== event.id)
}
</script>
<template>
    <div class="container flex flex-col align-middle items-center">
        <AppHeader />
        <main class="flex flex-col md:w-3/4">
            <TodoEmptyState v-if="state.todos.length === 0" />
            <TodoList
                v-else-if="state.todos.length !== 0"
                :todos="state.todos"
                @on-item-click="onItemClick"
                @on-delete-item-click="onDeleteItemClick"
            />
        </main>
        <footer></footer>
    </div>
</template>
