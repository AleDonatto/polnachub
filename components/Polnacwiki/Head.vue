<template>
    <div :class="{'bg-polnacwiki':windowSize > 1129, 'bg-polnacwiki-mb': windowSize < 1129 }" v-if="pagePolnacWiki !== null" :style="{ backgroundImage: `url(${basePathApiUrl + pagePolnacWiki.banner.image.data[0].attributes.url })` }">
        <v-row justify="center">
            <v-col cols="12" class="" align="center">
                <!--<h1 class="font-archivo mt-16 font-size-40 white--text font-weight-bold">POLNAC Wiki</h1>-->
                <h1 class="font-archivo mt-16 font-size-40 white--text font-weight-bold" v-html="pagePolnacWiki.banner.title"></h1>
            </v-col>
        </v-row>
        <v-row class="" justify="center">
            <v-col cols="8" v-if="this.pruebasLab !== null">
                <v-autocomplete solo rounded class="mt-4" placeholder="Buscar" prepend-inner-icon="mdi-magnify" clearable :items="this.pruebasLab.data" item-text="attributes.name" return-object
                @change="gotoPrueba"></v-autocomplete>
            </v-col>
            <v-col cols="3" align="center" class="mt-3" v-if="windowSize < 1129">
                <v-btn class="mx-2" fab dark color="white">
                    <v-icon color="black">
                        mdi-filter-outline
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <!-- esta seccion esta en el componente sections-->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            pruebas: null
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize', 'showbanners', 'pagePolnacWiki','basePathApiUrl', 'pruebasLab'])
    },
    mounted(){
        //this.getPruebas()
    },
    methods: {
        async getPruebas(){
            this.pruebas = await this.$store.dispatch('getAllTipoPruebas')
            //console.log(this.pruebas)
            //this.dataLab = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio')
            //this.dataMet = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Metodo de Transformacion')
            
            //console.log(this.dataLab)
        },
        gotoPrueba(item){
            //console.log(item)

            if(item.attributes.tipos_prueba.data.attributes.name === 'Metodo de Transformacion' || item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method'){
                const metodos= this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Metodo de Transformacion'  ||  item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method')
                const index = metodos.findIndex(itm => itm.id === item.id)
                this.$router.push(`/polnac-wiki?tag=methods&id=${index}`)
                this.$router.go(`/polnac-wiki?tag=methods&id=${index}`)
            }else if(item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' || item.attributes.tipos_prueba.data.attributes.name === 'Lab tests'){
                const pruebas = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio'  ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests')
                const index = pruebas.findIndex(itm => itm.id === item.id)
                this.$router.push(`/polnac-wiki?tag=laboratory&id=${index}`)
                this.$router.go(`/polnac-wiki?tag=laboratory&id=${index}`)
            }
        }
    }
}
</script>

<style scoped>
.bg-polnacwiki{
    /*background-image: url('../../static/polnacwiki/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-polnacwiki-mb{
    /*background-image: url('../../static/polnacwiki/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>