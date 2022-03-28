<template>
  <Header 
    :title="'Encuentra y diseña un mejor pastel'"
    :description="'Encuentra los pasteles más deliciosos y ponle tus propias chipas crativas, con tus propias manos.'"
    v-bind:isButtonActivate="true"/>
  <main class="main-header  l-section">
    <About />
    <Products />
    <Contact />
  </main>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Products from '@/components/Products.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    About,
    Products,
    Contact,
    Footer
  }
}
</script>
