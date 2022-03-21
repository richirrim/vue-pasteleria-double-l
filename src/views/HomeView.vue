<template>
  <Header />
  <main class="main-header  l-section">
    <About />
    <Products />
    <Contact />
  </main>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/HeaderView.vue'
import About from '@/components/AboutView.vue'
import Products from '@/components/ProductsView.vue'
import Contact from '@/components/ContactView.vue'
import Footer from '@/components/FooterView.vue'

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
