<template>
    <div>
        <Header></Header> 
        <Middle></Middle>
        <v-alert dense width="442" class="my-5 mx-auto" type="success" :value="alert">
            {{msgAlert}}
        </v-alert>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import Middle from '../components/MiddleComponent.vue';
import Footer from '../components/FooterComponent.vue';
import {mapState} from 'vuex';

export default {
    components: {
        Header,
        Footer,
        Middle
    },
    name: 'MaxDoctor',
    computed: {
        ...mapState(['alert', 'msgAlert'])
    },   
}
</script>

<style>

</style>