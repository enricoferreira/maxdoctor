<template>
  <v-container >
    <v-row>
      <v-col class="d-flex justify-center flex-column align-center text-h3" cols="12">
        Avaliação de {{nome}}
        <v-btn :to="{name: 'maxdoctor'}" class="mt-3" width="442" color="purple lighten-3 white--text">Acessar MaxDoctor</v-btn>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    ...mapState(['nome'])
  },
}
</script>
