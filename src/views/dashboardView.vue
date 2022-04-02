<template>
    <Header v-bind:title="'Dashboard | registro de pedidos'">
        <template v-slot:button>
            <button class="button" value="Cerrar sesión" v-on:click="onLogout">Cerra sesión</button>
        </template>
    </Header>
    <main>
        <section class="l-section  l-container">
            <h2>Registro de pedidos</h2>
            <Table />
        </section>
    </main>
</template>
    
<script>
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'

export default {
    name: 'DashboardView',
    components: {
        Header,
        Table
    },
    methods: {
        onLogout() {
            this.$store.dispatch('doLogout')
            this.$router.push('/')
        }
    }
}
</script>
    
<style scopde lang="scss">
.l-section {
    flex-direction:  column;
}
</style>