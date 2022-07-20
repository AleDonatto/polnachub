<template>
    <div class="bg-innovation">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="font-archivo font-size-40 mt-16 white--text font-weight-bold">Innovación & Desarrollo</h1>
            </v-col>
            <v-col cols="10" align="center">
                <p class="title white--text mt-10 mb-16">
                    Donde está la innovación está <span class="yellow--text font-weigth-bold">POLNAC</span>: Nos distingue nuestra pasión para encontrar nuevos mercados, 
                    nuevas soluciones, nuevos desarrollos. 
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.bg-innovation{
    background-image: linear-gradient(to right, rgba(25, 211, 197, 0.9),rgba(61, 124, 201, 0.9)), url('../../static/innovation/bg-innovation.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>