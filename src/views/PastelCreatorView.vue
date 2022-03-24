<template>
  <router-link to="/">Home</router-link>
  <router-view/>
  <Header v-bind:title="title" v-bind:description="description"/>
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
      <h2 class="flav+ors__title">Selecciona máximo dos sabores</h2>
      <span class="flavors__number-selected-flavors">Sabores seleccionados: <span id="js-selected-flovers">0/2</span></span>
      <ListCardV2 
      v-bind:labelType="'checkbox'" 
      v-bind:isActivateImageEl="false"
      v-bind:products="flavors"/>
    </section>
    <!-- ---------- $Toppings --------------- -->
    <section id="js-toppings" class="toppings  l-section  l-container  center-content">
      <h2 class="toppings__title">Selecciona máximo 4 toppings</h2>
      <span class="toppings__text">Topping seleccionados: <spa id="js-selected-toppings">0/4</spa></span>
    </section>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import ListCardV2 from '@/components/ListCardV2.vue'

export default {
  name: 'PastelCreatorView',
  components: {
    Header,
    ListCardV2
  },
  data() {
    return {
      title: 'No pares hasta quedar satisfecho con tu creación 🎂',
      description: 'Pasteles deliciosos y de gran calidad para hacerte feliz.',
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
      ],
      flavors: [
        {
            price: '15',
            imageName: '',
            text: 'Vainilla',
            classComponentName: 'card-flavor'
        },
        {
            price: '15',
            imageName: '',
            text: 'Chocolate',
            classComponentName: 'card-flavor'
        },
        {
            price: '200',
            imageName: '',
            text: 'Limon',
            classComponentName: 'card-flavor'
        },
        {
            price: '16',
            imageName: '',
            text: 'Uva loca',
            classComponentName: 'card-flavor'
        },
        {
            price: '15',
            imageName: '',
            text: 'Mora azul',
            classComponentName: 'card-flavor'
        },
        {
            price: '18',
            imageName: '',
            text: 'Chamoyada',
            classComponentName: 'card-flavor'
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


/*-----------------------*\
    $Flavors
\*-----------------------*/
.flavors, 
.toppings {
    gap: var(--gutter);
    justify-content: center;
    &__title {
        width: 100%;
    }
    &__number-selected-flavors {
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
