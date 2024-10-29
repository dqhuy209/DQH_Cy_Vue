<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="todo-app">
    <h1>Todo List</h1>

    <div class="add-task">
      <input v-model="newTaskName" placeholder="Tên công việc" />
      <input v-model="newTaskTime" type="time" placeholder="Giờ làm" />
      <button @click="addTask">Thêm</button>
    </div>

    <h2>Chưa hoàn thành</h2>
    <ul>
      <li v-for="task in incompleteTasks" :key="task.id">
        <span v-if="!task.isEditing">{{ task.name }} - {{ task.time }}</span>
        <input v-else v-model="task.name" />
        <input v-if="task.isEditing" v-model="task.time" />
        <button @click="toggleComplete(task.id)" v-if="!task.isEditing">
          ✅
        </button>
        <button @click="editTask(task)">✏️</button>
        <button @click="deleteTask(task.id)" v-if="!task.isEditing">🗑️</button>
      </li>
    </ul>

    <h2>Đã hoàn thành</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">
        <span>{{ task.name }} - {{ task.time }}</span>
        <button @click="toggleComplete(task.id)">❌</button>
        <button @click="deleteTask(task.id)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const tasks = ref([])
const newTaskName = ref()
const newTaskTime = ref()

function addTask() {
  if (newTaskName.value && newTaskTime.value) {
    tasks.value.push({
      id: Date.now(),
      name: newTaskName.value,
      time: newTaskTime.value,
      completed: false,
      isEditing: false,
    })
  }
  newTaskName.value = ''
  newTaskTime.value = ''
}
function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
function toggleComplete(id) {
  const task = tasks.value.find(task => task.id == id)
  task.completed = !task.completed
}
const incompleteTasks = computed(() =>
  tasks.value.filter(task => !task.completed),
)

const completedTasks = computed(() =>
  tasks.value.filter(task => task.completed),
)
function editTask(task) {
  if (task.isEditing) {
    task.isEditing = false
  } else {
    task.isEditing = true
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #d5d8e1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  color: #333;
  margin-top: 80px;
}

h1 {
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 20px;
  font-weight: 600;
}

.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-task input {
  padding: 10px;
  border: 1px solid #d0d3e2;
  border-radius: 5px;
  flex: 1;
  font-size: 14px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #f0f0f0;
}

.add-task button {
  background-color: #4caf50;
  color: white;
}

.add-task button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 15px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

li input {
  padding: 6px;
  border: 1px solid #d0d3e2;
  border-radius: 3px;
  margin-right: 10px;
  font-size: 14px;
}

li button {
  margin: 0 5px;
  padding: 6px 10px;
}

li button:first-child {
  background-color: #f4b400;
  color: white;
}

li button:first-child:hover {
  background-color: #e3a000;
}

li button:last-child {
  color: white;
}

li button:last-child:hover {
  background-color: #c9302c;
}

h2 {
  font-size: 18px;
  color: #4a4a4a;
  margin-top: 20px;
}
</style>
