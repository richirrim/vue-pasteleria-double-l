<template>
    <CardV2 
        v-for="(product, indexElement) in products" 
        v-bind:key="product"
        v-bind:price="product.price"
        v-bind:imageName="product.imageName"
        v-bind:text="product.text"
        v-bind:indexElement="indexElement"
        v-bind:classComponentName="product.classComponentName"
        v-bind:labelType="labelType"
        v-bind:isActivateImageEl="isActivateImageEl"/>
</template>
    
<script>
import CardV2 from '@/components/CardV2'

export default {
    name: 'ListCardV2Component',
    components: {
        CardV2
    },
    props: [
        'labelType',
        'isActivateImageEl',
        'products'
    ]
}
</script>
    
<style>
    
</style>