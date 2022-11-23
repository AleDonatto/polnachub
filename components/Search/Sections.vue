<template>
    <div v-if="pageSearchProducts === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <!--v-if="tablePE.length < 1 && tablePP.length < 1 && tableEstirenicos.length < 1 && tableRotomoldeo.length < 1
            && tableRotomoldeo.length < 1 && tableMasterbatch.length < 1 && tableIngenieria.length <1 && tableCompuestosprecolor.length < 1
            && tableCompuestoscargados.length < 1 && tableTermoplasticos.length < 1 && tablePVC.length < 1 && tableAditivos.length < 1
            && tableCalcio.length < 1 && tableBioplasticos.length < 1 && tableHules.length < 1 && tablePolvoC.length < 1"-->
            <v-container  v-if="tablePE.length < 1 && tablePP.length < 1 && tableEstirenicos.length < 1 && tableRotomoldeo.length < 1
            && tableRotomoldeo.length < 1 && tableMasterbatch.length < 1 && tableIngenieria.length <1 && tableCompuestosprecolor.length < 1
            && tableCompuestoscargados.length < 1 && tableTermoplasticos.length < 1 && tablePVC.length < 1 && tableAditivos.length < 1
            && tableCalcio.length < 1 && tableBioplasticos.length < 1 && tableHules.length < 1 && tablePolvoC.length < 1">
                <v-row justify="center">
                    <v-col cols="12" align="center" class="mt-16">
                        <!--<h1 class="font-archivo font-weight-bold">Busca en nuestro amplio catálogo por filtros o categorías.</h1>-->
                        <h1 class="font-archivo font-weight-bold">{{pageSearchProducts.titleSectionSearch}}</h1>
                        <!--<p>{{
                            tablePE.length +'-'+
                            tablePP.length +'-'+ 
                            tableEstirenicos.length +'-'+
                            tableRotomoldeo.length +'-'+
                            tableMasterbatch.length +'-'+
                            tableIngenieria.length +'-'+
                            tableCompuestosprecolor.length +'-'+
                            tableCalcio.length +'-'+
                            tableBioplasticos.length +'-'+
                            tableHules.length +'-'+
                            tablePolvoC.length
                        }}</p>-->
                    </v-col>
                </v-row>

                <!--<v-row justify="center" class="mt-10 mb-10">
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/1" class="text-decoration-none">
                            <v-img src="/menu-search/plasticos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Plásticos de Ingeniería</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/2" class="text-decoration-none">
                            <v-img src="/menu-search/compuesto.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Compuestos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/3" class="text-decoration-none">
                            <v-img src="/menu-search/masterbach.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Masterbatch</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/3" class="text-decoration-none">
                            <v-img src="/menu-search/aditivos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Concentrados de Aditivos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/4" class="text-decoration-none">
                            <v-img src="/menu-search/carbonato.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Carbonato de Calcio</p>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/5" class="text-decoration-none">
                            <v-img src="/menu-search/rotomoldeo.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Rotomoldeo</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/6" class="text-decoration-none">
                            <v-img src="/menu-search/pvc.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">PVC</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/7" class="text-decoration-none">
                            <v-img src="/menu-search/elastomeros.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Elastómeros Termoplásticos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/biodegradables.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Biodegradables</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/hules.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Hules</p>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/polietileno.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Polietileno</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/polipropileno.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Polipropileno</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/estirenicos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Estirénicos</p>
                        </nuxt-link>
                    </v-col>
                </v-row>-->
                <v-row justify="center" class="mt-10 mb-10" v-if="this.productos !== null">
                    <v-col cols="6" lg="2" md="2" align="center" v-for="(prod, index) in this.productos.data" :key="index">
                        <nuxt-link :to="`/products/${prod.id}`" class="text-decoration-none">
                            <!--<v-img src="/menu-search/plasticos.png" contain max-height="90"></v-img>-->
                            <v-img :src="basePathApiUrl + prod.attributes.imgMiniature.data.attributes.url" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">{{prod.attributes.name}}</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </v-container>

            <!--v-else -->
            <v-container fluid class="mb-10 px-16" v-else>
                <div class="text-center">

                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="() =>  removeTagsTables('producto') " v-if="valProducto!==''">
                        {{this.valProducto}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="() =>  removeTagsTables('fabricante') " v-if="valFabricante!==''">
                        {{this.valFabricante}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="() =>  removeTagsTables('mercado') " v-if="valMercado!==''">
                        {{this.valMercado}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="() =>  removeTagsTables('transformacion') " v-if="valMTransformacion!==''">
                        {{this.valMTransformacion}}
                    </v-chip>

                    <v-chip class="ma-2 pa-5" close color="red" text-color="white" @click:close="cleanTags" v-if="valProducto!=='' && valFabricante!=='' && valMercado!=='' && valMTransformacion!==''">
                        Remove
                    </v-chip>
                </div>

                <v-card class="mt-10 shadow-out" v-if="tablePE!==null">
                    <div class="" v-if="tablePE.length > 0">
                        <v-card-title>
                            Polyethylene
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersPE"
                            :items="tablePE"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePP!==null">
                    <div v-if="tablePP.length > 0">
                        <v-card-title>
                            Polypropylene
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersPP"
                            :items="tablePP"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableEstirenicos!==null">
                    <div v-if="tableEstirenicos.length > 0">
                        <v-card-title>
                            Estirenicos
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersEstirenicos"
                            :items="tableEstirenicos"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableRotomoldeo!==null">
                    <div v-if="tableRotomoldeo.length >1">
                        <v-card-title>
                            Rotomolding compounds colors
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersRotomoldeo"
                            :items="tableRotomoldeo"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableMasterbatch!==null">
                    <div v-if="tableMasterbatch.length > 0">
                        <v-card-title>
                            MasterBatch
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersMaster"
                            :items="tableMasterbatch"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableIngenieria!==null">
                    <div v-if="tableIngenieria.length > 0">
                        <v-card-title>
                            Ingeniería
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersIng"
                            :items="tableIngenieria"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableCompuestosprecolor!==null">
                    <div v-if="tableCompuestosprecolor.length > 0">
                        <v-card-title>
                            Compuestos precolor
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersComPrecolor"
                            :items="tableCompuestosprecolor"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableCompuestoscargados!==null">
                    <div v-if="tableCompuestoscargados.length > 0">
                        <v-card-title>
                            Blens
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersComCargados"
                            :items="tableCompuestoscargados"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableTermoplasticos!==null">
                    <div v-if="tableTermoplasticos.length > 0">
                        <v-card-title>
                            Thermoplastic Elastomers
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersTermPlasticos"
                            :items="tableTermoplasticos"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePVC!==null">
                    <div v-if="tablePVC.length > 0">
                        <v-card-title>
                            PVC
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersPVC"
                            :items="tablePVC"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableAditivos!==null">
                    <div v-if="tableAditivos.length > 0">
                        <v-card-title>
                            Additives
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersAditivos"
                            :items="tableAditivos"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableCalcio!==null">
                    <div v-if="tableCalcio.length > 0">
                        <v-card-title>
                            Calcium Carbonate
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersCalcio"
                            :items="tableCalcio"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableBioplasticos!==null">
                    <div v-if="tableBioplasticos.length > 0">
                        <v-card-title>
                            Bioplastics
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersBioplasticos"
                            :items="tableBioplasticos"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                    
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableHules!==null">
                    <div v-if="tableHules.length > 0">
                        <v-card-title>
                            Thermoset Elastomers
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersHules"
                            :items="tableHules"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>

                        </v-data-table>
                    </div>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePolvoC!==null">
                    <div v-if="tablePolvoC.length > 0">
                        <v-card-title>
                            Calcium carbonate powder
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        
                        <v-data-table
                            :headers="headersPolvo"
                            :items="tablePolvoC"
                            :items-per-page="10"
                            :search="search"
                            class="elevation-1 mt-5 mb-16"
                        >
                            <template v-slot:item.htecnica="{ item }" class="">
                                <div class="text-center mt-1 pointer">
                                    <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                        <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                        <p>Hoja técnica</p>
                                    </a>
                                </div>
                            </template>
                        </v-data-table>
                    </div>
                </v-card>

            </v-container>

        </section>

        <v-dialog v-model="showMsgProd" width="700" overlay-color="#2E2E65">
                <v-card elevation="6">
                    <v-card-title>
                        <v-row justify="end">
                            <v-col cols="2">
                                <v-btn outlined color="white"  @click="closeDialog">
                                    <v-img src="/contact/line.png" contain max-width="25"></v-img>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <v-card-text>
                        <v-row justify="center">
                            <!--<v-col cols="6">
                                <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                            </v-col>-->
                            <v-col cols="12">
                                <h1 class="font-size-24 font-weight-bold text-center black--text">Buscador de Productos</h1>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-body-all text-center text-center black--text">No hay resultados en la búsqueda.</p>
                            </v-col>
                            <v-col cols="7" class="mt-5">
                                <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="closeDialog">Entendido</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                    </v-card-actions>
                </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            headersPE: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Description__c'},
            ],
            headersPP: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD__c'},
                {text: 'Flexural Modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Description__c'},
            ],
            headersEstirenicos: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD__c'},
                {text: 'Flexural Modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersRotomoldeo: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Color', value: 'Color__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Base Resin', value: ''},
                {text: 'Additive', value: 'Aditivo__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersMaster: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Color', value: 'Color__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Base Resin', value: ''},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersIng: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Viscosity', value: 'Dureza_Shore__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD_P__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersComPrecolor: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD_P__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersComCargados: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD_P__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersTermPlasticos: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Hardness/Shore', value: 'Dureza_Shore__c'},
                {text: 'Additive', value: ''},
                {text: 'Color', value: 'Color__c'},
                {text: 'Manufacturing Process', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersPVC: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Hardness/Shore', value: 'Dureza_Shore__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersAditivos:[
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersCalcio:[
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Additive', value: 'Aditivo__c'},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersBioplasticos:[
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Carrier', value: 'Carrier__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Melt Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersHules:[
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Particle Size', value: ''},
                {text: 'Treatment ', value: 'Concentraci_n__c'},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersPolvo:[
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Manufacturer', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Product Name', value: 'Name'},
                {text: 'Particle Size', value: ''},
                {text: 'Manufacturing Process', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            search: '',
            productos: null,
        }
    },
    computed: {
        ...mapState([
            'windowHeight',
            'windowSize',
            'pageSearchProducts',
            'valMercado',
            'valFabricante',
            'valProducto',
            'valMTransformacion',
            'showMsgProd',
            'tablePruebas',
            'tablePE',
            'tablePP',
            'tableEstirenicos',
            'tableRotomoldeo',
            'tableMasterbatch',
            'tableIngenieria',
            'tableCompuestosprecolor',
            'tableCompuestoscargados',
            'tableTermoplasticos',
            'tablePVC',
            'tableAditivos',
            'tableCalcio',
            'tableBioplasticos',
            'tableHules',
            'tablePolvoC',
            'basePathApiUrl',
        ]),
    },
    beforeMount(){
        this.getProductos()
    },
    methods: {
        closeDialog(){
            this.$store.commit('StateAssign', {showMsgProd: false})
        },
        ...mapActions(['cleanTags']),
        removeTagsTables(tipo){
            switch(tipo){
                case 'producto':
                    this.$store.commit('StateAssign', {valProducto: ''})
                    break
                case 'fabricante':
                    this.$store.commit('StateAssign', {valFabricante: ''})
                    break
                case 'mercado': 
                    this.$store.commit('StateAssign', {valMercado: ''})
                    break
                case 'transformacion': 
                    this.$store.commit('StateAssign', {valMTransformacion: ''}) 
                    break 
            }
            const filters = {
                producto: this.valProducto,
                mercado: this.valMercado,
                mTransformacion: this.valMTransformacion,
                fabricante: this.valFabricante,
            }
            console.log(filters)
            this.$store.dispatch('searchProducts', filters)
        },
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.font-title{
    font-family: 'Archivo' !important;
}
.text-decoration-none{
    text-decoration: none !important;
}

</style>