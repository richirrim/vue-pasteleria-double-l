<template>
  <Header 
    v-bind:title="'No pares hasta quedar satisfecho con tu creación 🎂'" 
    v-bind:description="'Pasteles deliciosos y de gran calidad para hacerte feliz.'"/>
  <main class="main  main__pastel-creator">
    <h1 class="title  center-content">Let´s Go!</h1>
    <!-- ---------- $Base cakes --------------- -->
    <section class="base-cakes  l-section  l-container  center-content">
      <h2 class="base-cakes__title">Seleccion uno de los pasteles base</h2>
      <ListCardV2 
        v-bind:labelType="'radio'" 
        v-bind:isActivateImageEl="true"
        v-bind:products="baseCakes"/>
    </section>
    <!-- ---------- $Flavors --------------- -->
    <section id="js-flavors" class="flavors  l-section  l-container  center-content">
      <Flavors />
    </section>
    <!-- ---------- $Toppings --------------- -->
    <section id="js-toppings" class="toppings  l-section  l-container  center-content">
      <Toppings />
    </section>
    <!-- ---------- $Make order --------------- -->
    <section class="make-order  l-section  l-container  center-content">
      <h2 class="make-order__title">Realizar pedido</h2>
      <Form />
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import ListCardV2 from '@/components/ListCardV2.vue'
import Form from '@/components/Form.vue'
import Footer  from '@/components/Footer.vue'
import Flavors  from '@/components/Flavors.vue'
import Toppings  from '@/components/Topping.vue'

export default {
  name: 'PastelCreatorView',
  components: {
    Header,
    ListCardV2,
    Form,
    Footer,
    Flavors,
    Toppings
  },
  data() {
    return {
      baseCakes: [
        {
            price: '100',
            imageName: 'pastel-base-lv1',
            text: 'Un nivel',
            classComponentName: 'card-cake'
        },
        {
            price: '150',
            imageName: 'pastel-base-lv2',
            text: 'Dos niveles',
            classComponentName: 'card-cake'
        },
        {
            price: '200',
            imageName: 'pastel-base-lv3',
            text: 'Tres niveles',
            classComponentName: 'card-cake'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
/*-----------------------*\
    $Base cakes
\*-----------------------*/
.base-cakes {
    gap: var(--gutter);
    align-items: center;
    &__title {
        width: 100%;
    }
}


.flavors, 
.toppings,
.make-order {
    gap: var(--gutter);
    justify-content: center;
    &__title {
        width: 100%;
    }
    &__text {
        display: inline-block;
        font-size: 1.4em;
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
