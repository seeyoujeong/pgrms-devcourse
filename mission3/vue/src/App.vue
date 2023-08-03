<template>
  <Header title="Todo List" />
  <TodoForm @addTodo="addTodo"/>
  <TodoList :todos="todos" />
  <TodoCount :count="countTodos" />
</template>

<script>
import Header from "./components/Header.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import TodoCount from "./components/TodoCount.vue";

export default {
  components: {
    Header,
    TodoForm,
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
  },
  methods: {
    addTodo(nextTodo) {
      this.todos.push({
        text: nextTodo,
        isCompleted: false
      });
    }
  }
}
</script>

<style scoped>
  #app {
    margin-left: 20px;
  }
</style>
