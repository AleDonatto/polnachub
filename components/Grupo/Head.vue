<template>
    <div :class="{'bg-grupo': windowSize > 1129, 'bg-grupo-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="8" align="center" class="mt-16">
                <h1 class="mt-5 font-archivo font-size-40 white--text font-weight-bold">Grupo POLNAC</h1>

                <p class="title white--text mt-8 mb-16">
                    Desde 1984, la familia <span class="yellow--text font-weight-bold">POLNAC</span> ha acrecentado sus miembros. <br>
                    Hoy en día son tres empresas y 8 marcas las cuales forman parte del grupo líder en soluciones de la industria plástica.
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {

        }
    }, 
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>

.bg-grupo{
    background-image: url('../../static/group/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.bg-grupo-mb{
    background-image: url('../../static/group/bg-bannermb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.max-heigh-desktop{
    height: 390px;
}
.max-height-mb{
    height: 540px;
}

</style>