<template>
    <div class="" :class="{'bg-blog': windowSize > 1129, 'bg-blog-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="12" align="center" class="mt-16">
                <h1 class="font-archivo font-size-40 font-weight-bold white--text">Blog</h1>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-4">
            <v-col cols="1">
                <p class="white--text">Todos</p>
            </v-col>
            <v-col cols="1">
                <p class="white--text">Tendencias</p>
            </v-col>
            <v-col cols="1">
                <p class="white--text">Productos</p>
            </v-col>
            <v-col cols="1">
                <p class="white--text">Mercados</p>
            </v-col>
            <v-col cols="1">
                <p class="white--text">POLNAC Blue</p>
            </v-col>
            <v-col cols="1">
                <p class="white--text">Eventos</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8" class="mb-16">
                <v-text-field solo rounded class="mt-4" placeholder="Buscar" prepend-inner-icon="mdi-magnify" clearable></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.bg-blog{
    background-image: url('../../static/blog/bg-blog.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.bg-blog-mb{
    background-image: url('../../static/blog/bg-blog-mb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>