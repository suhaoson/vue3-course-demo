<template>
  <div class="counter">
    <div class="text">Count: {{ state.count }}</div>
    <button class="btn" v-on:click="onClick">Add</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const state = reactive({
  count: 0,
});
const onClick = () => {
  state.count++;
};
console.log("reactive-------->", state);

const count = ref(0);
const state2 = ref({
  count: 2,
});
const onClick2 = () => {
  count.value++;
};
console.log("ref: count--------->", count);
console.log("ref: state2--------->", state2);
</script>

<style scoped>
.counter {
  padding: 10px;
  margin: 10px auto;
  text-align: center;
}

.counter .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}

.counter .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>
