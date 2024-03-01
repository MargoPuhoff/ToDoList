<template>
  <div class="task">

    <div>
      <a-checkbox 
        class="checkbox"
        v-model:checked="task.completed">
        
        <a-typography-text delete v-if="task.completed == true"> 
          {{ task.title}}
        </a-typography-text>
        
        <a-typography-text v-else> 
          {{ task.title}}
        </a-typography-text>
      </a-checkbox>
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
import {Checkbox} from "ant-design-vue";
import {TypographyText} from "ant-design-vue"
  
  
export default{

  components: {
    ACheckbox: Checkbox,
    ATypographyText: TypographyText
  },
  
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
    padding: 0.5rem;
    font-size: 1.12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: none;
    border-radius: 15px;
    background: rgba(245, 229, 212, 0.8);
  } 
  
  .checkbox:checked{
    color: #a73328;
  }  
</style>