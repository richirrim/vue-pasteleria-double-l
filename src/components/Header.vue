<template>
    <!-- ---------- $Header --------------- -->
    <header class="main-header  l-section">
        <img class="hero-image" src="../assets/images/banner.jpg" alt="Imagen, banner, principal de la página.">
        <div class="main-header__content">
            <div class="container  l-container">
                <Logo />
                <Navigation />
                <router-link v-if="activate" class="button  main-header__button  icon-cake" to="/pastelcreator">Diseña tu pastel</router-link>
                <router-view/>
            </div>
        </div>
        <Banner v-bind:title="title" v-bind:description="description"/>  
    </header>  
</template>
    
<script>
import Banner from '@/components/Banner.vue'
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'HeaderComponent',
  props: [
    'title',
    'description',
    'isButtonActivate'
  ],
  components: {
    Logo,
    Navigation,
    Banner
  },
  data() {
      return {
          activate: this.isButtonActivate
      }
  }
}
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Header
\*-----------------------*/
.main-header {
    position: relative;
    background-color: var(--color-first);
    
    &__button {
        background-color: var(--color-accent);
    }
    /* Coloca todo el contenido arriba de la hero image. */
    &__content {
        position: relative;
    }
    .container {
        padding: 1em;
        min-height: 4em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        opacity: .14;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

</style>