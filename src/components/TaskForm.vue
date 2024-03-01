<template>
  <form @submit.prevent>
    <my-input
      v-model="task.title" 
      placeholder="Создать задачу"/>
    <my-button
      class="add"
      @click="addTask">
      Добавить
    </my-button>
  </form>
</template>

<script>  
export default{
  
  data() {
    return {
      task: {
        title: '',
        completed: false
      }
    }
  },

  methods: {
    addTask() {
      this.task.id = Date.now();
      this.$emit('add', this.task);
      this.task = {
        title: ""
      }
    }
  }
  
}  
</script>

<style scoped>
  
</style>