<template>
    <div>
        <div v-if="pageBlog!==null" class="" :class="{'bg-blog': windowSize > 1129, 'bg-blog-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageBlog.banner.image.data[0].attributes.url })` }">
            <v-row justify="center">
                <v-col cols="12" align="center" class="mt-16">
                    <!--<h1 class="font-archivo font-size-40 font-weight-bold white--text">Blog</h1>-->
                    <h1 class="font-archivo font-size-40 font-weight-bold white--text" v-html="pageBlog.banner.title"></h1>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-4" v-if="windowSize > 1129">
                <v-col cols="10">
                    <v-tabs fixed-tabs background-color="transparent">
                        <v-tabs-slider color="yellow"></v-tabs-slider>
                        <v-tab class="white--text" @click="() => getTypesBlogs('All')">{{ $t('blog.opcTodos') }}</v-tab>
                        <v-tab class="white--text" @click="() => getTypesBlogs('Tendencias')">{{ $t('blog.opcTendencias') }}</v-tab>
                        <v-tab class="white--text" @click="() => getTypesBlogs('Productos')">{{ $t('blog.opcProductos') }}</v-tab>
                        <v-tab class="white--text" @click="() => getTypesBlogs('Mercados')">{{ $t('blog.opcMercados') }}</v-tab>
                        <v-tab class="white--text" @click="() => getTypesBlogs('Polnac Blue')">{{ $t('blog.opcPolnacBlue') }}</v-tab>
                        <v-tab class="white--text" @click="() => getTypesBlogs('Eventos')">{{ $t('blog.opcEventos') }}</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="9" class="mb-16">
                    <div class="d-flex">
                        <v-text-field v-model="search" solo rounded class="mt-4" placeholder="Buscar" prepend-inner-icon="mdi-magnify" clearable></v-text-field>
                        <v-btn class="ml-2 mt-5 secondary-color text-none white--text" @click="() => getTypesBlogs('search')">{{$t('blog.btnSearch')}}</v-btn>
                    </div>
                </v-col>
                <v-col cols="3" align="center" class="mt-4" v-if="windowSize < 1129">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="mx-2" fab dark color="white" v-bind="attrs" v-on="on">
                                <v-icon color="black">
                                    mdi-filter-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="() => getTypesBlogs('All')">
                                <v-list-item-title>{{ $t('blog.opcTodos') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="() => getTypesBlogs('Tendencias')">
                                <v-list-item-title>{{ $t('blog.opcTendencias') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="() => getTypesBlogs('Productos')">
                                <v-list-item-title>{{ $t('blog.opcProductos') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="() => getTypesBlogs('Mercados')">
                                <v-list-item-title>{{ $t('blog.opcMercados') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="() => getTypesBlogs('Polnac Blue')">
                                <v-list-item-title>{{ $t('blog.opcPolnacBlue') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="() => getTypesBlogs('Eventos')">
                                <v-list-item-title>{{ $t('blog.opcEventos') }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </div>

        <section>
            <v-container>
                <v-row justify="center" class="my-10">
                    <v-col cols="3" v-if="windowSize>1129">
                        <h1 class="font-weight-bold font-size-24">Productos recomendados</h1>
                        <div v-if="this.productos !== null">
                            <div v-for="(prod, index) in this.productos.data.slice(0,3)" :key="'prod'+index">
                                <nuxt-link :to="`/products/${prod.id}`" class="decoration-none">
                                    <v-img :src="basePathApiUrl + prod.attributes.imgMiniature.data.attributes.url" max-height="170" class="my-2 py-4" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                        <p class="mt-4"></p>
                                        <p class="font-weight-bold white--text text-body-all text-center mt-16">{{prod.attributes.name}}</p>
                                    </v-img>
                                </nuxt-link>
                            </div>
                        </div>
                        <!--<v-img src="/contact/plasticos.png" contain max-height="210" class="my-2"></v-img>
                        <v-img src="/contact/compuestos.png" contain max-height="210" class="my-2"></v-img>
                        <v-img src="/contact/masterbatch.png" contain max-height="210" class="my-2"></v-img>-->

                        <h1 class="font-weight-bold font-size-24 mt-16">Te podría interesar</h1>

                        <div v-for="(item, index) in this.othersBlogs" :key="item.id+index">
                            <nuxt-link :to="`/blogs/${item.id}`" class="decoration-none">
                                <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                    <img :src="basePathApiUrl + item.attributes.imgContent.data.attributes.url" style="width: 100%" :alt="item.description"/>
                                    <v-card-title class="body-1 font-weight-bold text-left px-1">{{item.attributes.title}}</v-card-title>
                                    <v-card-subtitle class="text-left">
                                        <div class="truncate-lines" v-html="item.attributes.description"></div>
                                    </v-card-subtitle>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </nuxt-link>
                        </div>

                        <!--<nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>-->
                    </v-col>

                    <v-col cols="12" lg="9" md="9" sm="12" xs="12" v-if="this.blog !== null">
                        <v-row justify="center" align="end">
                            
                            <v-col cols="12" align="center">
                                <!--<v-img src="/blog/blog-individual.png" contain :max-height="windowSize<1129 ? '210': '450'"></v-img>-->
                                <v-img :src="basePathApiUrl + this.blog.data.attributes.imgContent.data.attributes.url" contain :max-height="windowSize<1129 ? '210': '450'"></v-img>
                            </v-col>
                            <v-col cols="12" xl="7" lg="10" md="10" align="end" class="positions" >
                                <v-fab-transition>
                                    <v-btn color="#19D3C5" dark fab class="position-btn" :class="{'mt-5': windowHeight > 950 }"
                                    @click="showButttons = !showButttons">
                                        <v-icon>mdi-share-variant</v-icon>
                                    </v-btn>
                                </v-fab-transition>
                                <v-fab-transition v-if="showButttons">
                                    <v-btn color="blue" dark fab class="position-btn" :class="{'mt-5': windowHeight > 950 }">
                                        <ShareNetwork
                                            class="white--text decoration-none"
                                            network="twitter"
                                            :url="baseURL + this.$route.path"
                                            :title="this.blog.data.attributes.title"
                                            :description="this.blog.data.attributes.description"
                                            quote="The hot reload is so fast it\'s near instant. - Evan You"
                                            :hashtags="this.blog.data.attributes.tags"
                                        >
                                            <v-icon>mdi-twitter</v-icon>
                                        </ShareNetwork>
                                    </v-btn>
                                </v-fab-transition>
                                <v-fab-transition v-if="showButttons">
                                    <v-btn color="teal" dark fab class="position-btn" :class="{'mt-5': windowHeight > 950 }">
                                        <ShareNetwork
                                            class="white--text decoration-none"
                                            network="whatsapp"
                                            :url="baseURL + this.$route.path"
                                            :title="this.blog.data.attributes.title"
                                            :description="this.blog.data.attributes.description"
                                            quote="The hot reload is so fast it\'s near instant. - Evan You"
                                            :hashtags="this.blog.data.attributes.tags"
                                        >
                                            <v-icon>mdi-whatsapp</v-icon>
                                        </ShareNetwork>
                                    </v-btn>
                                </v-fab-transition>
                                <v-fab-transition v-if="showButttons">
                                    <v-btn color="indigo" dark fab class="position-btn" :class="{'mt-5': windowHeight > 950 }">
                                        <ShareNetwork
                                            class="white--text decoration-none"
                                            network="facebook"
                                            :url="baseURL + this.$route.path"
                                            :title="this.blog.data.attributes.title"
                                            :description="this.blog.data.attributes.description"
                                            quote="The hot reload is so fast it\'s near instant. - Evan You"
                                            :hashtags="this.blog.data.attributes.tags"
                                        >
                                            <v-icon dark>mdi-facebook</v-icon>
                                        </ShareNetwork>
                                    </v-btn>
                                </v-fab-transition>
                                
                            </v-col>
                            
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="mt-10">
                                <p class="font-weight-bold font-size-18">
                                    Autor: {{this.blog.data.attributes.author}} <br>
                                    Fecha: {{this.blog.data.attributes.createdAt.slice(0,19)}} hrs
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <!--<p class="font-size-20">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones 
                                    Unidas para el Medio Ambiente aprobó una resolución histórica para hacer 
                                    frente a la contaminación plástica. Se prevé que un acuerdo internacional 
                                    entre en vigor a finales de 2024.
                                    <br><br>
                                    “Se trata del acuerdo multilateral más importante en materia de medio ambiente 
                                    desde el Acuerdo de París”- Inger Andersen, directora ejecutiva del Programa 
                                    para el Medio Ambiente.
                                    <br><br>
                                    El acuerdo estará a cargo de un Comité Intergubernamental de Negociación, el 
                                    cual comenzará a trabajar este mismo año. Se buscarán distintas alternativas 
                                    para impulsar la economía circular dentro de la industria plástica, desde el 
                                    rediseño de productos hasta el desarrollo de materiales reciclables y 
                                    biodegradables.
                                    <br><br>
                                    El comunicado de la Naciones Unidas afirma que “El documento que redacte el 
                                    Comité se basará en un debate abierto, informado por la ciencia y ese órgano 
                                    informará sobre los progresos realizados a lo largo de los dos próximos años.”
                                    <br><br>
                                    Algunos de los graves problemas que esta resolución busca solventar son:

                                    <ul>
                                        <li>11 millones de toneladas de residuos plásticos llegan a los océanos cada año. Esta cifra podría triplicarse para el año 2040</li>
                                        <li>Más de 800 especies marinas y costeras se ven directamente afectadas por la contaminación plástica</li>
                                        <li>Se calcula que la producción, uso y eliminación de materiales plásticas representara el 15% de las emisiones permitidas de gases invernadero para 2050.</li>
                                    </ul>
                                    <br><br>
                                    
                                    Pero no todo son malas noticias. Evolucionar hacia una economía circular tendrá 
                                    grandes resultados para nuestros ecosistemas y comunidades:
                                    <ul>
                                        <li>Reducir hasta un 80% el volumen de contaminación plástica en los océanos</li>
                                        <li>Reducir las emisiones de gases invernadero en un 25%</li>
                                        <li>Creación de 700,000 empleos adicionales, sobre todo en los países del hemisferio sur</li>
                                    </ul>
                                    <br><br>
                                    En POLNAC nos orgullece estar siempre a la vanguardia de la industria. Creemos 
                                    firmemente en los beneficios y posibilidades que el plástico le otorga a la 
                                    humanidad. Por eso trabajamos infatigablemente en crear una industria en donde 
                                    los plásticos sean nuestro mejor aliado para mejorar la calidad de vida de 
                                    todos los seres vivos.
                                    <br><br>
                                    Por consiguiente, nos encontramos un paso adelante: ponemos a tu disposición 
                                    una nueva gama de materiales y compuestos biodegradables bajo nuestra marca 
                                    BioResin
                                </p>-->
                                <p class="font-size-20 ck-content" v-html="this.blog.data.attributes.content"></p>
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <p class="font-weight-bold font-size-24">Conoce marcas relacionadas:</p>
                            </v-col>
                        </v-row>
                        <v-row v-if="this.marcas !== null">
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12" v-for="(mar, index) in this.marcas.slice(0,3)" :key="'mar'+index">
                                <!--<v-img src="/group/logo-bioresin.png" contain max-height="120"></v-img>-->
                                <nuxt-link :to="`/marcas/${mar.id}`" class="decoration-none">
                                    <v-img :src="basePathApiUrl + mar.attributes.image.data.attributes.url " contain max-height="120"></v-img>
                                    <!--<p class="font-size-18 mt-2 text-truncate">Especialistas en la distribución y fabricación de resinas biodegradables.</p>-->
                                    <p class="font-size-18 mt-2 truncate-lines">{{mar.attributes.subtitle}}</p>
                                </nuxt-link>
                                
                            </v-col>

                            <!--<v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-bioresin.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2 text-truncate">Especialistas en la distribución y fabricación de resinas biodegradables.</p>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-rototech.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2 text-truncate">La línea de negocio especializada en la producción y comercialización de resinas plásticas para el proceso de rotomoldeo.</p>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-flexlene.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2 text-truncate">Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo(PVC).</p>
                            </v-col>-->
                        </v-row>

                        <v-row v-if="windowSize>1129">
                            <v-col cols="8">
                                <p class="font-weight-bold font-size-24">Mercados</p>
                            </v-col>
                            <v-col cols="4" align="right">
                                <nuxt-link to="/market" class="color-decotarion">
                                    <h1 class="purple-polnac">Ver todas</h1>
                                </nuxt-link>
                            </v-col>
                        </v-row>
                        <v-row v-if="windowSize>1129 && this.mercados !== null" class="mb-16" >
                            
                            <v-col cols="4" v-for="(mer, index) in this.mercados.slice(0,3)" :key="'mer'+index" align-self="center">
                                <!--<v-img src="/blog/mercados.png" contain max-height="220"></v-img>-->
                                <nuxt-link :to="`/market/${mer.id}`" class="decoration-none">
                                    <v-img :src="basePathApiUrl + mer.attributes.imgMiniarure.data.attributes.url" contain max-height="170" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                        <div class="mt-7">
                                            <p class="text-center font-archivo text-body-all white--text mt-16 font-weight-bold">{{mer.attributes.nameMarket}}</p>
                                        </div>
                                    </v-img>
                                </nuxt-link>
                            </v-col>

                            <!--<v-col cols="4">
                                <v-img src="/blog/mercados.png" contain max-height="220"></v-img>
                            </v-col>
                            <v-col cols="4">
                                <v-img src="/blog/tendencias.png" contain max-height="220"></v-img>
                            </v-col>
                            <v-col cols="4">
                                <v-img src="/blog/mercados.png" contain max-height="220"></v-img>
                            </v-col>-->
                        </v-row>

                        <v-row v-if="windowSize<1129 && othersBlogs !== null" class="mb-16">
                            <v-carousel class="carousel-black" cycle height="400" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(slide, i) in this.othersBlogs" :key="'bg' + i">
                                    <v-sheet color=""  height="100%">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <nuxt-link :to="`/blogs/${slide.id}`" class="decoration-none">
                                                <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                                    <img :src="basePathApiUrl + slide.attributes.imgContent.data.attributes.url" style="width: 100%" alt="pruebas"/>
                                                    <v-card-title>{{slide.title}}</v-card-title>
                                                    <v-card-subtitle class="text-left">
                                                        <div v-html="slide.attributes.description"></div>
                                                    </v-card-subtitle>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                    </v-card-actions>
                                                </v-card>
                                            </nuxt-link>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            itemsBlogs: null,
            showButttons: false,
            mercados: null,
            marcas: null,
            productos: null,
            blog: null,
            baseURL: '',
            othersBlogs: null,
            search: '',
            typesBlogs: null,
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'basePathApiUrl','pageBlog'])
    },
    mounted() {
        this.getMercados()
        this.getMarcas()
        this.getProductos()
        this.getBlog(this.$route.params.id)
        this.getBlogs(this.$route.params.id)

        this.baseURL = process.env.BASE_URL_PAGE
    },
    methods: {
        /*shareFacebook(){
            window.open('http://facebook.com/sharer.php?u=https://idyllic-chaja-53a02e.netlify.app/blogs/1')
        },
        shareTwitter() {
            window.open('http://twitter.com/home?status=https://idyllic-chaja-53a02e.netlify.app/blogs/1')
        },
        shareWhatsapp(){
            window.open('')
        },*/
        async getMercados(){
            this.mercados = await this.$store.dispatch('getAllMarkets')
            //console.log(this.mercados)
        },
        async getMarcas(){
            let auxMarcas = await this.$store.dispatch('getAllMarcas')
            this.marcas = auxMarcas.data

        },
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        },
        async getBlog(id){
            this.blog = await this.$store.dispatch('getBlogById', id)
            //console.log(this.blog)
            
            if(this.blog.data.attributes.relatedBrand !== null || this.blog.data.attributes.relatedMarkets !== null){
                let auxMarcas
                let auxMercados


                let relatedBands = this.blog.data.attributes.relatedBrand
                relatedBands = relatedBands.split(",")

                /*let relatedMarkets = this.blog.data.attributes.relatedMarkets
                relatedMarkets = relatedMarkets.split(",")*/

                const brands = await this.$store.dispatch('getAllMarcas')
                const markets = this.mercados

                auxMarcas = relatedBands.map(item => {
                    if(brands.data.find(bran => bran.attributes.title.toLowerCase() === item.trim().toLowerCase() )){
                        return brands.data.find(bran => bran.attributes.title.toLowerCase() === item.trim().toLowerCase())
                    }
                })

                /*auxMercados = relatedMarkets.map(item => {
                    if(markets.find(mark => mark.attributes.nameMarket.toLowerCase().match(item.toLowerCase()))){
                        return markets.find(mark => mark.attributes.nameMarket.toLowerCase().match(item.toLowerCase()) )
                    }
                })*/

                //console.log(relatedMarkets)
                //console.log(auxMercados)

                this.marcas = auxMarcas
                //this.mercados = auxMercados
            }

            
        },
        async getBlogs(idBlog){
            const blogs = await this.$store.dispatch('getAllBlogs')
            this.itemsBlogs = blogs
            if(blogs.data.lenght > 1){
                //blogs.data.slice(0,2)
                this.othersBlogs = blogs.data.filter(item => item.id != idBlog)

            }else{
                this.othersBlogs = blogs.data.filter(item => item.id != idBlog)
            }
            //console.log(this.othersBlogs)
        },

        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        },
        async getBlogsById(){
            this.blogs = await this.$store.dispatch('getAllBlogs')
            //console.log(this.blogs)
        },
        getTypesBlogs(type){
            const auxBlog = this.othersBlogs
            
            switch(type){
                case 'All': 
                    if(this.$route.params.id){
                        this.$router.push('/blogs')
                    }else{
                        this.typesBlogs = auxBlog
                    }
                    break
                case 'Tendencias': 
                    this.typesBlogs = auxBlog.filter(item=> item.attributes.tags === type) 
                    break
                case 'Productos':
                    this.typesBlogs = auxBlog.filter(item=> item.attributes.tags === type) 
                    break
                case 'Mercados':
                    this.typesBlogs = auxBlog.filter(item=> item.attributes.tags === type) 
                    break
                case 'Polnac Blue':
                    this.typesBlogs = auxBlog.filter(item=> item.attributes.tags === type) 
                    break
                case 'Eventos': 
                    this.typesBlogs = auxBlog.filter(item=> item.attributes.tags === type) 
                    break
                case 'search': 
                    if(this.search !== ''){
                        this.typesBlogs = auxBlog.data.filter(item => item.attributes.title.toLowerCase().match(this.search.toLowerCase()) 
                        || item.attributes.description.toLowerCase().match(this.search.toLowerCase())
                        || item.attributes.author.toLowerCase().match(this.search.toLowerCase()) )
                    }
                    //this.typesBlogs = auxBlog.data.filter(item => item.attributes.title.toLowerCase().match(this.search.toLowerCase()) ||  )
                    break
            }

            //this.typesBlogs = auxBlog.data.filter(item => item.attributes.tags === type)
        }
    }
}
</script>

<style scoped>

.position-btn{
    position: relative !important;
}
.positions {
    margin-top: -8vh;
}
.color-decotarion{
    text-decoration-color: #773DBD !important;
}
.purple-polnac{
    color: #773DBD;
}

.bg-blog{
    /*background-image: url('../../static/blog/bg-blog.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.bg-blog-mb{
    /*background-image: url('../../static/blog/bg-blog-mb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>