<template>
  <v-container>
      <v-form ref="form" v-model="valid" class="d-flex align-center justify-center flex-column" lazy-validation>          
          <v-text-field @change="resetValidation" @input="resetValidation" @blur="resetValidation"  :style="styleInput" v-model="crm" prefix="CRM"
          placeholder="0000000" :rules="crmRules"></v-text-field>          



          <v-select @change="resetValidation" @blur="resetValidation" :style="styleInput" prefix="UF" v-model="uf" :items="ufFormatted" placeholder="Selecione" :rules="[v => !!v || 'UF é Obrigatório']">
              <template v-slot:prepend-item>
                  <v-list-item ripple @click="setNull">                      
                      <v-list-item-content>
                          <v-list-item-title>Selecione</v-list-item-title>
                      </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
              </template>
          </v-select>

          <v-btn width="442" color="purple lighten-3 white--text" class="mr-4 mt-5 mb-10" @click="validate">
              Continue
          </v-btn>
          
          <!-- <v-alert dense width="442" type="success" :value="showSuccess">
            Sucesso
          </v-alert> -->

          <v-img max-width="308" max-height="48" src="../assets/canaldecompraexclusi.png"></v-img>
      </v-form>
  </v-container>
</template>

<script>
import fetchData from '../mixins/fetchData.js';
import {mapMutations} from 'vuex';
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
            uf: ''            
        }
    },
    methods: {
        ...mapMutations(['CHANGE_ALERT', 'REMOVE_ALERT']),    
        setNull(){
            this.uf = 'Selecione';
            this.validate()
        },
        validate() {
            if(this.uf == 'Selecione'){
                this.uf = false;                
            }            
            if(this.$refs.form.validate()){                
                this.CHANGE_ALERT('Sucesso');
            }else{
                this.REMOVE_ALERT('');                
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
            .sort()
            .filter(r => r != undefined)
            return ufs
        },        
    },
}
</script>

<style>

</style>