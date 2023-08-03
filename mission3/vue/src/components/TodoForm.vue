<template>
  <form @submit.prevent="$emit('addTodo', text); this.text = '';" >
    <input v-model="text" />
    <button>add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },  
  emits: {
    addTodo: null
  }
}
</script>