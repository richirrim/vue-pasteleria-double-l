<template>
    <!-- ---------- $Header --------------- -->
    <header class="main-header  l-section">
        <img class="banner__hero-image" src="../assets/images/banner.jpg" alt="Imagen, banner, principal de la página.">
        <div class="main-header__content">
            <div class="container  l-container">
                <Logo />
                <Navigation />
                <div>
                    <router-link class="button  main-header__button  icon-cake" to="/pastelcreator">Diseña tu pastel</router-link>
                    <!-- <a class="button  main-header__button  icon-cake" href="./pastel-creator.html" title="Te llava al panel de personalización de tu pastel.">Diseña tu pastel</a> -->
                </div>
            </div>
        </div>
    </header>  
    <router-view/>
    <Banner />  
</template>
    
<script>
import Banner from '@/components/BannerView.vue'
import Logo from '@/components/LogoView.vue'
import Navigation from '@/components/NavigationView.vue'

export default {
  name: 'HeaderView',
  components: {
    Logo,
    Navigation,
    Banner
  }
}
</script>
    
<style scoped lang="scss">
    
</style>