<template>
    <!-- ---------- $Products --------------- -->
    <section id="products" class="l-section  gallery">
        <div class="l-container">
            <h2 class="products__title">Top besto pasteles</h2>
            <p class="products__description">Estos son nuestros pasteles más vendidos, te enamoras a primera vista y ni se diga cuando lo pruebes.</p>
            <div class="grid">
                <ListCards />
            </div>
        </div>
    </section>
</template>
    
<script>
import ListCards from '@/components/ListCards'

export default {
    name: 'ProductsComponent',
    components: {
        ListCards
    }
}
</script>

<style scoped lang="scss">
/*-----------------------*\
    $Gallery
\*-----------------------*/
.products {
    .l-container {
        flex-direction: column;
    }
    &__description {
        margin-top: 0;
    }
    &__title,
    &__description {
        text-align: center;
        width: 100%;
    }
}

/*-----------------------*\
    $Grid
\*-----------------------*/
.grid {
    --columns: 4;
}
</style>