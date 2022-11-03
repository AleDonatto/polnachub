<template>
    <div>
        <v-app-bar :clipped-left="clipped" fixed color="white" app elevation="2">
            <!--<v-toolbar-title :class="{'ml-16': windowSize > 1129}" />-->
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="3" md="2" sm="3" xs="3">
                        <nuxt-link to="/campanias">
                            <img src="../../static/Logo-polnac.png" alt="logo polnac" class="mt-3" :height="windowSize<1129 ? '20' : ''"/>
                            <!--<v-img src="/Logo-polnac.png" contain max-width="180" class="mt-2"></v-img>-->
                        </nuxt-link>
                    </v-col>
                    <v-col cols="9" xl="7" lg="8" md="8">
                        <!--<v-tabs ref="tab" background-color="transparent" v-if="windowSize > 1129" class="d-flex align-end flex-column">
                            <v-tabs-slider color></v-tabs-slider>
                            
                            <v-tab class="black--text text-none mx-0 px-0 font-size-14 decoration-none" >
                                <p class="mt-3">(55) 2585 2650</p>
                                <v-img src="/home/WhatsApp.png" contain max-height="24" class="ml-3"></v-img>
                            </v-tab>
                            
                        </v-tabs>-->
                        <div class="d-flex align-end flex-column">
                            <div class="d-flex black--text text-none mx-0 px-0 font-size-14 decoration-none" @click="chatWhatsapp">
                                <p class="mt-4">(55) 2585 2650</p>
                                <v-img src="/home/WhatsApp.png" contain max-height="24" class="ml-3 mt-3"></v-img>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
            menu: false,
            dialog: false,
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
            },
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize']),
    },
    mounted() {
        //this.getAllProductos()
        //this.getDatos()
    },
    methods: {
        clean(){
            this.isSearch = false
            //this.getDatos()
        },
        chatWhatsapp(){
            window.open('https://wa.me/525525852650')
        }
    }

}
</script>

<style scoped>
.lang-border {
    border: 1px solid #130A1F;
    border-radius: 25px !important;
    border-color: black !important;
    border-width: 2px !important;
    text-decoration: dotted;
}
.select{
    max-width: 110px !important;   
    max-height: 2px !important;
    padding-top: 0px !important;
    font-size: 14px;
}

.select-mb{
    font-size: 10px;
}

.v-input__control{
    padding-top: -5px;
}

.v-menu__content{
    box-shadow: none !important;
} 

</style>