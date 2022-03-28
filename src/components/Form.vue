<template>
    <form class="form-order" action="">
        <!-- ---------- $Base cakes --------------- -->
        <section class="base-cakes  l-section  l-container  center-content">
            <h2 class="base-cakes__title">Seleccion uno de los pasteles base</h2>
            <div class="grid">
                <ListCardV2 
                    v-bind:labelType="'radio'" 
                    v-bind:isActivateImageEl="true"
                    v-bind:products="baseCakes"/>
            </div>
        </section>
        <!-- ---------- $Flavors --------------- -->
        <Flavors />
        <!-- ---------- $Toppings --------------- -->
        <Toppings />
     
        <!-- ---------- $Make order --------------- -->
        <section class="make-order  l-section  l-container  center-content">
            <h2 class="make-order__title">Realizar pedido</h2>
            <div class="make-order__wrapper  card">
                <input class="make-order__input" type="text" placeholder="Escribe tu nombre completo" name="names" required>
                <input class="make-order__input" type="text" placeholder="Escribe tu número de celular" name="phone-number" required>
                <input class="make-order__input" type="text" placeholder="Escribe tu correo electronico" name="email" required>
                <textarea class="make-order__textarea" type="textarea" placeholder="Describe de forma breve y general tu pastel ideal." name="description" rows="10" cols="50" required></textarea>
                <input class="make-order__button  button" type="button" value="Realizar pedido">
            </div>
        </section>
    </form>
</template>
    
<script>
import ListCardV2 from '@/components/ListCardV2.vue'
import Flavors  from '@/components/Flavors.vue'
import Toppings  from '@/components/Topping.vue'

export default {
    name: 'FormComponent',
    components: {
        ListCardV2,
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
    &__title {
        width: 100%;
    }
} 


/*-----------------------*\
    $Form order
\*-----------------------*/
.make-order {
    &__wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    &__wrapper > * {
        border: none;
        border-radius: .5em;
        color: var(--color-first);
        caret-color: var(--color-first);
    }
    [class^="make-order__"]:not(:last-child) {
        background-color: var(--color-bg);
        padding: .8em 1em;
        margin-bottom: 1em;
    }
    [class^="make-order__"]:focus {
        outline: .15rem solid var(--color-first);
    }
    &__textarea {
        resize: none;
    }
    &__button {
        color: #fff;
        justify-content: center;
        padding: 1.5em 1em;
        background-color: var(--color-first);
    }
    &__button:hover {
        background-color: var(--color-second);
    } 
}  
</style>