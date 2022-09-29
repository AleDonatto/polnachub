<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" align="center">
                    <h1 class="font-archivo mt-16 font-size-34">Mi cuenta</h1>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" align="center">
                    <v-tabs color="black" slider-color="#19D3C5">
                        <v-tab class="text-none" to="/client/perfil">Perfil</v-tab>
                        <v-tab class="text-none" to="/client/contacto">Contactos</v-tab>
                        <v-tab class="text-none" to="/client/credito">Crédito</v-tab>
                        <v-tab class="text-none" to="/client/destinatarios">Destinatarios</v-tab>
                        <v-tab class="text-none" to="/client/cuentas">Estados de cuenta</v-tab>
                        <v-tab class="text-none" to="/client/pedidos">Pedidos</v-tab>
                        <v-tab class="text-none" to="/client/casos">Casos</v-tab>
                        <v-tab disabled class="text-none">Servicio a cliente</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <slot></slot>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>