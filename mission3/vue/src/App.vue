<template>
  <Header title="Todo List" />
  <TodoFrom />
</template>

<script>
import Header from "./components/Header.vue";
import TodoFrom from "./components/TodoForm.vue";

export default {
  components: {
    Header,
    TodoFrom
  }
}
</script>

<style scoped>
  #app {
    margin-left: 20px;
  }
</style>
