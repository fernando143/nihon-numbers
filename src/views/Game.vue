<template>
     <div class="inputContainer">
         
      <v-text-field
        label="Ingrese el número"
        single-line
        solo
        v-model="number"
        v-on:input="start"
      ></v-text-field>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.inputContainer {
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}
</style>


