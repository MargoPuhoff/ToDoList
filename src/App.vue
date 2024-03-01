<template>
  <div class="app">
    
    <my-title>Список дел</my-title>
    <task-form
      @add="addTask"/>
    <task-list
      :tasks="tasks"
      @remove="removeTask"/>
    
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue"
import TaskList from "@/components/TaskList.vue"
import axios from "axios"
   
export default{

  components: {
    TaskForm, TaskList
  },
  
  data() {
    return {
      tasks: [],
    }
  }, 

  methods: {
    addTask(task) {
      this.tasks.push(task)
    },
    
    removeTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)  
    },

    async fetchTasks() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
        this.tasks = response.data;
      } catch (error) {
        console.log('Ошибка')
      }
    }

  },

  mounted() {
    this.fetchTasks();
  }
  
}  
</script>

<style>
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #ffbe98;
  }
  
  .app{
    padding: 1.25rem;
  }

</style>