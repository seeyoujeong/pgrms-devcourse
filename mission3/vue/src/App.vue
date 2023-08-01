<template>
  <Header title="Todo List" />
  <TodoFrom />
  <TodoList :todos="todos" />
</template>

<script>
import Header from "./components/Header.vue";
import TodoFrom from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    Header,
    TodoFrom,
    TodoList
  },
  data() {
    return {
      todos: [
        { 
          text: "test",
          isCompleted: false
        }
      ]
    };
  }
}
</script>

<style scoped>
  #app {
    margin-left: 20px;
  }
</style>
