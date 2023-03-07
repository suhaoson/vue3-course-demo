<!-- 子组件 -->
<template>
  <div class="v-text">
    <span>地址：</span>
    <input :value="myStore.text" @input="onInput" />
  </div>
</template>

<script setup>
import { useMyStore } from "../store";
const myStore = useMyStore();
const props = defineProps({
  text: String,
});
const emits = defineEmits(["onInputText"]);
const onInput = (e) => {
  //   props.text = e.target.value;
  emits("onInputText", e.target.value);
};
</script>
