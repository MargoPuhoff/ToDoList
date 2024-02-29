<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input">
</template>

<script>
export default{
  
  name: "my-input",
  
  props: {
    modelValue: [String, Number]  
  },

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
  
} 
</script>

<style scoped>
  .input{
    margin: 0.5rem;
    padding: 0.5rem;
    width: 70%;
    border: none;
    border-radius: 15px;
    background: rgba(245, 229, 212, 0.8);
  }
</style>