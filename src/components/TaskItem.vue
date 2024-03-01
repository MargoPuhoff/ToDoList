<template>
  <div class="task">

    <div>
      <input
        type="checkbox"
        v-model="task.completed">
      <span> {{ task.title}} </span>
    </div>

    <div>
      <my-button
        class="remove"
        @click="$emit('remove', task)">
        <span
          class="material-symbols-outlined">close
        </span>
      </my-button>
    </div>

  </div>
</template>

<script>
export default{
  
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}  
</script>

<style scoped> 
  .task{
    margin: 0.5rem;
    padding: 0.75rem;
    font-size: 1.12rem;
    display: flex;
    justify-content: space-between;
    font-weight: none;
    border-radius: 15px;
    background: rgba(245, 229, 212, 0.8);
  }  
  
  span{
    padding-left: 0.3rem;
  }

  input:checked +span{
    color: #a73328;
    text-decoration: line-through;
  }
  
  
</style>