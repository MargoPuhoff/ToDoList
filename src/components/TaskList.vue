<template>
  <div v-if="tasks.length > 0">
    <task-item 
      v-for="task in tasks"
      :task="task"
      :key="task.id"
      @remove="$emit('remove', task)"/>
  </div>
  <my-title v-else>Дел нет. Можно отдыхать!</my-title>
</template>

<script>
 import TaskItem from "@/components/TaskItem.vue"
  
export default{

  components: {
    TaskItem
  },
  
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  methods: {

  }
  
}  
</script>

<style scoped>
  h2{
    color: #a73328;
  }
</style>