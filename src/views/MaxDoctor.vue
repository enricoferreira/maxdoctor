<template>
    <div>
        <Header></Header> 
        <Middle></Middle>
        <Footer></Footer>
        <!-- <v-alert dense width="442" type="success" :value="alert">
            Sucesso
        </v-alert> -->
    </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import Middle from '../components/MiddleComponent.vue';
import Footer from '../components/FooterComponent.vue';
// import {mapMutations, mapState} from 'vuex';

export default {
    components: {
        Header,
        Footer,
        Middle
    },
    name: 'MaxDoctor',
    // computed: {
    //     ...mapState(['alert'])
    // },
    // methods: {
    //     ...mapMutations(['CHANGE_ALERT'])
    // },
}
</script>

<style>

</style>