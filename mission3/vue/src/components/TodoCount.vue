<template>
  <div>
    Completed: {{ count.completedCount }} / Total: {{ count.totalCount }}
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Object,
      default: () => ({
        completedCount: 0,
        totalCount: 0,
      })
    }
  }
}
</script>