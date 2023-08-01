<template>
  <Header title="Todo List" />
  <TodoFrom />
  <TodoList :todos="todos" />
  <TodoCount :count="countTodos" />
</template>

<script>
import Header from "./components/Header.vue";
import TodoFrom from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import TodoCount from "./components/TodoCount.vue";

export default {
  components: {
    Header,
    TodoFrom,
    TodoList,
    TodoCount
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
  },
  computed: {
    countTodos() {
      return {
        completedCount: this.todos.filter(({_, isCompleted}) => isCompleted).length,
        totalCount: this.todos.length
      }
    }
  }
}
</script>

<style scoped>
  #app {
    margin-left: 20px;
  }
</style>
