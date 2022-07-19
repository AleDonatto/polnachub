<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-10">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <h1 class="text-h3 font-title-section font-weight-bold">
                            Misión
                        </h1>

                        <p class="mt-5 text-body-all">
                            Proporcionar a nuestros clientes soluciones que cumplan sus requisitos de calidad, 
                            precio y servicio necesarios para la fabricación de sus productos, logrando a través 
                            de esta actividad satisfacer las expectativas profesionales, económicas y de 
                            desarrollo que demanda la sociedad, accionistas, personal y proveedores.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/img-mision.png" contain alt="Planta de produccion de San Luis Potosi" max-width="650"></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center" v-if="windowSize > 1129">
                        <v-img src="/aboutus/img-vision.png" contain alt="Planta de produccion de San Luis Potosi" max-width="650"></v-img>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <h1 class="text-h3 font-title-section font-weight-bold">
                            Visión
                        </h1>

                        <p class="mt-5 text-body-all">
                            Ser la empresa mexicana global más importante en el suministro de materiales para la 
                            industria del plástico. La que honra lo que promete y es reconocida por ofrecer el 
                            portafolio más amplio de materiales para la fabricación de productos de plástico 
                            con la mejor relación costo-beneficio. Aplicando la logística más rápida y económica 
                            para la entrega de sus pedidos. 
                        </p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center" v-if="windowSize < 1129">
                        <v-img src="/aboutus/img-vision.png" contain alt="Planta de produccion de San Luis Potosi" max-width="450"></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" class="my-15">
                        <v-img src="/aboutus/video.png" contain max-height="550"></v-img>
                        <!--<video height="450" autoplay="true" muted="muted" loop="true">
                            <source src="https://www.youtube.com/watch?v=CJ9LyIMleDA" type="video/mp4">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CJ9LyIMleDA" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </video>-->
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="bg-valores">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" class="my-10">
                        <h1 class="font-title-section text-h3 text-center font-weight-bold">Valores de la empresa</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/honestly.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Honestidad</p>
                        <p class="text-body-all">
                            Respetar los recursos de la empresa, los bienes ajenos, el medio ambiente, 
                            la legislación, la normatividad, la dignidad propia y de los demás.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/lealtad.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Lealtad</p>
                        <p class="text-body-all">
                            Defender los intereses, los valores, los principios y políticas de la empresa,
                            con amor a la camiseta.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/commitment.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Compromiso</p>
                        <p class="text-body-all">
                            Dar lo máximo de nuestra capacidad intelectual, técnica y experiencia a la empresa 
                            y a nuestros colaboradores, con obligación y disciplina en el cumplimiento de los 
                            objetivos establecidos.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/productivity.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Proactividad</p>
                        <p class="text-body-all">
                            Anticiparse con todos los medios posibles: experiencia, actitud y creatividad para superar 
                            los problemas y dificultades para alcanzar y superar los objetivos de corto y mediano plazo.
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/discipline.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Disciplina</p>
                        <p class="text-body-all">
                            Respetar y cumplir las decisiones, planes, normas y proyectos con propósitos progresistas de equipo.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/attitude.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Actitud</p>
                        <p class="text-body-all">
                            Mostrar y tener siempre una conducta orientada a resolver problemas, teniendo en mente los intereses 
                            de los clientes, empresa, proveedores y empleados.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/teamwork.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Trabajo en equipo</p>
                        <p class="text-body-all">
                            Participar sinérgicamente con el grupo de trabajo, con integración, conocimiento, entusiasmo, 
                            confianza y experiencia para el logro de los objetivos de la empresa.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/overcoming.png" contain max-height="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Superación</p>
                        <p class="text-body-all">
                            Trabajar y pensar constantemente en mejorar mi aptitud, mi educación y mi actitud, a través del compromiso.
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/motivation.png" contain max-width="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Motivación</p>
                        <p class="text-body-all">   
                            Dar y reconocer los satisfactores que estimulen el bienestar de los colaboradores de Polímeros Nacionales 
                            para su desarrollo personal y de la organización.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/aboutus/confidence.png" contain max-width="90"></v-img>
                        <p class="text-h5 mt-2 font-weight-medium">Confianza</p>
                        <p class="text-body-all">
                            Capacidad para crear vínculos duraderos con nuestros clientes internos y externos a través de cumplir 
                            la promesa que asumimos al tomar un pedido o asumir un compromiso.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" class="my-10">
                        <h1 class="text-h3 font-title-section display-1 font-weight-bold text-center">Infraestructura</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-row>
                            <v-col cols="12">
                                <p class="text-body-all">
                                    <span class="font-weight-bold">POLNAC</span>, siempre cerca de sus clientes para brindarles 
                                    el mejor servicio. Ubicados estratégicamente en las ciudades de:
                                </p>
                            </v-col>
                            <v-col cols="12" align="center">
                                <v-img src="/aboutus/mexico-map.png" contain max-width="400"></v-img>
                            </v-col>
                            <v-col cols="12" align="center" v-if="windowSize < 1129">
                                <v-img src="/aboutus/inventario.png" contain max-width="200"></v-img>
                            </v-col>
                            <v-col cols="12" v-if="windowSize > 1129">
                                <p class="text-body-all">
                                    Asimismo, contamos con tres avanzadas plantas para la fabricación de compuestos, aditivos y masterbach. 
                                    Ubicadas en México y en los Estados Unidos de América. 
                                </p>
                                <p class="text-body-all">La superación y el éxito están en nuestro ADN.</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="windowSize > 1129">
                        <v-row>
                            <v-col cols="6" align="center" class="pt-10">
                                <v-img src="/aboutus/inventario.png" contain max-width="200"></v-img>
                                <p class="text-left text-body-all">
                                    Sucursales donde mantenemos un amplio inventario de materiales y personal altamente calificado.
                                </p>
                                <p class="text-left text-body-all">
                                    A partir de Ámsterdam cubrimos toda la demanda europea.
                                </p>
                                <v-img src="/aboutus/amsterdam.png" contain max-width="250"></v-img>
                                <v-img src="/aboutus/adn.png" contain max-width="200" class="mt-10"></v-img>
                            </v-col>
                            <v-col cols="6" class="">
                                <v-img src="/aboutus/texas.png" contain></v-img>
                                <p class="text-body-all">
                                    <span class="font-weight-bold">POLNAC</span>, una empresa de talla mundial. Con nuestra sucursal en Houston, Texas 
                                    cubrimos el mercado de los Estados Unidos de América.
                                </p>
                                <p class="text-body-all">
                                    Desde Guatemala abastecemos Centro América. Desde Ecuador y Colombia atendemos el mercado 
                                    de Sur América, contamos con stocks de mercancías locales. 
                                </p>
                                <v-img src="/aboutus/latam.png" contain></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row v-if="windowSize < 1129">
                    <v-col cols="12">
                        <p class="text-body-all">Sucursales donde mantenemos un amplio inventario de materiales y personal altamente calificado.</p>
                    </v-col>
                    <v-col cols="12" align="center">
                        <v-img src="/aboutus/texas.png" contain max-width="250"></v-img>
                        <p class="mt-4 text-left text-body-all"><span class="font-weight-bold">POLNAC</span>, una empresa de talla mundial. Con nuestra sucursal en Houston, Texas cubrimos el mercado de los Estados Unidos de América.</p>
                    </v-col>
                    <v-col cols="12" align="center">
                        <v-img src="/aboutus/amsterdam.png" contain max-width="250"></v-img>
                        <p class="mt-4 text-left text-body-all">A partir de Ámsterdam cubrimos toda la demanda europea.</p>
                    </v-col>
                    <v-col cols="12" align="center">
                        <v-img src="/aboutus/latam.png" contain max-width="250"></v-img>
                        <p class="text-body-all mt-4 text-left">
                            Desde Guatemala abastecemos Centro América. Desde Ecuador y Colombia atendemos el mercado de Sur América, 
                            contamos con stocks de mercancías locales. <br><br>
                            Asimismo, contamos con tres avanzadas plantas para la fabricación de compuestos, aditivos y masterbach. 
                            Ubicadas en México y en los Estados Unidos de América. 
                        </p>
                    </v-col>
                    <v-col cols="12" align="center">
                        <p class="my-2 text-body-all">La superación y el éxito están en nuestro ADN.</p>
                        <v-img src="/aboutus/adn.png" contain max-width="200"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center" class="my-10">
                        <h1 class="font-title-section text-h3 font-weight-bold text-center">POLNAC en el tiempo</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" align="center" v-if="windowSize > 1129">
                        <v-img src="/aboutus/time-line.png" contain max-height="1400"></v-img>
                        <!--<v-btn color="rgba(25, 211, 197, 1)" class="px-10 py-5 text-none" outlined rounded>Cargar más línea de tiempo</v-btn>-->
                    </v-col>
                    <v-col cols="12" align="center" class="mb-16" v-if="windowSize < 1129">
                        <v-img src="/aboutus/time-line-mb.png" contain></v-img>
                        <v-btn color="rgba(25, 211, 197, 1)" class="px-10 py-5 text-none" outlined rounded><span class="black--text ">Cargar más línea de tiempo</span></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="12" align="center" class="mt-10 mb-5">
                        <h1 class="text-h3 font-title-section font-weight-bold text-center">Política de calidad</h1>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" align="center">
                        <v-img src="/aboutus/politica-calidad.png" contain max-width="450"></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-15 mt-10">
                    <v-col cols="12" lg="6" md="6" align-self="end">
                        <h1 class="text-h3 font-title-section font-weight-bold text-left my-5" v-if="windowSize > 1129">Política de calidad</h1>
                        <p class="text-body-all">
                            Diseñar, fabricar, comercializar y distribuir resinas plásticas y concentrados de color, con el compromiso 
                            de satisfacer los requerimientos de los clientes, a través de un Sistema de Calidad basado en la norma 
                            ISO 9001 y un proceso de mejora continua, en absoluto respeto al medio ambiente.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" align="center" v-if="windowSize > 1129">
                        <v-img src="/aboutus/politica-calidad.png" contain max-width="450"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="img-about-l" :class="{'height-mb': windowSize < 1129}"></v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" :class="{'img-about-r': windowSize > 1129 , 'img-about-r-mb': windowSize < 1129 }">
                    <div class="py-10 my-10" :class="{'px-16': windowSize > 1129, 'px-2': windowSize < 1129}">
                        <h1 class="text-h4 font-weight-bold my-10 white--text">¿Te interesa trabajar con nosotros?</h1>
                        <p class="white--text text-body-all">
                            ¡Únete a una de las industrias más <span class="letters">sólidas y robustas</span> de la actualidad! 
                            Forma parte de una empresa mexicana más vanguardista en constante crecimiento internacional.
                        </p>
                        <v-btn dark color="rgba(25, 211, 197, 1)" class="rounded-lg body-1 px-10 py-5 black--text text-none">Ver vacantes</v-btn>
                    </div>
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
        return {}
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.bg-valores{
    background: #F1F3F6;
}
.font-title-section{
    font-family: 'Archivo' !important;
}
.letters{
    color: #E0E621
}
.img-about-l{
  background-image: url('../../static/aboutus/img-footer-l.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.img-about-r{
  background-image: url('../../static/aboutus/img-footer-r.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.img-about-r-mb{
  background-image: url('../../static/aboutus/bg-aboutus-agenda.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 600px;
}
.height-mb {
  height: 450px;
  width: 100%;
}
</style>