<template>
    <layout-dashboard>
        <v-form class="mt-10 mb-16">
            <v-row justify="center">
                <v-col cols="12">
                    <h1 class="font-size-18">Dirección 1</h1>
                </v-col>

                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Pais"></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Estado"></v-select>
                </v-col>

                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Ciudad"></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Calle"></v-text-field>
                </v-col>
                <!--<v-col cols="12" lg="4" md="4">
                    <v-text-field class="" outlined rounded filled label="Número ext."></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" outlined rounded filled label="Número int."></v-text-field>
                </v-col>-->

                <!--<v-col cols="12" lg="4" md="4">
                    <v-select class="" outlined rounded filled label="Telefono"></v-select>
                </v-col>-->
                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="C.P."></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6"></v-col>
                
                <v-col cols="12">
                    <v-img src="/client/direccion-client.png" contain max-height="220"></v-img>
                </v-col>

                <v-col cols="12">
                    <h1 class="font-size-18">Dirección 2</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Pais"></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Estado"></v-select>
                </v-col>

                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="Ciudad"></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Calle"></v-text-field>
                </v-col>
                <!--<v-col cols="12" lg="4" md="4">
                    <v-text-field class="" outlined rounded filled label="Número ext."></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" outlined rounded filled label="Número int."></v-text-field>
                </v-col>-->

                <!--<v-col cols="12" lg="4" md="4">
                    <v-select class="" outlined rounded filled label="Telefono"></v-select>
                </v-col>-->
                <v-col cols="12" lg="6" md="6">
                    <v-select class="" outlined rounded filled label="C.P."></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6"></v-col>
                <v-col cols="12">
                    <v-img src="/client/direccion-client.png" contain max-height="220"></v-img>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6" align="center">
                    <v-btn class="px-16 py-6 text-none" color="#19D3C5" outlined rounded block>
                        <span class="black--text">Nueva dirección</span>
                    </v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn class="primary-color black--text px-16 py-6 text-none" rounded block>Solicitud de cambios/eliminación</v-btn>
                </v-col>
            </v-row>

        </v-form>
    </layout-dashboard>
</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue'
export default {
  components: { LayoutDashboard },

}
</script>

<style>

</style>