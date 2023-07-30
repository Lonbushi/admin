<script setup lang="ts">
import Calendar from "mpvue-calendar";
import { ref } from "vue";
// import type { CalendarDateType, CalendarInstance } from 'element-plus'
// const calendar = ref<CalendarInstance>()
const remarks = ref({ "2023-7-29": "some tings" });
</script>

<template>
  <el-card shadow="hover">
    <Calendar backgroundText class-name="select-mode" :remarks="remarks" />
  </el-card>
</template>

<style lang="scss" scoped>
.el-card {
  // background: rgb(99, 200, 129);
}
</style>
