<template>
  <router-link to="/">Home</router-link>
  <router-view/>
  <Header v-bind:title="title" v-bind:description="description"/>
  <main class="main  main__pastel-creator">
    <h1 class="title  center-content">Let´s Go!</h1>
    <!-- ---------- $Base cakes --------------- -->
    <section class="base-cakes  l-section  l-container">
      <h2 class="base-cakes__title">Seleccion uno de los pasteles base</h2>
      <ListCakeCard />
    </section>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import ListCakeCard from '@/components/ListCakeCard.vue'

export default {
  name: 'PastelCreatorView',
  components: {
    Header,
    ListCakeCard
  },
  data() {
    return {
      title: 'No pares hasta quedar satisfecho con tu creación 🎂',
      description: 'Pasteles deliciosos y de gran calidad para hacerte feliz.'
    }
  }
}
</script>

<style scoped lang="scss">
/*-----------------------*\
    $Main
\*-----------------------*/
.main__pastel-creator {
    // text-align: center;
}

/*-----------------------*\
    $Base cakes
\*-----------------------*/
.base-cakes {
    gap: var(--gutter);
    text-align: center;
    align-items: center;
    &__title {
        width: 100%;
    }
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
} 
</style>
