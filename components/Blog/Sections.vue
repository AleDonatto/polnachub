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

        <section v-if="windowSize > 1129 && this.blogs !== null">
            <v-container>
                <v-row justify="center" class="my-10" v-for="(blog, index) in this.blogs.data.slice(0,1)" :key="index">
                    <v-col cols="6" xl="5">
                        <!--<v-img src="/blog/horizontes.png" contain max-height="320"></v-img>-->
                        <v-img :src="basePathApiUrl + blog.attributes.imgContent.data.attributes.url" contain max-height="320"></v-img>
                    </v-col>
                    <v-col cols="6" xl="4" align-self="center">
                        <!--<p class="font-archivo font-weight-bold font-size-40">Nuevos horizontes</p>-->
                        <p class="font-archivo font-weight-bold font-size-40">{{blog.attributes.title}}</p>
                        <!--<p class="text-body-all">
                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea 
                            de las Naciones Unidas para el Medio Ambiente aprobó una resolución 
                            histórica para hacer frente a la contaminación plástica. Se prevé 
                            que un acuerdo internacional entre en vigor a finales de 2024.
                        </p>-->
                        <p class="text-body-all" v-html="blog.attributes.description"></p>
                        <nuxt-link :to="`/blogs/${blog.id}`" class="">
                            <p class="text-right text-purple font-weight-bold">
                                {{ $t('blog.btnContinue') }}
                            </p>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center" class="mt-5 mb-16">
                    <v-col cols="12" xl="9">
                        <v-row  v-if="this.typesBlogs !== null">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(blog, index) in typesBlogs" :key="index+blog">
                                <nuxt-link :to="`/blogs/${blog.id}`" class="decoration-none">
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                        <img :src="basePathApiUrl + blog.attributes.imgContent.data.attributes.url" style="width: 100%" alt="pruebas"/>
                                        <v-card-title class="body-1 font-weight-bold text-left px-1">{{blog.attributes.title}}</v-card-title>
                                        <v-card-subtitle class="text-left">
                                            <div class="truncate-lines" v-html="blog.attributes.description"></div>
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </nuxt-link>
                            </v-col>

                            <!--<v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/2" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/3" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/4" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :width="windowSize>1129 ? '325' : '300'" :height="windowSize >1129 ? '390': '360'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle class="text-left">
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>

                            <v-col cols="3" v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/5" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/6" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/7" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/8" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>-->
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--<section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" xl="9">
                        <v-row justify="center" :class="{'my-16' : windowSize < 1129 }">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/1" class="decoration-none">-
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/2" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/3" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/4" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :width="windowSize>1129 ? '325' : '300'" :height="windowSize >1129 ? '390': '360'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle class="text-left">
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>

                            <v-col cols="3" v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/5" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/6" class="decoration-none">-
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/7" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/8" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>-->

        <section  v-if="windowSize >1129">
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <h1 class="font-archivo font-weight-bold font-size-30">Recomendados</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="this.productos !== null">
                    <v-col cols="12" lg="11" md="10" class="mb-10">
                        <v-sheet class="mx-auto" height="250">
                            <v-slide-group v-model="model" class="pa-5" show-arrows>
                                <v-slide-item v-for="(item, index) in productos.data" :key="index" >
                                    <nuxt-link :to="`/products/${item.id}`" class="decoration-none">
                                        <v-card height="250" class="shadow-out">
                                            <v-hover v-slot="{ hover }">
                                                <v-card class="ma-5 card-blog shadow-out" width="220" height="390">
                                                    <v-img :src="basePathApiUrl + item.attributes.imgMiniature.data.attributes.url" style="width: 100%" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                                        <v-expand-transition>
                                                            <!--<div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;"></div>-->
                                                            <v-img :src="basePathApiUrl + item.attributes.imgMiniature.data.attributes.url" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                                        </v-expand-transition>
                                                    </v-img>
                                                    <p class="text-center font-archivo font-weight-bold text-body-all">{{item.attributes.name}}</p>
                                                </v-card>
                                            </v-hover>
                                        </v-card>
                                    </nuxt-link>
                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" xl="9">
                        <v-row  v-if="windowSize >1129 && this.blogs !== null">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(blog, index) in blogs.data" :key="index+blog">
                                <nuxt-link :to="`/blogs/${blog.id}`" class="decoration-none">
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                        <img :src="basePathApiUrl + blog.attributes.imgContent.data.attributes.url" style="width: 100%" alt="pruebas"/>
                                        <v-card-title class="body-1 font-weight-bold text-left px-1">{{blog.attributes.title}}</v-card-title>
                                        <v-card-subtitle class="text-left">
                                            <div class="truncate-lines" v-html="blog.attributes.description"></div>
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </nuxt-link>
                            </v-col>

                            <!--<v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/2" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/3" class="decoration-none">--
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
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                --<nuxt-link to="/blogs/4" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :width="windowSize>1129 ? '325' : '300'" :height="windowSize >1129 ? '390': '360'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle class="text-left">
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>

                            <v-col cols="3" v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/5" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/6" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/7" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>
                            <v-col cols="3"  v-if="windowSize >1129">
                                --<nuxt-link to="/blogs/8" class="decoration-none">--
                                    <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                        <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                        <v-card-title>Nuevos horizontes</v-card-title>
                                        <v-card-subtitle>
                                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                --</nuxt-link>--
                            </v-col>-->
                        </v-row>

                        <v-row justify="center" class="mb-15">
                            <v-col cols="12" lg="4" md="4" sm="10" xs="10" class="mb-16" v-if="this.blogs !== null">
                                <v-btn outlined block color="#19D3C5" class="text-none py-6 rounded-lg" v-if="this.blogs.data.lenght > 8">
                                    <span class="black--text">Mostrar más artículos</span>
                                </v-btn>
                            </v-col>
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
    data(){
        return {
            model: null,
            productos: null,
            blogs: null,
            filtesBlog: null,
            typesBlogs: null,
            search: ''
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'basePathApiUrl', 'pageBlog'])
    },
    mounted() {
        this.getProductos()
        this.getBlogs()
    },
    methods: {
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        },
        async getBlogs(){
            this.blogs = await this.$store.dispatch('getAllBlogs')
            //console.log(this.blogs)
        },
        getTypesBlogs(type){
            const auxBlog = this.blogs
            
            switch(type){
                case 'All': 
                    if(this.$route.params.id){
                        this.$router.push('/blogs')
                    }else{
                        this.typesBlogs = auxBlog.data
                    }
                    break
                case 'Tendencias': 
                    this.typesBlogs = auxBlog.data.filter(item=> item.attributes.tags === type) 
                    break
                case 'Productos':
                    this.typesBlogs = auxBlog.data.filter(item=> item.attributes.tags === type) 
                    break
                case 'Mercados':
                    this.typesBlogs = auxBlog.data.filter(item=> item.attributes.tags === type) 
                    break
                case 'Polnac Blue':
                    this.typesBlogs = auxBlog.data.filter(item=> item.attributes.tags === type) 
                    break
                case 'Eventos': 
                    this.typesBlogs = auxBlog.data.filter(item=> item.attributes.tags === type) 
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
.text-purple{
    color: #773DBD;
}
.shadow-out{
    box-shadow: none !important;
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