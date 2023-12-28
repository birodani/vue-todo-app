<script setup>
import { reactive, ref } from 'vue'
import { findMaxId } from '../util/find-max-id'
import AppHeader from '../components/AppHeader.vue'
import TodoEmptyState from '../components/TodoEmptyState.vue'
import TodoList from '../components/TodoList.vue'
import TodoForm from '../components/TodoForm.vue'
import AppModalComponent from '../components/AppModal.vue'
import { testTodos } from '../test-data/test-todo'

let state = reactive({
    todos: testTodos,
})

const isModalOpened = ref(false)

function onCloseModal() {
    isModalOpened.value = false
}

function onAddNewItemClick() {
    isModalOpened.value = true
}

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

function onSubmitForm(event) {
    const { priority, description } = event
    const maxId = findMaxId(state.todos) ?? 0
    let id = maxId + 1
    state.todos.push({ id, priority, description, status: 'ACTIVE' })
    onCloseModal()
}
</script>
<template>
    <AppModalComponent
        :is-open="isModalOpened"
        name="first-modal"
        @modal-close="onCloseModal()"
    >
        <template #header>
            <h1 class="pl-4">Add new todo</h1>
        </template>
        <template #content>
            <TodoForm @on-submit-form="onSubmitForm" />
        </template>
        <template #footer> </template>
    </AppModalComponent>
    <div class="container flex flex-col align-middle items-center">
        <AppHeader @on-add-new-item="onAddNewItemClick()" />
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
