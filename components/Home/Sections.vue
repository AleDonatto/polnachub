<template>
    <!--<div v-if="pageHome === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>-->
    <div>
        <section>
            <v-container class="">
                <div class="my-10 mx-10">
                    <v-row justify="center">
                        <v-col cols="12" xl="9" class="">
                            <v-row>
                                <v-col md="6" sm="12" xs="12" align-self="center" align="center">
                                    <h1 class="font-archivo font-title text-left" :class="{'headline': windowSize < 1129, 'display-1': windowSize > 1129}">
                                        <span class="font-weigth-bold">{{ $t('home.secabout.polnac') }}</span> <br>
                                        <span class="text-teal">{{ $t('home.secabout.year') }}</span> 
                                    </h1>
                                    <!--<div class="font-archivo font-title text-left font-weigth-bold" :class="{'headline': windowSize < 1129, 'display-1': windowSize > 1129}" v-html="$md.render(pageHome.txtPolnac)"></div>-->


                                    <!--<v-img src="./video.png" contain max-height="350" max-width="350" v-if="windowSize < 1129"></v-img>-->
                                    <!--<iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" 
                                        :src="pageHome.linkVideo" v-if="windowSize < 1129">
                                    </iframe>-->
                                    <iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" v-if="windowSize < 1129"
                                        src="https://www.youtube.com/embed/CJ9LyIMleDA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com">
                                    </iframe>

                                    <p class="text-body-all my-5 text-left">
                                        Desde 1984 <span class="font-weight-bold">POLNAC</span> ha construido una historia basada en innovación, compromiso y mejora continua. <span class="font-weight-bold">POLNAC</span> siempre a la vanguardia. 
                                    </p>
                                    <!--<div class="text-body-all my-5 text-left" v-html="$md.render(pageHome.txtDesPolnac)"></div>-->

                                    <div class="d-flex" :class="{'justify-center': windowSize < 1129, 'justify-start': windowSize > 1129}">
                                        <nuxt-link to="/polnac-group" class="decoration-none">
                                            <v-btn class="rounded-xl px-10 body-1 py-5 white--text text-none secondary-color">{{ $t('home.btnabout') }}</v-btn>
                                            <!--<v-btn class="rounded-xl px-10 body-1 py-5 white--text text-none secondary-color">{{ pageHome.txtbtnPolnac }}</v-btn>-->
                                        </nuxt-link>
                                    </div>

                                </v-col>
                                <v-col md="6" sm="12" xs="5" class="" align="center" v-if="windowSize > 1129">
                                    <!--<v-img src="./video.png" contain max-height="350" max-width="350"></v-img>-->
                                    <iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" 
                                        src="https://www.youtube.com/embed/CJ9LyIMleDA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com">
                                    </iframe>
                                    <!--<iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="310" type="text/html" 
                                        :src="pageHome.linkVideo">
                                    </iframe>-->

                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <section>
            <div class="my-10">
                <h1 class="font-archivo font-size-40 font-weight-bold text-center my-10">{{ $t('home.titledestacados') }}</h1>
                <!--<h1 class="font-archivo font-size-40 font-weight-bold text-center my-10">{{ pageHome.featured.title }}</h1>-->
                <v-row>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-1" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-2" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-3 px-10">
                        <div class="" style="height: 100%;">
                            <h4 class="font-size-20 white--text text-img ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h4>
                            <p class="white--text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel accumsan...</p>
                            <p class="white--text text-right">...Ver mas</p>
                        </div>
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-4" v-if="windowSize > 1129">
                    </v-col>
                </v-row>
                <div class="d-flex justify-center my-10">
                    <v-btn class="rounded-lg text-body-all body-1 px-10 py-4 text-none default-color" >{{ $t('home.btnproducts') }}</v-btn>
                    <!--<v-btn class="rounded-lg text-body-all body-1 px-10 py-4 text-none default-color" >{{ pageHome.txtbtnProducts }}</v-btn>-->
                </div>
            </div>
        </section>

        <section>
            <v-container>
                <h1 class="font-archivo font-size-40 font-weight-bold black--text text-center my-10">{{ $t('home.catproducts') }}</h1>
                <!--<h1 class="font-archivo font-size-40 font-weight-bold black--text text-center my-10">{{ pageHome.txtCatProducts }}</h1>-->

                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/plasticos-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-plasticos.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Plástico de Ingeniería</p>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/compuestos-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-compuestos.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Compuestos</p>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/masterbach-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-masterbach.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Masterbach</p>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/aditivos-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-aditivos.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Concentrados de Aditivos</p>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center" v-if="windowSize < 1129">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/calcio-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-carbonato.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Concentrado de Calcio</p>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center" v-if="windowSize < 1129">
                        <v-hover v-slot="{ hover }">
                            <v-img class="plasticos" src="/rotomoldeo-mb.png" contain max-width="250">
                                <v-expand-transition>
                                    <v-img src="/h-rotomoldeo.png" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <p class="text-left mt-2">Rotomoldeo</p>
                    </v-col>
                </v-row>
            </v-container>
            <v-container v-if="windowSize > 1129">
                <v-sheet class="mx-auto" height="250">
                    <v-slide-group v-model="model" class="px-4 py-5" show-arrows>
                        <v-slide-item v-for="(item, index) in productos" :key="index" >
                            <nuxt-link :to="`/products/${index}`">
                                <v-card height="200" class="shadow-out">
                                    <v-hover v-slot="{ hover }">
                                        <v-card class="mx-5 my-5 card-blog shadow-out" width="220" height="250">
                                            <v-img :src="item.img" style="width: 100%" alt="pruebas">
                                                <v-expand-transition>
                                                    
                                                <!--<div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;"></div>-->
                                                <v-img :src="item.imgH" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;" alt="pruebas"></v-img>
                                                </v-expand-transition>
                                            </v-img>
                                        </v-card>
                                    </v-hover>
                                </v-card>
                            </nuxt-link>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
                <!--<v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                            <v-expand-transition>

                            <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;"></div>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>-->
            </v-container>
            <v-container>
                <div class="d-flex justify-center mb-10">
                    <v-btn class="rounded-lg white--text body-1 px-10 py-4 text-none secondary-color" rounded>{{ $t('home.btncategories') }}</v-btn>
                    <!--<v-btn class="rounded-lg white--text body-1 px-10 py-4 text-none secondary-color" rounded>{{ pageHome.txtbtnCatProducts }}</v-btn>-->
                </div>
            </v-container>
        </section>

        <section>
            <!--<div class="bg-testimonios my-10">
                <v-container fluid>
                    <h1 class="font-archivo text-h3 font-weight-bold white--text text-center my-10">{{ $t('home.titletestimonials') }}</h1>

                    <v-sheet class="mx-auto my-10 bg-color" max-width="1420">
                        <v-slide-group show-arrows center-active>
                            <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
                                <v-card class="mx-5 px-5 my-2" width="400" :color="n%2===0 ? 'rgba(9, 187, 174, 1)' : 'white'">
                                    <v-card-text @click="toggle">
                                        <p class="text-h5 text-uppercase text-center font-weight-bold mt-5" :class="{'black--text': n%2===0 , 'text-color-testimonios': active === false }">
                                            Criser
                                        </p>
                                        <p class="ma-0 text-h6 text-center" :class="{'black--text': n%2===0 , 'text-color-testimonios': n%2!==0 }">
                                            Juan Carlos Aguirre Palomo
                                        </p>
                                        <p class="ma-0 text-center" :class="{'black--text': n%2===0 , 'text-color-testimonios': n%2!==0 }">Jefe de Planeación y Compras</p>
                                        <div class="text--primary text-center">
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'" >mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “Agradecemos mucho su apertura para negociar cualquier tema comercial y de logística, 
                                            así como su apoyo en urgencias y búsqueda de nuevos materiales. Siempre buscando aportar 
                                            soluciones y atentos a las recomendaciones para mejorar su servicio”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
        
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>

                </v-container>
            </div>-->
            <div class="bg-testimonios">
                <v-carousel :show-arrows="false" hide-delimiter-background class="my-10" height="600">
                    <h1 class="font-archivo font-size-40 font-weight-bold white--text text-center my-10">{{ $t('home.titletestimonials') }}</h1>
                    <!--<h1 class="font-archivo font-size-40 font-weight-bold white--text text-center my-10">{{ pageHome.txtTestimonials }}</h1>-->
                    <v-carousel-item v-for="(item,i) in items" :key="i" >
                        
                        <v-row justify="center" class="mx-5" v-if="windowSize > 1129">
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                <v-card class="my-2" height="300" color="white">
                                    <v-card-text>
                                        <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 text-color-testimonios">
                                            CHIAPLAST
                                        </p>
                                        <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center text-color-testimonios">
                                            María Luisa Hernández Vásquez
                                        </p>
                                        <p class="ma-0 text-center text-color-testimonios">Gerente de Compras</p>
                                        <div class="text--primary text-center">
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “Se ha consolidado una estrecha relación comercial con POLNAC, ya que nos han ofrecido precios atractivos, 
                                            calidad en materiales y puntualidad en las entregas, y esto, a su vez, nos ha permitido optimizar nuestros 
                                            procesos y ser más competitivos en el mercado”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                <v-card class=" my-2" height="330" color="rgba(9, 187, 174, 1)">
                                    <v-card-text>
                                        <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 black--text" >
                                            Criser
                                        </p>
                                        <p class="font-archivo font-size-20 ma-0 font-weight-bold text-center black--text">
                                            Juan Carlos Aguirre Palomo
                                        </p>
                                        <p class="ma-0 text-center black--text">Jefe de Planeación y Compras</p>
                                        <div class="text--primary text-center">
                                            <v-icon color="white" >mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “Agradecemos mucho su apertura para negociar cualquier tema comercial y de logística, 
                                            así como su apoyo en urgencias y búsqueda de nuevos materiales. Siempre buscando aportar 
                                            soluciones y atentos a las recomendaciones para mejorar su servicio”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12" align="center" align-self="center">
                                <v-card class="my-2" height="300" color="white">
                                    <v-card-text>
                                        <p class="font-archivo font-size-24 text-uppercase text-center font-weight-bold mt-2 text-color-testimonios">
                                            {{ windowSize > 1390 ?  'Plásticos Técnicos Mexicanos' : ' P T M ' }}
                                        </p>
                                        <p class="ma-0 font-archivo font-size-20 font-weight-bold text-center text-color-testimonios">
                                            José Juan Reyes Chávez
                                        </p>
                                        <p class="ma-0 text-center text-color-testimonios">Comprador</p>
                                        <div class="text--primary text-center">
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                            <v-icon color="#19D3C5">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “En POLNAC hemos encontrado soluciones prácticas para las necesidades de nuestra compañía, 
                                            inmediata respuesta y variedad en productos, así como un amplio conocimiento técnico que nos 
                                            ha permitido ser más eficientes en nuestros procesos y costos”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row v-if="windowSize < 1129 ">
                            <v-col cols="12" align="center" align-self="center">
                                <v-card class="mx-5 my-2" height="330" color="rgba(9, 187, 174, 1)">
                                    <v-card-text>
                                        <p class="text-h5 text-uppercase text-center font-weight-bold mt-5 black--text" >
                                            Criser
                                        </p>
                                        <p class="ma-0 text-h6 text-center black--text">
                                            Juan Carlos Aguirre Palomo
                                        </p>
                                        <p class="ma-0 text-center black--text">Jefe de Planeación y Compras</p>
                                        <div class="text--primary text-center">
                                            <v-icon color="white" >mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                            <v-icon color="white">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “Agradecemos mucho su apertura para negociar cualquier tema comercial y de logística, 
                                            así como su apoyo en urgencias y búsqueda de nuevos materiales. Siempre buscando aportar 
                                            soluciones y atentos a las recomendaciones para mejorar su servicio”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>

                    </v-carousel-item>
                </v-carousel>
            </div>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" xl="9" lg="12" md="12">
                        <v-row justify="center" class="mt-10 mx-2">
                            <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center">
                                <h1 class="display-2 text-left">Empresa <span class="font-weight-bold text-map">100% mexicana </span> de <span class="text-teal font-weight-bold">alcance mundial</span></h1>
                                <!--<div class="display-2 text-left" v-html="$md.render( pageHome.txtCompany)"></div>-->

                                <p class="text-body-all mt-2 text-justify">
                                    <span class="font-weight-bold">POLNAC</span> brinda un servicio integral, eficiente y confiable a través de una atención personalizada enfocada en las necesidades y especificaciones de cada cliente.
                                </p>
                                <!--<div class="text-body-all mt-2 text-justify" v-html="$md.render( pageHome.txtDesCompany)"></div>-->
                                
                            </v-col>
                            <v-col lg="6" md="6" sm="12" xs="12" align="center">
                                <v-img src="/map.png" contain max-height="450" max-width="450" alt="sucursales"></v-img >
                                <!--<v-img :src="basePathApiUrl + pageHome.imgOffices.data.attributes.url" contain max-height="450" max-width="450" alt="sucursales"></v-img >-->
                            </v-col>
                            <v-col v-if="windowSize < 1129">
                                <p class="text-body-all text-justify">Sucursales nacionales <span class="font-weight-bold">estratégicamente</span> ubicadas en: Monterrey, Guadalajara, Estado de México, San Luis Potosí, León, Mérida, Puebla, Querétaro.</p>
                                <!--<div class="text-body-all text-justify" v-html="$md.render( pageHome.txtOffices)"></div>-->
                            </v-col>
                        </v-row>
                        <v-row :class="{'max-5': windowSize>1129 }">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h4': windowSize < 1129}">+300,000 m<sup>2</sup></h1>
                                <p class="text-body-all text-center">de <span class="font-weight-bold">infraestructura</span> para la fabricación de productos</p>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h4': windowSize < 1129}">+90,000 ton</h1>
                                <p class="text-body-all text-center">de <span class="font-weight-bold">capacidad de producción</span> anual</p>
                            </v-col>
                            <!--<v-col cols="12" lg="3" md="3" sm="12" xs="12" v-for="(item, index) in pageHome.tecOffices.slice(0,2)" :key="index">                                
                                --<div class="text-map font-weight-bold text-center" v-html="$md.render(item.title)"></div>--
                                <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h4': windowSize < 1129}">{{item.title}}</h1>
                                <div class="text-body-all text-center" v-html="$md.render(item.description)"></div>
                            </v-col>-->
                            <v-col lg="6" md="6" sm="12" xs="12" v-if="windowSize > 1129">
                                <p class="text-body-all text-left">Sucursales nacionales <span class="font-weight-bold">estratégicamente</span> ubicadas en: Monterrey, Guadalajara, Estado de México, San Luis Potosí, León, Mérida, Puebla, Querétaro.</p>
                                <!--<div class="text-body-all text-left" v-html="$md.render( pageHome.txtOffices)"></div>-->
                            </v-col>
                        </v-row>

                        <v-row justify="center" class="mx-5">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/plantas.png" contain max-height="70"></v-img>
                                <p class="text-body-all text-center mt-2">Tres avanzadas <span class="font-weight-bold">plantas de fabricación</span> en México y Estados Unidos</p>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/sucursales.png" contain max-height="70"></v-img>
                                <p class="text-body-all text-center mt-2">Cinco <span class="font-weight-bold">sucursales internacionales</span>: USA, Europa, Colombia, Ecuador y Guatemala</p>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/almacen.png" contain max-height="70"></v-img>
                                <p class="text-body-all text-center mt-2">Equipos de <span class="font-weight-bold">almacenamiento</span> y <span class="font-weight-bold">transporte</span> de vanguardia</p>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/ferrocarril.png" contain max-height="70"></v-img>
                                <p class=" text-body-all text-center mt-2"><span class="font-weight-bold">Terminal ferroviaria</span> con más de 5 km de vías</p>
                            </v-col>
                        </v-row>
                        <!--<v-row justify="center" class="mx-5">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(item, index) in pageHome.tecOffices.slice(2, 8)" :key="index">
                                <v-img :src="basePathApiUrl + item.image.data.attributes.url " contain max-height="70"></v-img>
                                --<p class="text-body-all text-center mt-2"></p>--
                                <div class="text-body-all text-center mt-2" v-html="$md.render(item.description)"></div>
                            </v-col>
                        </v-row>-->
                        <v-row justify="center" class="mb-10">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/laboratorio.png" contain max-height="70"></v-img>
                                <p class="text-body-all text-center mt-2"><span class="font-weight-bold">Moderno laboratorio</span> de Innovación & Desarrollo</p>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <v-img src="/estandares.png" contain max-height="70"></v-img>
                                <p class="text-body-all text-center mt-2">Procesos alineados y certificados bajo <span class="font-weight-bold">estándares internacionales</span>.</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                
            </v-container>
        </section>

        <section>
            <div class="bg-alianzas">
                <v-container>
                    <h1 class="font-archivo font-size-40 text-center white--text font-weight-bold my-10">{{ $t('home.titlealliances') }}</h1>
                    <!--<h1 class="font-archivo font-size-40 text-center white--text font-weight-bold my-10">{{ pageHome.alliances.title }}</h1>-->
                    <p class="text-body-all white--text text-center px-15">
                        <span class="text-uppercase font-weight-bold letters">POLNAC</span>  ha forjado <span class="font-weight-bold letters">alianzas estratégicas</span> con los principales productores de
                        materia prima a <span class="font-weight-bold letters">nivel mundial</span>, siempre buscando poner a disposición de sus clientes
                        los mejores materiales a precios competitivos. 
                    </p>
                    <!--<div class="text-body-all white--text text-center px-15" v-html="$md.render(pageHome.alliances.description )"></div>-->
                    <div class="d-flex justify-center">
                        <nuxt-link to="/alliances" class="decoration-none">
                            <v-btn class="rounded-lg my-10 px-10 py-5 body-1 black--text text-none primary-color" rounded>{{$t('home.btnalliances') }}</v-btn>
                            <!--<v-btn class="rounded-lg my-10 px-10 py-5 body-1 black--text text-none primary-color" rounded>{{ pageHome.alliances.txtBtn }}</v-btn>-->
                        </nuxt-link>
                    </div>
                </v-container>
            </div>
        </section>

        <section>
            <v-container fluid>
                <h1 class="font-archivo font-size-40 text-center black--text font-weight-bold my-10">Blog</h1>
                <!--<h1 class="font-archivo font-size-40 text-center black--text font-weight-bold my-10">{{ pageHome.blog.title }}</h1>-->
                <!--<v-row class="my-10" justify="center">
                    <v-col lg="3" md="3" sm="12" xs="12">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-productos.png" alt="blog productos" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-mercados.png" alt="blog mercados" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-tendencias.png" alt="blog tendencias" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-polnac.png" alt="blog polnac" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <div class="d-flex justify-center mb-10">
                    <v-btn rounded class="subtitle-1 white--text text-none" color="black">{{$t('home.btnblog')}}</v-btn>
                </div>-->
                <v-row justify="center">
                    <v-col cols="12" xl="9">
                        <v-row justify="center">
                            <v-col cols="12" align="center">
                                <v-sheet class="my-10 sections" max-width="1600" >
                                    <v-slide-group v-model="model" class="py-4 px-2 " center-active show-arrows>
                                        <v-slide-item v-for="(item, index) in blogs" :key="index">
                                            <!--max-width="325" max-height="390"-->
                                            <nuxt-link :to="`/blogs/${index+1}`" class="decoration-none">
                                                <v-card class="card-blog shadow-out" :class="{'ma-5': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                                    <img :src="item.img" style="width: 100%" alt="pruebas"/>
                                                    <v-card-title>{{item.title}}</v-card-title>
                                                    <v-card-subtitle class="text-left">{{item.description}}</v-card-subtitle>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                    </v-card-actions>
                                                </v-card>
                                            </nuxt-link>
                                        </v-slide-item>
                                    </v-slide-group>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <div class="d-flex justify-center mb-16">
                    <nuxt-link to="/blogs" class="decoration-none">
                        <v-btn rounded class="rounded-lg subtitle-1 px-10 py-5 white--text text-none default-color">{{$t('home.btnblog')}}</v-btn>
                        <!--<v-btn rounded class="rounded-lg text-body-all body-1 px-10 py-4 text-none default-color">{{ pageHome.blog.txtBtn }}</v-btn>-->
                    </nuxt-link>
                </div>
            </v-container>
        </section>

        <section>
            <v-container fluid>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col class="img-footer-mobile">
                    </v-col>
                </v-row>
                <v-row justify="center" >
                    <v-col cols="12" lg="6" md="6" class="img-footer-cita" >
                        <v-row justify="center">
                            <v-col cols="10">
                                <div class="py-10 mb-16">
                                    <h1 class="text-h4 font-weight-bold my-10 white--text">{{ $t('home.titleappointment') }}</h1>
                                    <!--<h1 class="text-h4 font-weight-bold my-10 white--text">{{ pageHome.appointment.title }}</h1>-->
                                    <p class="white--text text-body-all">
                                        {{ $t('home.subappointment') }}
                                    </p>
                                    <!--<p class="white--text text-body-all">
                                        {{ pageHome.appointment.description }}
                                    </p>-->
                                    <nuxt-link to="/schedule-an-appointment" class="decoration-none">
                                        <v-btn class="rounded-lg px-10 py-5 subtitle-1 black--text text-none primary-color">
                                            {{ $t('home.btnappointment') }}
                                        </v-btn>
                                        <!--<v-btn class="rounded-lg px-10 py-5 subtitle-1 black--text text-none primary-color">
                                            {{ pageHome.appointment.txtBtn }}
                                        </v-btn>-->
                                    </nuxt-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
        
                    <v-col cols="6" class="img-footer" v-if="windowSize > 1129"></v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            model: null,
            blogs: [
                {img: require('../../static/blog-productos.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-mercados.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-tendencias.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-polnac.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },

                {img: require('../../static/blog-productos.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-mercados.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-tendencias.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-polnac.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
            ],
            productos: [
                {img: require('../../static/plasticos.png'), imgH: require('../../static/h-plasticos.png')},
                {img: require('../../static/compuestos.png'),imgH: require('../../static/h-compuestos.png') },
                {img: require('../../static/masterbatch.png'),imgH: require('../../static/h-masterbatch.png') },
                {img: require('../../static/aditivos.png'), imgH: require('../../static/h-aditivos.png') },
                {img: require('../../static/carbonato.png'),imgH: require('../../static/h-carbonato.png') },
                {img: require('../../static/rotomoldeo.png'),imgH: require('../../static/h-rotomoldeo.png') },
                {img: require('../../static/pvc.png'), imgH: require('../../static/h-pvc.png')},
                {img: require('../../static/termoplasticos.png'), imgH: require('../../static/h-termo.png') },
                {img: require('../../static/biodegradables.png'), imgH: require('../../static/h-biodegradables.png') },
                {img: require('../../static/hules.png'), imgH: require('../../static/h-hules.png') },
                {img: require('../../static/polietileno.png'), imgH: require('../../static/h-polietileno.png') },
                {img: require('../../static/polipropileno.png'), imgH: require('../../static/h-polipropileno.png') },
                {img: require('../../static/estirenicos.png'), imgH: require('../../static/h-estirenicos.png') },
            ],
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
    computed:{
        ...mapState(['windowHeight','windowSize','pageHome','basePathApiUrl'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.des-1{
    background-image: url('../../static/destacados-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-2{
    background-image: url('../../static/destacados-2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-3{
    background-image: linear-gradient(rgba(119, 61, 189, 0.9), rgba(119, 61, 189, 0.90)), url('../../static/destacados-3.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-4{
    background-image: url('../../static/destacados-4.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.text-img{
    margin-top: 10vh;
}
.bg-testimonios{
    background-image: linear-gradient(rgba(61, 124, 201, 0.7), rgba(101, 93, 198,0.7)), url('../../static/testimonios.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.bg-color{
    background-image: linear-gradient(rgba(61, 124, 201, 0.7), rgba(101, 93, 198,0.7)), url('../../static/testimonios.png') !important;
}
.bg-alianzas{
    background-image: linear-gradient(rgba(46, 46, 101, 0.7), rgba(46, 46, 101, 0.7)), url('../../static/bg-home-alliances.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.font-title{
    /*font-family: 'Archivo' !important;*/
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0px;
}

.letters{
    color: #E0E621
}

.img-footer-cita{
  background-image: url('../../static/footer-cita.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
}

.img-footer {
  background-image: url('../../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
}

.img-footer-mobile {
  background-image: url('../../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 350px;
}
.text-color-testimonios{
    color: #655DC6;
}

.text-map{
    color: #773DBD;
}

.text-teal{
    color: #19D3C5
}
.shadow-out{
    box-shadow: none !important;
}
</style>
