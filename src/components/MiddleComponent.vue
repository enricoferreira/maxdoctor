<template>
  <v-container>
      <v-form ref="form" v-model="valid" class="d-flex align-center justify-center flex-column">          
          <v-text-field @change="resetValidation" @input="resetValidation" @blur="resetValidation"  :style="styleInput" v-model="crm" prefix="CRM"
          placeholder="0000000" :rules="crmRules" required></v-text-field>          

          <v-select @blur="resetValidation" :style="styleInput" prefix="UF" v-model="uf" :items="ufFormatted" :rules="[v => !!v || 'UF é Obrigatório']" required>
          </v-select>

          <v-btn width="442" color="purple lighten-3 white--text" class="mr-4 mt-5 mb-10" @click="validate">
              Continue
          </v-btn>
          
          <v-alert dense width="442" type="success" :value="showSuccess">
            Sucesso
          </v-alert>

          <v-img max-width="308" max-height="48" src="../assets/canaldecompraexclusi.png"></v-img>
      </v-form>
  </v-container>
</template>

<script>
import fetchData from '../mixins/fetchData.js';

export default {
    name: 'Middle',
    mixins: [fetchData],
    data() {
        return {
            styleInput: {
                color: 'gray',
                width: '442px'
            },
            valid: true,            
            crmRules: [
                v => !!v || 'CRM é Obrigatório',
                v => (v && v.length >= 5) || 'CRM deve ter 5 ou mais caracteres',
            ],            
            select: null,
            items: [] ,            
            crm: '',
            uf: null,
            showSuccess: false
        }
    },
    methods: {        
        validate() {
            this.$refs.form.validate()
            if(this.$refs.form.validate()){
                this.showSuccess = true
            }else{
                this.showSuccess = false
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {                     
            this.$refs.form.resetValidation()
        },
    },
    created() {
        this.getData()            
    },
    computed: {
        ufFormatted(){
            const ufs = Object.getOwnPropertyNames(this.api)
            .map(r => {
                return this.api[r].nome
            })
            return ufs
        },        
    },
}
</script>

<style>

</style>