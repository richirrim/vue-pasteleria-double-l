<template>
  <Header 
    v-bind:title="'No pares hasta quedar satisfecho con tu creación 🎂'" 
    v-bind:description="'Pasteles deliciosos y de gran calidad para hacerte feliz.'"/>
  <main class="main  main__pastel-creator">
    <h1 class="title  center-content">Let´s Go!</h1>
    <!-- ---------- $Form order --------------- -->
     <Form />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'
import Footer  from '@/components/Footer.vue'

export default {
  name: 'PastelCreatorView',
  components: {
    Header,
    Form,
    Footer
  }
}
</script>

<style scoped lang="scss">
</style>
