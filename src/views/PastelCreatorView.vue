<template>
  <router-link to="/">Home</router-link>
  <router-view/>
  <Header v-bind:title="title" v-bind:description="description"/>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'PastelCreatorView',
  components: {
    Header
  },
  data() {
    return {
      title: 'NO PARES HASTA QUEDAR SATISFECHO CON TU CREACIÓN',
      description: 'Pasteles deliciosos y de gran calidad para hacerte feliz.'
    }
  }
}
</script>

<style scoped lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
} 
</style>
