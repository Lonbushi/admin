<script setup lang="ts">
import draggable from "vuedraggable/";
import { shallowRef } from "vue";
import CalendarEl from "../../components/Home/calendar.vue";
import TextList from "../../components/Home/TextList.vue";
defineOptions({
  name: ""
});

const components = shallowRef({
  CalendarEl,
  TextList
});

const myArray = shallowRef([
  { id: 1, type: components.value.TextList },
  { id: 2, type: "ElCard" },
  { id: 3, type: components.value.CalendarEl }
]);
const myArray1 = shallowRef([{ id: 1, type: components.value.TextList }]);

const remove = evt => [console.log(evt)];
</script>

<template>
  <div class="body">
    <draggable
      v-model="myArray"
      class="container_x"
      group="name"
      animation="300"
      item-key="id"
      chosenClass="chosen"
      forceFallback="true"
      :move="remove"
    >
      <template #item="{ element }">
        <component
          :is="element.type"
          :class="'item' + ' ' + 'item-' + element.id"
          >{{ element.type }}</component
        >
      </template>
    </draggable>
    <draggable
      v-model="myArray1"
      class="container_y"
      group="name"
      animation="300"
      item-key="id"
      chosenClass="chosen"
      forceFallback="true"
      :move="remove"
    >
      <template #item="{ element }">
        <component
          :is="element.type"
          :class="'index' + ' ' + 'index-' + element.id"
          >{{ element.type }}</component
        >
      </template>
    </draggable>
  </div>
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  // background-color: rgb(231, 198, 198);
}

.container_x {
  width: 50vw;
  height: 100%;
  padding-right: 10px;
}

.container_y {
  // background: red;
  // color: white;
  width: 43vw;
  height: 100vh;
  padding-right: 45px;
}

.item {
  width: 100%;
  height: 30%;
  margin: 10px 0;
  text-align: center;
  // line-height: 77px;
  cursor: move;
  border: 1px solid #e5e4e9;
  // transition: transform 0.5s;
}

.index {
  width: 100%;
  height: 50%;
  margin: 10px 0;
}

::v-deep .mpvue-calendar {
  width: 80%;
  height: auto;
}
</style>
