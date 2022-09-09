<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" class="mb-10">
                        <!--<div class="calendly-inline-widget" data-url="https://calendly.com/alej-donatto" style="height: 650px;"></div>-->
                        <div class="calendly-inline-widget" data-url="https://calendly.com/polnac" style="height: 650px;"></div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        document.head.appendChild(recaptchaScript)
    }

}
</script>

<style scoped>

</style>