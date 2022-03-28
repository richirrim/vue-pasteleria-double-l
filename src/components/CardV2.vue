<template>
    <div v-bind:class="'card ' + classComponentName">
        <img v-if="isActivateImageEl" v-bind:class="classComponentName+'__image'" v-bind:src="url" alt="Ejemplo de un pastel base de un nivel.">
        <div v-else v-bind:class="'card ' + classComponentName+'__color ' +  classComponentName+'__'+flavor"></div>
        
        <span v-bind:class="classComponentName+'__price'">${{ price }}MXN</span>
        <div v-bind:class="classComponentName+'__input-control'">
            <input 
                v-bind:class="classComponentName+'__input'" 
                v-bind:type="labelType" v-bind:id="type" name="drone" 
                v-bind:value="type" 
                v-model="isChecked"
                v-on:change="onChange">
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
                tag: `cake${this.indexElement + 1}`,
                isChecked: ''
            }
        }
        // methods: {
        //     onChange() {
        //         this.$store.commit('productsAccountant', this.isChecked)
        //     }
        // }
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Card cakes
\*-----------------------*/
.card-cake {
    border: 1px solid var(--color-first);
    padding: 2em 1em;
    background-color: transparent;
    margin-bottom: 0;
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
    &__input-control {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__label {
        font-size: 1.6em;
        margin-left: .5em;
    }
}
</style>