<template>
    <section class="mt-16" :class="{'bg-alliance-end': this.$route.path.includes('alliance'), 'bg-polnac-end': this.$route.path.includes('polnac')}">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" align="center" class="my-16">
                    <h1 class="white--text display-2 my-5">¿Necesitas más información?</h1>
                    <p class="white--text headline my-5">Revisa nuestro amplio catálogo de productos</p>
                    <v-btn rounded class="black--text px-10 my-5 py-6" color="#19D3C5">Ver productos</v-btn>
                </v-col>                    
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
.bg-alliance-end{
    background-color: #655DC6;
}
.bg-polnac-end{
    background-color: #3D7CC9;
}
</style>