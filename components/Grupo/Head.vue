<template>
    <!-- v-if="pagePolnacGroup !== null" -->
    <div v-if="pagePolnacGroup !== null" :class="{'bg-grupo': windowSize > 1129, 'bg-grupo-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pagePolnacGroup.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" align="center" class="mt-12">
                <!--<h1 class="mt-5 font-archivo font-size-40 white--text font-weight-bold">Grupo POLNAC</h1>-->
                <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pagePolnacGroup.banner.title"></h1>

                <!--<p class="title white--text mt-8 mb-16">
                    Desde 1984, la familia <span class="yellow--text font-weight-bold">POLNAC</span> ha acrecentado sus miembros. <br>
                    Hoy en día son tres empresas y 8 marcas las cuales forman parte del grupo líder en soluciones de la industria plástica.
                </p>-->
            </v-col>
            <v-col cols="10" class="mt-5 mb-10" align="center">
                <div class="title white--text" v-html="pagePolnacGroup.banner.subtitle"></div>
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
        ...mapState(['windowHeight','windowSize','pagePolnacGroup', 'basePathApiUrl'])
    }
}
</script>

<style scoped>

.bg-grupo{
    /*background-image: url('../../static/group/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.bg-grupo-mb{
    /*background-image: url('../../static/group/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.max-heigh-desktop{
    height: 390px;
}
.max-height-mb{
    height: 540px;
}

</style>