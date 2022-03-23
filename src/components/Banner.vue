<template>
    <!-- ---------- $Banner --------------- -->
    <div class="banner">
        <div class="banner__content">
            <h1 class="banner__title">{{ title }}</h1>
            <p class="banner__description">{{ description }}</p>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'BannerComponent',
        props: [
            'title',
            'description',
        ]
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Banner
\*-----------------------*/
.banner {
    --padding: calc(var(--header-height) + 2) 1rem 3.5rem;
    display: flex;
    position: relative;
    padding: var(--padding);
    color: #fff;
    text-align: center;
    height: calc(var(--header-height) * 6);

    & > div { 
        margin: auto; 
    }
    &__title {
        margin-bottom: .2em;
    }
    &__description {
        margin-top: 0;
        margin-bottom: 0;
    } 
}
</style>