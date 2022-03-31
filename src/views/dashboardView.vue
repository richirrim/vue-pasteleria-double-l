<template>
    <Header
        v-bind:title="'Soy el dashboard 😎'"/>
    <button value="Cerrar sesión" v-on:click="onLogout">Cerra sesión</button>
</template>
    
<script>
import Header from '@/components/Header.vue'
export default {
    name: 'DashboardView',
    components: {
        Header
    },
    methods: {
        onLogout() {
            this.$store.dispatch('doLogout')
            this.$router.push('/')
        }
    }
}
</script>
    
<style>
    
</style>