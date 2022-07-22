<template>
    <div :class="{'bg-polnacwiki':windowSize > 1129, 'bg-polnacwiki-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="12" class="" align="center">
                <h1 class="font-archivo mt-16 font-size-40 white--text font-weight-bold">POLNAC Wiki</h1>
            </v-col>
        </v-row>
        <v-row class="" justify="center">
            <v-col cols="8">
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
.bg-polnacwiki{
    background-image: url('../../static/polnacwiki/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%; 
    height: 350px;
}

.bg-polnacwiki-mb{
    background-image: url('../../static/polnacwiki/bg-bannermb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%; 
    height: 400px;
}
</style>