<template>
    <section class="mt-16" :class="{'bg-alliance-end': this.$route.path.includes('alliance'), 'bg-polnac-end': this.$route.path.includes('polnac')}">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" align="center" class="my-16">
                    <h1 class="white--text font-archivo text-h3 my-5 font-weight-bold">¿Necesitas más información?</h1>
                    <p class="white--text text-h5 my-5">Revisa nuestro amplio catálogo de productos</p>
                    <v-btn class="font-size-20 black--text px-10 my-5 py-6 body-1 text-none rounded-lg" color="#19D3C5">Ver productos</v-btn>
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
}
.bg-polnac-end{
    background-color: #3D7CC9;
}
</style>