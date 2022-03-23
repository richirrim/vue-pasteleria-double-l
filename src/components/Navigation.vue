<template>
    <!-- ---------- $Navegation --------------- -->
    <nav class="main-nav">
        <ul class="menu">
            <li v-for="page in pages" v-bind:key="page" class="menu__item"><a class="menu__link" v-bind:href="page.url">{{ page.title }}</a></li>
        </ul>
    </nav>
</template>
    
<script>
export default {
    name: 'NavigationComponent',
    data() {
        return {
            pages: [
                {
                    title: 'Inicio',
                    url: '/'
                }, 
                {
                    title: 'Nosotros',
                    url: '#about'
                },
                {
                    title: 'Productos',
                    url: '#products'
                }, 
                {
                    title: 'Contacto',
                    url: '#contact'
                }
            ]
        }
    }
}
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Navigation
\*-----------------------*/
.main-nav {}


/*-----------------------*\
    $Menu
\*-----------------------*/
.menu {
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
    &__item {
        position: relative;
        list-style-type: none;
    }
    &__item:not(:last-child) {
        margin-right: 1em;
    }
    &__link {
        color: var(--color-white);
        height: var(--header-height);
        text-transform: uppercase;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__link:hover {
        color: var(--color-accent);
    }
    &__link:hover::before {
        content: '';
        position: absolute;
        bottom: 0;
        border-radius: .3em;
        background-color: var(--color-accent);
        height: .2em;
        width: 100%;
    }
}
</style>