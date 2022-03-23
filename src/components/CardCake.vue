<template>
    <div class="card  card-cake">
        <img class="card-cake__image" v-bind:src="url" alt="Ejemplo de un pastel base de un nivel.">
        <span class="card-cake__price">${{ price }}</span>
        <input class="card-cake__checket" type="radio" v-bind:id="index" name="drone" v-bind:value="index">
        <label class="card-cake__label" v-bind:for="index">{{ text }}</label>
    </div>
</template>
    
<script>
    export default {
        name: 'CardCakeComponent',
        props: [
            'price',
            'imageName',
            'text',
            'indexElement'
        ],
        data() {
            return {
                url: require(`@/assets/images/${this.imageName}.png`),
                index: `cake ${this.indexElement + 1}`
            }
        }
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Card cakes
\*-----------------------*/
.card-cake {
    flex-basis: var(--grid-3-columns);
    padding: 2em 1em;
    background-color: transparent;
    border: 1px solid var(--color-first);
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

</style>