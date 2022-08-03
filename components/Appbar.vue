<template>
    <div>
        <v-app-bar :clipped-left="clipped" fixed color="white" app>
            <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
            <!--<v-btn
                icon
                @click.stop="miniVariant = !miniVariant"
            >
                <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
            <v-btn
                icon
                @click.stop="clipped = !clipped"
            >
                <v-icon>mdi-application</v-icon>
            </v-btn>
            <v-btn
                icon
                @click.stop="fixed = !fixed"
            >
                <v-icon>mdi-minus</v-icon>
            </v-btn>-->

            <v-toolbar-title :class="{'ml-16': windowSize > 1129}"/>
            <v-row align="center" :class="{'mr-0' : windowSize > 1129}">
                <v-col cols="3" xl="3" md="2" sm="3">
                    <nuxt-link to="/">
                        <img src="../static/Logo-polnac.png" alt="logo polnac"/>
                    </nuxt-link>
                </v-col>
                <v-col cols="9" xl="9" md="10">
                <v-tabs ref="tab" background-color="transparent" v-if="windowSize > 1129">
                    <v-tabs-slider color></v-tabs-slider>
                    <v-tab class="black--text text-none mx-1 px-0" to="/aboutus">{{ $t('appbar.aboutus') }}</v-tab>
                    <v-tab class="black--text text-none mx-1 px-0" to="/innovation">{{ $t('appbar.innovation') }}</v-tab>
                    <v-tab class="black--text text-none mx-1 px-0" to="/search-products">{{ $t('appbar.products') }}</v-tab>
                    <v-tab class="black--text text-none mx-0 px-0" to="/services">{{ $t('appbar.services') }}</v-tab>
                    <v-tab class="black--text text-none mx-0 px-0" to="/market">{{ $t('appbar.market') }}</v-tab>
                    <v-tab class="black--text text-none mx-0 px-0" to="/blog">Blog</v-tab>
                    <v-tab class="black--text text-none mx-0 px-0" to="/contact">{{ $t('appbar.contact') }}</v-tab>
                    
                    <v-tab class="mx-0 px-0">
                        <v-menu
                            bottom
                            origin="center center"
                            transition="scale-transition"
                            :close-on-content-click="false"
                            :nudge-width="1800"
                            offset-y
                            class="mx-0 px-0"
                        >
                            <template v-slot:activator="{ on, attrs }" class="mx-0 px-0">
                                <v-btn icon v-bind="attrs" v-on="on" class="mx-0 px-0">
                                    <v-icon class="mx-0 px-0">mdi-magnify</v-icon>
                                </v-btn>
                            </template>

                            <div class="d-flex justify-center">
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols="12">
                                            <v-card class="mx-4">
                                                <v-list>
                                                    <v-list-item>
                                                        <v-text-field solo rounded class="mt-4" placeholder="Buscar por producto" prepend-inner-icon="mdi-magnify" clearable></v-text-field>
                                                    </v-list-item>
                                                </v-list>

                                                <v-divider></v-divider>

                                                <v-list>
                                                    <v-row justify="center" class="mt-4">
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/plasticos.png" contain max-height="65"></v-img>
                                                            <p class="">Plásticos de ingeniería</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/compuesto.png" contain max-height="65"></v-img>
                                                            <p class="">Compuestos</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/masterbach.png" contain max-height="65"></v-img>
                                                            <p class="">Masterbatch</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/aditivos.png" contain max-height="65"></v-img>
                                                            <p class="">Concentrados de Aditivos</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/carbonato.png" contain max-height="65"></v-img>
                                                            <p class="">Carbonato de calcio</p>
                                                        </v-col>
                                                    </v-row>

                                                    <v-row justify="center" class="mt-4">
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/rotomoldeo.png" contain max-height="65"></v-img>
                                                            <p class="">Rotomoldeo</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/pvc.png" contain max-height="65"></v-img>
                                                            <p class="">PVC</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/aditivos.png" contain max-height="65"></v-img>
                                                            <p class="">Elastómeros Termoplásticos</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/biodegradables.png" contain max-height="65"></v-img>
                                                            <p class="">Biodegradables</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/hules.png" contain max-height="65"></v-img>
                                                            <p class="">Hules</p>
                                                        </v-col>
                                                    </v-row>

                                                    <v-row justify="center" class="mt-4">
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/polietileno.png" contain max-height="65"></v-img>
                                                            <p class="">Polietileno</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/polipropileno.png" contain max-height="65"></v-img>
                                                            <p class="">Polipropileno</p>
                                                        </v-col>
                                                        <v-col cols="12" lg="2" md="2" sm="12" xs="12" align="center">
                                                            <v-img src="/menu-search/estirenicos.png" contain max-height="65"></v-img>
                                                            <p class="">Estirénicos</p>
                                                        </v-col>
                                                    </v-row>
                                                    <!--<v-list-item>
                                                        <v-list-item-action>
                                                            <v-switch v-model="message" color="purple"></v-switch>
                                                        </v-list-item-action>
                                                        <v-list-item-title>Enable messages</v-list-item-title>
                                                    </v-list-item>

                                                    <v-list-item>
                                                        <v-list-item-action>
                                                            <v-switch v-model="hints" color="purple"></v-switch>
                                                        </v-list-item-action>
                                                        <v-list-item-title>Enable hints</v-list-item-title>
                                                    </v-list-item>-->
                                                </v-list>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <!--<v-btn text @click="menu = false">Cancel</v-btn>
                                                    <v-btn color="primary" text @click="menu = false">Save</v-btn>-->
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                        </v-menu>
                    </v-tab>
                    <v-select rounded outlined :items="$i18n.locales" item-value="code" item-text="name" v-model="$i18n.locale" 
                    @change="() => {setLanguaje($i18n.locale)}" dense class="select mt-1 text-none"></v-select>
                    <v-btn color="#773DBD" rounded class="ml-2 mt-1 white--text text-none">{{ $t('appbar.login') }}</v-btn>
                </v-tabs>
                </v-col>
            </v-row>
            <!--options mobile-->
            <v-menu bottom v-if="windowSize < 1129">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon >mdi-magnify</v-icon>
                    </v-btn>
                </template>
            </v-menu>
            <!--<v-menu bottom v-if="windowSize < 1129">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-translate</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in lang" :key="n">
                        <v-list-item-title @click="() => {translate(n)}">{{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>-->
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="windowSize < 1129"></v-app-bar-nav-icon>
            <!--options mobile-->
        </v-app-bar>

        <v-navigation-drawer color="white" v-if="windowSize < 1129" app v-model="drawer" >
            <!--<v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    <img src="../static/Logo-polnac.png" alt="logo polnac"/>
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>-->

            <v-icon @click.stop="drawer = !drawer" class="ml-5 mt-5 mb-2" color="#19D3C5">mdi-close</v-icon>
            <v-divider></v-divider>

            <v-list dense nav  class="mt-2">
                <v-list-item link to="/">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Inicio</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Polnac</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/aboutus">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.aboutus') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/polnac-group">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Grupo Polnac</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/polnack-wiki">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Polnac Wiki</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Colaboradores</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Trabaja con nosotrso</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/search-products">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.products') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/services">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.services') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/laboratory">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Pruebas de Laboratorio</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Almacenaje</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Trasvase</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Ensacado</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Distribucion</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Contenedores</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Innovación</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Investigacion & Desarrollo</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Laboratorio</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">POLNAC Blue</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Mercados</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Blog</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Contacto</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Pregunas frecuentes</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Sucursales</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Contáctanos</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">
                            <v-row>
                                <v-col cols="6" align-self="center" align="center">
                                    <p>Cambiar Idioma</p>
                                </v-col>
                                <v-col cols="6" align-self="center" align="center">
                                    <!--<select title="lang" name="lang-mb" v-model="$i18n.locale" @change="() => {setLanguaje($i18n.locale)}"  class="lang-border px-5 py-2">
                                        <option class="ma-5 pa-5" v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
                                    </select>-->
                                    <v-select rounded outlined :items="$i18n.locales" item-value="code" item-text="name" v-model="$i18n.locale" 
                                    @change="() => {setLanguaje($i18n.locale)}" dense class="select-mb text-none my-auto"></v-select>
                                </v-col>
                            </v-row>
                        </v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content> 
                        <v-list-item-title>
                            <div class="d-flex justify-space-between">
                                <v-btn rounded color="#19D3C5" class="text-none px-5">Acceder</v-btn>
                                <v-btn rounded outlined color="#19D3C5" class="text-none px-5"><span class="black--text">Registro</span></v-btn>
                            </div>
                        </v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: ['ESP', 'ING'],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
            lang: ['ESP', 'ENG'],
            menu: false
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize']),
    },
    methods: {
        ...mapActions(['setLanguaje']),
        translate(lang){
            if(lang === 'ESP'){
                this.$i18n.locale = 'es'
            }
            if(lang === 'ENG'){
                this.$i18n.locale = 'eng'
            }
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