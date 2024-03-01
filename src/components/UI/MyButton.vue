<template>
  <a-space wrap>
    <a-button>
      <slot></slot>
    </a-button>
  </a-space>
</template>

<script>
export default{
   name: "my-button"
 } 
</script>

<style scoped>
  .add{
    width: 30%;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background: rgba(245, 229, 212, 0.8);
  }
  
  .remove{
    padding: 0rem;
    cursor: pointer;
    border: none;
    background: transparent;
  }
</style>