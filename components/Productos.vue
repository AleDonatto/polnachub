<template>
    <section class="mt-16" :class="{'bg-alliance-end': this.$route.path.includes('alliance'), 'bg-polnac-end': this.$route.path.includes('polnac') || this.$route.path.includes('wiki') || this.$route.path.includes('market')}">
        <v-container>
            <v-row justify="center" class="mb-10">
                <v-col cols="12" align="center" class="mt-16">
                    <h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">¿Necesitas más información?</h1>
                    <p class="white--text text-h5">Revisa nuestro amplio catálogo de productos</p>
                </v-col>                    
                <v-col cols="6" lg="4" md="4" sm="6" xs="6" class="mb-16" align="center">
                    <v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">Ver productos</v-btn>
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
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');
.font-title{
    font-family: 'Archivo' !important;
}
.bg-alliance-end{
    background-color: #655DC6;
    height: 480px;
}
.bg-polnac-end{
    background-color: #3D7CC9;
    height: 480px;
}
</style>