<template>
    <!-- Forma 1 de pasar datos al componente hijo -->
    <!-- <Card v-for="product in products" :key="product" 
        :description="product.description" 
        :altDescription="product.altDescription" 
        :urlImage="product.urlImage" 
        :price="product.price"/> -->
    <!-- Forma 2 de pasar datos al componente hijo -->
    <Card v-for="product in products" :key="product" v-bind:infoProduct="product"/>
</template>
    
<script>
 import Card from '@/components/Card.vue'

export default {
    name: 'ListCardComponent',
    components: {
        Card
    },
    data() {
        return {
            products: [
                {
                    description: 'Pastel de frutas al horno.',
                    altDescription: 'Imagen 1, top mejores pasteles.',
                    urlImage: 'top-product-1',
                    price: '250'
                },
                {
                    description: 'Rebanada de pastel de fresas.',
                    altDescription: 'Imagen 2, top mejores pasteles.',
                    urlImage: 'top-product-2',
                    price: '70'
                },
                {
                    description: 'Pastel de frutas al horno.',
                    altDescription: 'Imagen 3, top mejores pasteles.',
                    urlImage: 'top-product-3',
                    price: '160'
                },
                {
                    description: 'Pastel de frutas al horno.',
                    altDescription: 'Imagen 4, top mejores pasteles.',
                    urlImage: 'top-product-4',
                    price: '80'
                }
            ]
        }
    }  
} 
</script>
    
<style>
    
</style>