<template>
    <footer class="main-footer">
        <a class="main-footer__logo" href="./">
           <Logo />
        </a>
        <span>© All rights reserved Pasteles Double L inc. 2022</span>
    </footer>
</template>
    
<script>
import Logo from '@/components/Logo.vue'

export default {
    name: 'FooterComponent',
    components: {
        Logo
    }
}
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Footer
\*-----------------------*/
.main-footer {
    padding: 8em 6em;
    background-color: var(--color-second);
    color: #fff;
    text-align: center;
    display: flex; 
    justify-content: space-between;
    align-items: center; 
}
</style>