<template>
  <div class="home">
    <Input-number></Input-number>
    <Content-card></Content-card>
  </div>
</template>

<script>
// @ is an alias to /src
import InputNumber from '@/components/InputNumber.vue'
import ContentCard from '@/components/ContentCard.vue'

export default {
  name: 'home',
  components: {
    InputNumber,
    ContentCard
  }
}
</script>
