<template>
    <div>
        <AppointmentCalendary/>
    </div>
</template>

<script>
export default {
    name: 'shedule-an-appointment',
    head: '',
    nuxtI18n: {
        paths: {
            es: '/agenda-una-cita',
            eng:'/shedule-an-appointment',
        }
    },
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    }
}
</script>

<style>

</style>