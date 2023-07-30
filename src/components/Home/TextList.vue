<template>
  <el-card class="todo-list">
    <template #header>
      <span>任务清单</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="primary"
        @click="addTask"
        >增加任务</el-button
      >
    </template>
    <div v-for="task in paginatedTasks" :key="task.id" class="task">
      <el-checkbox
        :label="task.id"
        :disabled="task.completed"
        @change="updateTasks"
      >
        <s v-if="task.completed">{{ task.name }}</s>
        <template v-else>{{ task.name }}</template>
      </el-checkbox>
      <el-button type="primary" :icon="Edit" @click="editTask(task)" circle />
      <el-button
        type="danger"
        :icon="Delete"
        @click="deleteTask(task)"
        circle
      />
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15, 20]"
      :total="tasks.length"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { Delete, Edit } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
let taskId = 1;
const tasks = ref([
  { id: taskId++, name: "Task 1", completed: false }
  // 初始任务列表...
]);
const currentPage = ref(1);
const pageSize = ref(5);

const addTask = () => {
  const taskName = prompt("请输入任务名称");
  if (taskName) {
    tasks.value.push({ id: taskId++, name: taskName, completed: false });
  }
};

const deleteTask = task => {
  tasks.value = tasks.value.filter(t => t.id !== task.id);
};

const editTask = task => {
  const newName = prompt("请输入新的任务名称", task.name);
  if (newName) {
    const taskToEdit = tasks.value.find(t => t.id === task.id);
    if (taskToEdit) {
      taskToEdit.name = newName;
    }
  }
};

const updateTasks = taskId => {
  const taskToUpdate = tasks.value.find(task => task.id === taskId);
  if (taskToUpdate) {
    taskToUpdate.completed = !taskToUpdate.completed;
  }
};

const handleSizeChange = val => {
  pageSize.value = val;
};

const handleCurrentChange = val => {
  currentPage.value = val;
};

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tasks.value.slice(start, end);
});
</script>

<style scoped>
.todo-list {
  width: 400px;
}

.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
