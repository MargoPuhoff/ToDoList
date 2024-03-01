<template>
    <a-button>
      <slot></slot>
    </a-button>
</template>

<script>
import { Button } from 'ant-design-vue';
  
export default{
   name: "my-button",
  
   components: {
     AButton: Button,
   }
 } 
</script>

<style scoped>
  .add{
    width: 10%;
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

  .add:hover, .remove:hover{
    color: #a73328;;
  }
</style>