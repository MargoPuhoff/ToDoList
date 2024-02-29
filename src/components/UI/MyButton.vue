<template>
  <button class="add">
    <slot></slot>
  </button>
</template>

<script>
export default{
   name: "my-button"
 } 
</script>

<style scoped>
  .add{
    width: 20%;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background: rgba(245, 229, 212, 0.8);
  }
</style>