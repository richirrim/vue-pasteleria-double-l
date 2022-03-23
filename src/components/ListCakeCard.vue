<template>
    <CardCake 
        v-for="(product, indexElement) in products" 
        v-bind:key="product"
        v-bind:price="product.price"
        v-bind:imageName="product.imageName"
        v-bind:text="product.text"
        v-bind:indexElement="indexElement"/>
</template>
    
<script>
import CardCake from '@/components/CardCake'

export default {
    name: 'ListCakeCardComponent',
    components: {
        CardCake
    },
    data() {
        return {
            products: [
                {
                    price: '100',
                    imageName: 'pastel-base-lv1',
                    text: 'Un nivel'
                },
                {
                    price: '150',
                    imageName: 'pastel-base-lv2',
                    text: 'Dos niveles'
                },
                {
                    price: '200',
                    imageName: 'pastel-base-lv3',
                    text: 'Tres niveles'
                }
            ]
        }
    }
}
</script>
    
<style>
    
</style>