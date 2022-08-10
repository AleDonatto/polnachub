<template>
    <div>
        <section>
            <v-container>
                <v-row class="my-16">
                    <v-col cols="12" lg="4" md="4">
                        <v-row>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 0" class="text-none px-10 py-2" block rounded :color="showOptions === 0 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Crédito</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 1" class="text-none px-10 py-2" block rounded :color="showOptions === 1 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Pedidos y entregas</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 2" class="text-none px-10 py-2" block rounded :color="showOptions === 2 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Facturación</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 3" class="text-none px-10 py-2" block rounded :color="showOptions === 3 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Muestras y desarrollos</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 4" class="text-none px-10 py-2" block rounded :color="showOptions === 4 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Productos</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <v-btn @click="showOptions = 5" class="text-none px-10 py-2" block rounded :color="showOptions === 5 ? '#19D3C5':'rgba(25, 211, 197, 0.3)'">
                                    <v-row class="mt-1">
                                        <v-col cols="1">
                                            <v-icon left>mdi-alert-circle-outline</v-icon>
                                        </v-col>
                                        <v-col cols="9">
                                            <p class="text-left">Otros</p>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" lg="8" md="8">
                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 0">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo tramito una línea de crédito?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Quiénes pueden tramitar una solicitud de crédito?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuánto tiempo tarda una aprobación de crédito?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Una vez se ingresen los documentos y estén completos y vigentes, tarda entre 10 y 15 días hábiles.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Puedo tramitar crédito siendo una empresa fuera de México?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Si, cualquier empresa o persona física/natural puede tramitar un crédito. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué formas de pago manejan? 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Dentro de México recibimos pagos a través de:
                                    <ul>
                                        <li>Transferencia</li>
                                        <li>Cheque nominativo</li>
                                        <li>Tarjeta de crédito</li>
                                        <li>Depósito en efectivo directamente en el banco. </li>
                                    </ul>
                                    <br><br>
                                    Para empresas del extranjero únicamente tenemos pagos en transferencia.
                                    <br><br>
                                    Por políticas de la empresa NO RECIBIMOS PAGOS EN EFECTIVO.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué documentos piden para tramitar un crédito? 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Persona moral:
                                    <ul>
                                        <li>Declaración anual de impuestos</li>
                                        <li>Estados financieros firmados por el Representante legal</li>
                                        <li>Acta constitutiva</li>
                                        <li>Constancia de situación fiscal</li>
                                        <li>Comprobante de domicilio</li>
                                        <li>Identificación oficial del Representante legal</li>
                                    </ul>
                                    <br><br>
                                    Persona física:
                                    <ul>
                                        <li>Última declaración anual</li>
                                        <li>Información financiera actualizada</li>
                                        <li>RFC</li>
                                        <li>Comprobante de situación fiscal</li>
                                        <li>Comprobante de domicilio</li>
                                        <li>Identificación oficial</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué plazos de pago manejan?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Manejamos plazos entre 30 y 60 días.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo puedo acceder a mi estado de cuenta?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Cada semana los días lunes y viernes se envían los estados de cuenta.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 1">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo puedo rastrear mis pedidos?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuáles son los horarios de entrega de material?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Se puede recoger el material en sus instalaciones?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Sí, los horarios de entrega son de Lunes a Viernes de 12:00 pm a 4:00 pm
                                    <br><br>
                                    Es importante recalcar, que antes de la recolección el cliente deberá enviar 
                                    su comprobante de pago y validarlo con su vendedor o con nuestro departamento de 
                                    Cuentas por Cobrar; de esta forma se liberará el material.
                                    <br><br>
                                    Si el cliente necesita hacer la recolección en un horario diferente, 
                                    deberá hacer la cita a través del Comercial con mínimo 24 horas de 
                                    anterioridad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué tiempos de entrega tienen?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El material se libera una vez ingrese el pago o el área de crédito valide; una vez confirmado este paso los tiempos de entrega son:
                                    <ul>
                                        <li>Entregas locales:  24 horas </li>
                                        <li>Entregas Foráneas: 48 horas</li>
                                    </ul>
                                    <br><br>
                                    IMPORTANTE:  Las confirmaciones deben realizarse:
                                    <ul>
                                        <li>Entregas locales antes de las 4:00 pm</li>
                                        <li>Entregas foráneas antes de las 12:00 pm.</li>
                                    </ul>
                                    <br><br>
                                    Si la confirmación de pago se realiza después de este horario, ingresaría al siguiente día hábil.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo es el procedimiento para no conformidades?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    A través del comercial asignado deberá comunicarse con detalles, 
                                    todos los datos e imágenes sobre la no conformidad, de esa forma 
                                    se podrá crear la incidencia para su respectivo proceso.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Tienen stock de producto en sus sucursales?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    SÍ, cada sucursal cuenta con stock de material.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 2">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo puedo rastrear mis pedidos?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuáles son los horarios de entrega de material?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Se puede recoger el material en sus instalaciones?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Sí, los horarios de entrega son de Lunes a Viernes de 12:00 pm a 4:00 pm
                                    <br><br>
                                    Es importante recalcar, que antes de la recolección el cliente deberá enviar 
                                    su comprobante de pago y validarlo con su vendedor o con nuestro departamento de 
                                    Cuentas por Cobrar; de esta forma se liberará el material.
                                    <br><br>
                                    Si el cliente necesita hacer la recolección en un horario diferente, 
                                    deberá hacer la cita a través del Comercial con mínimo 24 horas de 
                                    anterioridad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué tiempos de entrega tienen?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El material se libera una vez ingrese el pago o el área de crédito valide; una vez confirmado este paso los tiempos de entrega son:
                                    <ul>
                                        <li>Entregas locales:  24 horas </li>
                                        <li>Entregas Foráneas: 48 horas</li>
                                    </ul>
                                    <br><br>
                                    IMPORTANTE:  Las confirmaciones deben realizarse:
                                    <ul>
                                        <li>Entregas locales antes de las 4:00 pm</li>
                                        <li>Entregas foráneas antes de las 12:00 pm.</li>
                                    </ul>
                                    <br><br>
                                    Si la confirmación de pago se realiza después de este horario, ingresaría al siguiente día hábil.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo es el procedimiento para no conformidades?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    A través del comercial asignado deberá comunicarse con detalles, 
                                    todos los datos e imágenes sobre la no conformidad, de esa forma 
                                    se podrá crear la incidencia para su respectivo proceso.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Tienen stock de producto en sus sucursales?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    SÍ, cada sucursal cuenta con stock de material.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 3">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo puedo rastrear mis pedidos?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuáles son los horarios de entrega de material?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Se puede recoger el material en sus instalaciones?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Sí, los horarios de entrega son de Lunes a Viernes de 12:00 pm a 4:00 pm
                                    <br><br>
                                    Es importante recalcar, que antes de la recolección el cliente deberá enviar 
                                    su comprobante de pago y validarlo con su vendedor o con nuestro departamento de 
                                    Cuentas por Cobrar; de esta forma se liberará el material.
                                    <br><br>
                                    Si el cliente necesita hacer la recolección en un horario diferente, 
                                    deberá hacer la cita a través del Comercial con mínimo 24 horas de 
                                    anterioridad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué tiempos de entrega tienen?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El material se libera una vez ingrese el pago o el área de crédito valide; una vez confirmado este paso los tiempos de entrega son:
                                    <ul>
                                        <li>Entregas locales:  24 horas </li>
                                        <li>Entregas Foráneas: 48 horas</li>
                                    </ul>
                                    <br><br>
                                    IMPORTANTE:  Las confirmaciones deben realizarse:
                                    <ul>
                                        <li>Entregas locales antes de las 4:00 pm</li>
                                        <li>Entregas foráneas antes de las 12:00 pm.</li>
                                    </ul>
                                    <br><br>
                                    Si la confirmación de pago se realiza después de este horario, ingresaría al siguiente día hábil.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo es el procedimiento para no conformidades?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    A través del comercial asignado deberá comunicarse con detalles, 
                                    todos los datos e imágenes sobre la no conformidad, de esa forma 
                                    se podrá crear la incidencia para su respectivo proceso.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Tienen stock de producto en sus sucursales?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    SÍ, cada sucursal cuenta con stock de material.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 4">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo puedo rastrear mis pedidos?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuáles son los horarios de entrega de material?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Se puede recoger el material en sus instalaciones?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Sí, los horarios de entrega son de Lunes a Viernes de 12:00 pm a 4:00 pm
                                    <br><br>
                                    Es importante recalcar, que antes de la recolección el cliente deberá enviar 
                                    su comprobante de pago y validarlo con su vendedor o con nuestro departamento de 
                                    Cuentas por Cobrar; de esta forma se liberará el material.
                                    <br><br>
                                    Si el cliente necesita hacer la recolección en un horario diferente, 
                                    deberá hacer la cita a través del Comercial con mínimo 24 horas de 
                                    anterioridad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué tiempos de entrega tienen?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El material se libera una vez ingrese el pago o el área de crédito valide; una vez confirmado este paso los tiempos de entrega son:
                                    <ul>
                                        <li>Entregas locales:  24 horas </li>
                                        <li>Entregas Foráneas: 48 horas</li>
                                    </ul>
                                    <br><br>
                                    IMPORTANTE:  Las confirmaciones deben realizarse:
                                    <ul>
                                        <li>Entregas locales antes de las 4:00 pm</li>
                                        <li>Entregas foráneas antes de las 12:00 pm.</li>
                                    </ul>
                                    <br><br>
                                    Si la confirmación de pago se realiza después de este horario, ingresaría al siguiente día hábil.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo es el procedimiento para no conformidades?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    A través del comercial asignado deberá comunicarse con detalles, 
                                    todos los datos e imágenes sobre la no conformidad, de esa forma 
                                    se podrá crear la incidencia para su respectivo proceso.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Tienen stock de producto en sus sucursales?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    SÍ, cada sucursal cuenta con stock de material.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showOptions === 5">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    ¿Cómo puedo rastrear mis pedidos?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    A través del comercial asignado se inicia la solicitud de trámite.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cuáles son los horarios de entrega de material?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Pueden ser beneficiarios de crédito tanto personas físicas como morales, mexicanos o extranjeros.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Se puede recoger el material en sus instalaciones?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Sí, los horarios de entrega son de Lunes a Viernes de 12:00 pm a 4:00 pm
                                    <br><br>
                                    Es importante recalcar, que antes de la recolección el cliente deberá enviar 
                                    su comprobante de pago y validarlo con su vendedor o con nuestro departamento de 
                                    Cuentas por Cobrar; de esta forma se liberará el material.
                                    <br><br>
                                    Si el cliente necesita hacer la recolección en un horario diferente, 
                                    deberá hacer la cita a través del Comercial con mínimo 24 horas de 
                                    anterioridad.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Qué tiempos de entrega tienen?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El material se libera una vez ingrese el pago o el área de crédito valide; una vez confirmado este paso los tiempos de entrega son:
                                    <ul>
                                        <li>Entregas locales:  24 horas </li>
                                        <li>Entregas Foráneas: 48 horas</li>
                                    </ul>
                                    <br><br>
                                    IMPORTANTE:  Las confirmaciones deben realizarse:
                                    <ul>
                                        <li>Entregas locales antes de las 4:00 pm</li>
                                        <li>Entregas foráneas antes de las 12:00 pm.</li>
                                    </ul>
                                    <br><br>
                                    Si la confirmación de pago se realiza después de este horario, ingresaría al siguiente día hábil.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Cómo es el procedimiento para no conformidades?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    A través del comercial asignado deberá comunicarse con detalles, 
                                    todos los datos e imágenes sobre la no conformidad, de esa forma 
                                    se podrá crear la incidencia para su respectivo proceso.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    ¿Tienen stock de producto en sus sucursales?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    SÍ, cada sucursal cuenta con stock de material.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="mt-16 bg-end">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center" class="mt-16">
                        <h1 class="white--text font-archivo font-size-40 font-weight-bold">¿No resolvimos tus dudas?</h1>
                    </v-col>                    
                    <v-col cols="7" align="center">
                        <p class="white--text font-size-20">Puedes enviarnos un mensaje por nuestros diferentes canales de comunicación</p>
                    </v-col>
                    <v-col cols="7" align="center" class="mb-10">
                        <v-btn class="font-size-20 black--text px-10 py-6 body-1 text-none rounded-lg" color="#19D3C5">Escríbenos</v-btn>
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
            tabs:[0],
            showOptions: 0
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.panel-color{
    background: white;
    border: 2px solid ;
    border-radius: 20px 20px 20px 20px;
    border-color: #19D3C5;
}
.bg-end{
    background-color: #3D7CC9;
}
</style>