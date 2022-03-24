<template>
    <div v-bind:class="'card ' + classComponentName">
        <img v-if="isActivateImageEl" v-bind:class="classComponentName+'__image'" v-bind:src="url" alt="Ejemplo de un pastel base de un nivel.">
        <div v-else v-bind:class="'card ' + classComponentName+'__color ' +  classComponentName+'__'+flavor"></div>
        
        <span v-bind:class="classComponentName+'__price'">${{ price }}MXN</span>
        <div v-bind:class="classComponentName+'__input-control'">
            <input v-bind:class="classComponentName+'__input'" v-bind:type="labelType" v-bind:id="type" name="drone" v-bind:value="type">
            <label v-bind:class="classComponentName+'__label'" v-bind:for="type">{{ text }}</label>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'CardV2Component',
        props: [
            'price',
            'imageName',
            'text',
            'indexElement',
            'classComponentName',
            'isActivateImageEl',
            'labelType'
        ],
        data() {
            return {
                flavor: this.text.toLowerCase().split(' ').join('-'),
                url: this.imageName ? require(`@/assets/images/${this.imageName}.png`) : '',
                type: this.classComponentName.split('-').pop() + this.indexElement,
                tag: `cake${this.indexElement + 1}`
            }
        }
    }
</script>
    
<style scoped lang="scss">
.card-cake,
.card-flavor,
.card-topping {
    &__label {
        margin-left: .5em;
    }
}
.card-cake,
.card-flavor,
.card-topping {
    &__input-control {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
/*-----------------------*\
    $Card cakes
\*-----------------------*/
.card-cake {
    padding: 2em 1em;
    background-color: transparent;
    border: 1px solid var(--color-first);
    flex-basis: var(--grid-3-columns);
    &__image {
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
    }
    &__price {
        display: inline-block;
        font-size: 1.4em;
        width: 100%;
    }
    &__label {
        font-size: 1.6em;
    }
}


/*-----------------------*\
    $Card flavor
\*-----------------------*/
.card-flavor {
    border: 1px solid var(--color-first);
    background-color: transparent;
    box-shadow: none;
    flex-basis: var(--grid-3-columns);
    &__color {
        --width: 1em;
        margin-left: auto;
        margin-right: auto;
        width: var(--width);
        height: var(--width);
        box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
    }
    &__price {
        display: inline-block;
        font-size: 1.2em;
        width: 100%;
    }
    &__label {
        font-size: 1.6em;
    }
    & .card-flavor__vainilla {
        background-color: #F3E5AB;
    }
    & .card-flavor__chocolate {
        background-color: #a1887f;
    }
    & .card-flavor__limon {
        background-color: #aed581;
    }
    & .card-flavor__uva-loca {
        background-color: #ba68c8;
    }
    & .card-flavor__mora-azul {
        background-color: #4fc3f7;
    }
    & .card-flavor__chamoyada {
        background-color: #ff8a65;
    }
}

/*-----------------------*\
    $Card toppings
\*-----------------------*/
.card-topping {
    flex-basis: var(--grid-3-columns);
    border: 1px solid var(--color-first);
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 0;
    &__price {
        display: inline-block;
        width: 100%;
        font-size: 1.4em;
    }
    &__image {
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
    }
    &__label {
        font-size: 1.6em;
    }
    &__text {
        display: inline-block;
        text-align: center;
        width: 100%;
    }
}
</style>