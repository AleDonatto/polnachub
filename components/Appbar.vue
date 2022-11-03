<template>
    <div>
        <div v-if="!this.$route.path.includes('campanias')">
            <v-app-bar :clipped-left="clipped" fixed color="white" app elevation="2"  >
                <!--<v-toolbar-title :class="{'ml-16': windowSize > 1129}" />-->
                <v-container fluid>
                    <v-row justify="center">
                        <v-col cols="3" md="2" sm="3" xs="3">
                            <nuxt-link to="/">
                                <img src="../static/Logo-polnac.png" alt="logo polnac" class="mt-3" :height="windowSize<1129 ? '20' : ''"/>
                                <!--<v-img src="/Logo-polnac.png" contain max-width="180" class="mt-2"></v-img>-->
                            </nuxt-link>
                        </v-col>
                        <v-col cols="9" xl="7" lg="8" md="8">
                            <v-tabs ref="tab" background-color="transparent" v-if="windowSize > 1129" class="d-flex align-end flex-column">
                                <v-tabs-slider color></v-tabs-slider>
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" :to="localePath('aboutus', this.lang)">{{ $t('appbar.aboutus') }}</v-tab>
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" :to="localePath('innovation', this.lang)">{{ $t('appbar.innovation') }}</v-tab>
                                <!--<v-tab class="black--text text-none mx-0 px-0 font-size-14" to="/search-products">{{ $t('appbar.products') }}</v-tab>-->
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" :to="localePath('services', this.lang)">{{ $t('appbar.services') }}</v-tab>
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" :to="localePath('market', this.lang)">{{ $t('appbar.market') }}</v-tab>
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" to="/blogs" v-if="this.lang === 'es'">Blog</v-tab>
                                <v-tab class="black--text text-none mx-0 px-0 font-size-14" :to="localePath('contact', this.lang)">{{ $t('appbar.contact') }}</v-tab>
                                
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
                                                                    <v-text-field v-model="search" solo rounded class="mt-4" placeholder="Buscar por producto" prepend-inner-icon="mdi-magnify" 
                                                                        clearable @click:clear="clean">
                                                                    </v-text-field>
                                                                    <v-btn class="rounded-xl mx-3 text-none secondary-color white--text" @click="searchPage">{{$t('blog.btnSearch')}}</v-btn>
                                                                </v-list-item>
                                                            </v-list>

                                                            <v-divider></v-divider>

                                                            <v-list>
                                                                <v-row justify="center" class="mt-4" v-if="this.productos !== null && isSearch === false">
                                                                    <v-col cols="12" lg="2" md="2" sm="12" xs="12" class="px-5" align="center" v-for="(prod, index) in this.productos.data" :key="index">
                                                                        <!--<v-img src="/menu-search/plasticos.png" contain max-height="65"></v-img>-->
                                                                        <nuxt-link :to="`/products/${prod.id}`" class="decoration-none">
                                                                            <v-img :src="basePathApiUrl + prod.attributes.imgMiniature.data.attributes.url" contain max-height="65"></v-img>
                                                                            <p>{{prod.attributes.name}}</p>
                                                                        </nuxt-link>
                                                                    </v-col>
                                                                </v-row>

                                                                <v-row v-if="isSearch === true" class="justify-center mx-5 px-2" >
                                                                    <v-col cols="12" v-if="sproductos.length>0">
                                                                        <p class="font-weight-bold font-body-all">Productos</p>
                                                                        <v-list>
                                                                            <v-list-item v-for="(item, index) in sproductos" :key="index+item.id">
                                                                                {{item.attributes.name}}
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-col>
                                                                    <v-col cols="12" v-if="smercados.length>0">
                                                                        <p class="font-weight-bold font-body-all">Mercado</p>
                                                                        <v-list>
                                                                            <v-list-item v-for="(item, index) in smercados" :key="index+item.id">
                                                                                {{item.attributes.nameMarket}}
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-col>
                                                                    <v-col cols="12" v-if="smarcas.length>0">
                                                                        <p class="font-weight-bold font-body-all">Marcas</p>
                                                                        <v-list>
                                                                            <v-list-item v-for="(item, index) in smarcas" :key="index+item.id">
                                                                                {{item.attributes.title}}
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-col>
                                                                    <v-col cols="12" v-if="spruebas.length>0">
                                                                        <p class="font-weight-bold font-body-all">Pruebas</p>
                                                                        <v-list>
                                                                            <v-list-item v-for="(item, index) in spruebas" :key="index+item.id">
                                                                                {{item.attributes.name}}
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-col>
                                                                    <v-col cols="12" align="center" v-if="spruebas.length===0 && smarcas.length===0 && smercados.length===0 && sproductos.length===0">
                                                                        <p class="font-body-all">No se encontraron resultados</p>
                                                                    </v-col>
                                                                </v-row>
                                                                
                                                                <!--<v-row justify="center" class="mt-4">
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
                                                                </v-row>-->
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
                                <!--<v-select rounded outlined :items="lang" item-value="code" item-text="name" v-model="langModel" dense class="select mt-1 text-none"></v-select>-->
                                <!--<v-btn color="#773DBD" rounded class="ml-2 mt-1 white--text text-none"  @click="dialog = !dialog" v-if="!this.$route.path.includes('client')">{{ $t('appbar.login') }}</v-btn>-->
                                <v-menu min-width="200px" rounded offset-y v-if="this.$route.path.includes('client')">
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon x-large v-on="on">
                                            <v-avatar color="#773DBD" size="40">
                                                <v-icon dark color="white">mdi-account</v-icon>
                                            </v-avatar>
                                        </v-btn>
                                    </template>
                                    <v-card elevation="10" class="">
                                        <v-list-item-content class="justify-center">
                                            <div class="mx-auto text-center">
                                                <v-btn depressed rounded text to="/client/dashboard">Dashboard</v-btn>
                                                <v-divider class="my-3"></v-divider>
                                                <v-btn depressed rounded text to="/client/card">Lista de Compras</v-btn>
                                                <v-divider class="my-3"></v-divider>
                                                <v-btn depressed rounded text to="/client/account">Mi Cuenta</v-btn>
                                                <v-divider class="my-3"></v-divider>
                                                <v-btn depressed rounded text to="/">Cerrar Sesion</v-btn>
                                            </div>
                                        </v-list-item-content>
                                    </v-card>
                                </v-menu>
                            </v-tabs>
                        </v-col>
                    </v-row>
                </v-container>
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
        </div>

        <div v-if="this.$route.path.includes('campanias')">
            <v-app-bar :clipped-left="clipped" fixed color="white" app elevation="2" >
                <!--<v-toolbar-title :class="{'ml-16': windowSize > 1129}" />-->
                <v-container fluid>
                    <v-row justify="center">
                        <v-col cols="3" md="2" sm="3" xs="3">
                            <nuxt-link to="/campanias">
                                <img src="../static/Logo-polnac.png" alt="logo polnac" class="mt-3" :height="windowSize<1129 ? '20' : ''"/>
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
                                <div class="d-flex black--text text-none mx-0 px-0 font-size-14 decoration-none">
                                    <p class="mt-4">(55) 2585 2650</p>
                                    <v-img src="/home/WhatsApp.png" contain max-height="24" class="ml-3 mt-3"></v-img>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-app-bar>
        </div>

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
                        <v-list-item-title class="text-none">{{ $t('appbar.inicio') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Polnac</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="localePath('aboutus', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.aboutus') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="localePath('polnacGroup', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{$t('appbar.grupoPolnac')}}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/polnac-wiki">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Polnac Wiki</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <!--<v-list-item link>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Colaboradores</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>-->
                <v-list-item link :to="localePath('workAtPolnac', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{$t('appbar.trabajo')}}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <!--<v-list-item link to="/search-products">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.products') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>-->
                <v-list-item link :to="localePath('services', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.services') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <!--<v-list-item link to="/laboratory">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Pruebas de Laboratorio</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>-->
                <!--<v-list-item link>
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
                </v-list-item>-->
                <v-list-item link :to="localePath('innovation', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.innovation') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <!--<v-list-item link >
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Investigacion & Desarrollo</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>-->
                <v-list-item link :to="localePath('laboratory', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{$t('appbar.laboratorio')}}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <!--<v-list-item link to="/polnac-blue">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">POLNAC Blue</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>-->
                <v-list-item link :to="localePath('market', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.market') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/blogs" v-if="lang=== 'es'">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">Blog</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="localePath('contact', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.contact') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="localePath('frequentlyQuestions', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{ $t('appbar.preguntas') }}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="localePath('branchOffices', this.lang)">
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">{{$t('appbar.sucursales')}}</v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content> 
                        <v-list-item-title class="text-none">
                            {{ $t('appbar.idioma') }}
                            <v-row>
                                <v-col cols="6" align-self="center" align="center">
                                    
                                </v-col>
                                <v-col cols="12" align-self="center" align="center">
                                    <!--<v-select title="lang" name="lang-mb" v-model="$i18n.locale" @change="() => {setLanguaje($i18n.locale)}"  class="lang-border px-5 py-2"
                                    :items="$i18n.locales"></v-select>-->
                                    <v-select rounded outlined :items="$i18n.locales" item-value="code" item-text="name" v-model="$i18n.locale" 
                                    @change="() => {setLanguaje($i18n.locale)}" dense class="mt-1 text-none"></v-select>
                                </v-col>
                            </v-row>
                        </v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content> 
                        <v-list-item-title>
                            <!--div class="d-flex justify-space-between">
                                <v-btn rounded color="#19D3C5" class="text-none px-5">Acceder</v-btn>
                                <v-btn rounded outlined color="#19D3C5" class="text-none px-5"><span class="black--text">Registro</span></v-btn>
                            </div>-->
                        </v-list-item-title>  
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-dialog v-model="dialog" max-width="700" overlay-color="#2E2E65">
            <v-card elevation="6">

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="5" class="bg-login"></v-col>
                        <v-col cols="7">
                            <p class="black--text font-size-20 text-center mt-10">{{ showLogin === true ? 'Ingrese sus credenciales' : 'Selecciona tu perfil'}}</p>
                            <v-card class="shadow-out">
                                <v-container class="pa-1">
                                    <v-item-group v-model="selected">
                                        <v-row v-if="!showLogin">
                                            <v-col v-for="(item, i) in options" :key="i" cols="12" align="end">
                                                <v-item v-slot="{ active, toggle }" >
                                                    <div @click="() => testMethod(i)">
                                                        <div @click="toggle" :class="{'border-login': active, 'border-login-out': !active }">
                                                            <v-btn icon color="#773DBD" class="mx-4" >
                                                                <v-icon right v-if="active">{{ active ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}</v-icon>
                                                            </v-btn>
                                                            <v-img :src="item.img" contain max-height="40"></v-img>
                                                            <p class="font-size-20 text-center black--text mt-2 mb-4">{{ item.text }}</p>
                                                        </div>
                                                    </div>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                        <v-row v-if="showLogin">
                                            <v-col cols="12">
                                                <v-form @submit.prevent="login">
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field label="User Name" solo outlined rounded :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Password" type="password" solo outlined rounded :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Client ID" solo outlined rounded :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Client Secret" solo outlined rounded :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-btn type="submit" color="#19D3C5" class="text-none px-16 rounded-lg">Log In </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-col>
                                        </v-row>
                                    </v-item-group>
                                </v-container>
                            </v-card>
                            <div class="d-flex flex-column justify-center">
                                <div class="d-flex justify-center" v-if="!showLogin">
                                    <v-btn class="text-none px-16 rounded-lg mt-2" color="#19D3C5" @click="redirection">
                                        Entrar
                                    </v-btn>
                                </div>
                                <div class="d-flex justify-center">
                                    <a href="" class="decoration-none black--text text-center mt-5">¿Aún no eres cliente? Solicita tu registro aquí.</a>
                                </div>
                            </div>
                           
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

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
            langL: ['ESP', 'ENG'],
            menu: false,
            dialog: false,
            options: [
                {text: 'Cliente', img: require('../static/login/cliente.png')},
                {text: 'Colaborador', img: require('../static/login/colaborador.png')},
            ],
            selected: null,
            langModel: 'ESP',
            //productos: null,
            marcas: null, 
            mercados: null, 
            pruebas: null,
            blogs: null, 
            smarcas: null,
            smercados: null,
            spruebas: null,
            sblogs: null,
            sproductos: null,
            search: null,
            isSearch: false,
            showLogin: false,
            optionLogin: 0,
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
            },
            url : ''
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize', 'basePathApiUrl', 'productos', 'lang']),
    },
    mounted() {
        this.getAllProductos()
        this.getDatos()
        this.url = this.$route.path
        //console.log(this.url)
    },
    methods: {
        ...mapActions(['setLanguaje']),
        translate(langL){
            if(langL === 'ESP'){
                this.$i18n.locale = 'es'
            }
            if(langL === 'ENG'){
                this.$i18n.locale = 'eng'
            }
        },
        login(){
            this.dialog = false
            this.$router.push('/client/dashboard')
        },
        clean(){
            this.isSearch = false
            //this.getDatos()
        },
        async searchPage(){
            //this.getDatos()
            this.search === null ? this.isSearch = false : this.isSearch = true 
            //console.log(this.sproductos)
            this.sproductos = this.productos
            this.smarcas = this.marcas 
            this.smercados = this.mercados 
            this.spruebas = this.pruebas 
            this.sblogs = this.blogs

            this.sproductos = this.sproductos.data.filter(item => item.attributes.name.toLowerCase().match(this.search.toLowerCase()) )
            this.smarcas = this.smarcas.data.filter(item =>  item.attributes.title.toLowerCase().match(this.search.toLowerCase())  )
            this.smercados = this.smercados.data.filter(item =>  item.attributes.nameMarket.toLowerCase().match(this.search.toLowerCase()))
            this.spruebas = this.spruebas.data.filter(item => item.attributes.name.toLowerCase().match(this.search.toLowerCase())  )
            this.sblogs = this.sblogs.data.filter(item => item.attributes.title.toLowerCase().match(this.search.toLowerCase()) )

        },
        async getAllProductos(){
            //this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        },
        async getDatos(){
            //this.productos = await this.$store.dispatch('getAllProducts')
            this.mercados = await  this.$store.dispatch('getAllMarkets')
            this.marcas = await  this.$store.dispatch('getAllMarcas')
            this.blogs = await this.$store.dispatch('getAllBlogs')
            this.pruebas = await this.$store.dispatch('getAllTipoPruebas')

            //console.log(this.blogs)
        },
        testMethod(toggle){
            this.optionLogin = toggle
        },
        redirection(){
            if(this.optionLogin === 0){
                this.showLogin = true
            } 
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
.bg-login{
    background-image: url('../static/login/login.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

.border-login{
    border: 1px solid #773DBD;
    border-radius: 5px !important;
    border-color: #773DBD !important;
    border-width: 1px !important;
    text-decoration: dotted;
}
.border-login-out{
    border: 1px solid #130A1F;
    border-radius: 5px !important;
    border-color: #130A1F !important;
    border-width: 1px !important;
    text-decoration: dotted;
}
</style>