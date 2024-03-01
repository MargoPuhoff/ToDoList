<template>
  <a-typography-title :level="2">
    <slot>
    </slot>
  </a-typography-title>
</template>

<script>
import { TypographyTitle } from 'ant-design-vue';
  
export default{
  name: 'my-title',
  
  components: {
    ATypographyTitle: TypographyTitle
  }
}  
</script>

<style scoped>
  h2{
    color: #a73328;
  }
</style>
