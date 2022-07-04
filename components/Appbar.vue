<template>
    <div>
        <v-app-bar
            :clipped-left="clipped"
            fixed
            color="white"
            app
            >
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
            
            <v-toolbar-title />
            <v-row align="center" justify="center" style="justify-content: space-between">
                <v-col cols="3" xl="3" md="2" sm="3">
                    <nuxt-link to="/">
                        <img src="../static/Logo-polnac.png" alt="logo polnac"/>
                    </nuxt-link>
                </v-col>
                <v-col cols="9" xl="9" md="10">
                <v-tabs ref="tab" background-color="transparent" v-if="windowSize > 1129">
                    <v-spacer></v-spacer>
                    <v-tabs-slider color=""></v-tabs-slider>
                    <v-tab class="black--text" to="/aboutus">{{ $t('appbar.aboutus') }}</v-tab>
                    <v-tab class="black--text" to="/poliresin">{{ $t('appbar.innovation') }}</v-tab>
                    <v-tab class="black--text" to="/transpolimer">{{ $t('appbar.products') }}</v-tab>
                    <v-tab class="black--text">{{ $t('appbar.services') }}</v-tab>
                    <v-tab class="black--text">{{ $t('appbar.market') }}</v-tab>
                    <v-tab class="black--text">Blog</v-tab>
                    <v-tab class="black--text">{{ $t('appbar.contact') }}</v-tab>
                    
                    <v-tab>
                    <v-icon>mdi-magnify</v-icon>
                    </v-tab>
                    <v-tab>
                        <select v-model="$i18n.locale" class="pa-3 mx-2" @change="() => {setLanguaje($i18n.locale)}">
                            <option class="ma-5" v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
                        </select>
                    </v-tab>
                    <!--<v-tab>
                    <v-menu bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-translate</v-icon>
                        </v-btn>
                        </template>

                        <v-list>
                        <v-list-item v-for="n in lang in $i18n.locales" :key="n.code" @click="() => {}">
                            <v-list-item-title>{{ n.name }}</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                    </v-tab>-->
                    <!--<v-select :items="items" solo label="ESP" chips class="p-0 m-0"></v-select>-->
                    <v-btn color="#773DBD" rounded class="mt-1 white--text">{{ $t('appbar.login') }}</v-btn>
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
            <v-menu bottom v-if="windowSize < 1129">
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
            </v-menu>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="windowSize < 1129"></v-app-bar-nav-icon>
            <!--options mobile-->
            </v-app-bar>

        <v-navigation-drawer  color="white" v-if="windowSize < 1129" app v-model="drawer" >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    <img src="../static/Logo-polnac.png" alt="logo polnac"/>
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list dense nav  >
                <v-list-item link to="/aboutus">
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">{{ $t('appbar.aboutus') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/poliresin">
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">{{ $t('appbar.innovation') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="transpolimer">
                    <v-list-item-content> 
                        <v-list-item-title class="text-cepitalize">{{ $t('appbar.products') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">{{ $t('appbar.services') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">{{ $t('appbar.market') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">Blog</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-capitalize">{{ $t('appbar.contact') }}</v-list-item-title>  
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
            lang: ['ESP', 'ENG']
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

<style>

</style>