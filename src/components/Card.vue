<template>
    <!-- Forma 1 de resivir los datos desde el component padre. -->
    <!-- <div class="card  card-product">
        <div class="card  card-product__img-container">
            <img class="card-product__img" 
            v-bind:src="baseUrl" 
            v-bind:alt="altDescription">
        </div>
        <p class="card-product__description">{{ description }}</p>
        <div class="card-product__footer">
            <i class="icon-card"></i>
            <span class="card-product__price">${{ price }}MXN</span>
        </div>
    </div>   -->
    <!-- Forma 2 de resivir los datos desde el component padre. -->
    <div class="card  card-product">
        <div class="card  card-product__img-container">
            <img class="card-product__img" 
            v-bind:src="baseUrl" 
            v-bind:alt="infoProduct.altDescription">
        </div>
        <p class="card-product__description">{{ infoProduct.description }}</p>
        <div class="card-product__footer">
            <i class="icon-card"></i>
            <span class="card-product__price">${{ infoProduct.price }}MXN</span>
        </div>
    </div>  
</template>
    
<script>
export default {
    name: 'CardComponent',
    props: [
        // Forma 1 de resivir los datos.
        // 'description',
        // 'altDescription',
        // 'urlImage',
        // 'price'
        // Forma 2 de resivir los datos.
        'infoProduct'
    ],
    data() {
        return {
            baseUrl: require(`@/assets/images/${this.infoProduct.urlImage}.png`)
        }
    }
}
</script>
    
<style scoped lang="scss">
.card-product {
    background-color: transparent;
    padding: .8em;
    box-shadow: none;

    &__img-container {
        background-color: var(--color-second);
        border-radius: 2em;
    }
    &__description {
        text-align: left;
    }
    &__footer {
        display: flex;
        justify-content: space-between;
    }
    &__price {
        display: block;
        font-size: 1.6em;
    }
}  
</style>