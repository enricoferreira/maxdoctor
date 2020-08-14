<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-around" :style="styleInput">
      <div class="d-flex justify-center align-center flex-column">
        <v-img max-width="96" max-height="86" src="../assets/icones/ICONEFACILIDADE.png"></v-img>
        <div class="mt-2">FACILIDADE <br> DE COMPRA</div>
      </div>
      <div class="d-flex flex-column justify-end align-center">
        <div class="d-flex justify-space-around mb-1">
          <v-img v-for="(item, index) in arrayRectangle" :key="index" max-height="24" max-width="21" src="../assets/Rectangle1.png"></v-img>
        </div>
        <v-img max-width="84" max-height="19" src="../assets/icones/ICONEQUANTIDADE.png"></v-img>
        <div class="mt-2">QUANTIDADE <br> NÃO LIMITADA</div>
      </div>
    </div>
    <div class="d-flex justify-space-around align-end mt-3" :style="styleInput">
      <div>
        <v-img max-width="105" max-height="70" src="../assets/icones/ICONEFRETEGRATIS.png"></v-img>
        <div class="mt-2">FRETE GRÁTIS</div>
      </div>
      <div>
        <v-img max-width="101" max-height="80" src="../assets/icones/ICONEAGILIDADE.png"></v-img>
        <div class="mt-2">AGILIDADE</div>
      </div>
      <div>
        <v-img max-width="102" max-height="67" src="../assets/icones/ICONECOMODIDADE.png"></v-img>      
        <div class="mt-2">COMODIDADE</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
          arrayRectangle: [1, 2, 3],
          styleInput:{
            maxWidth: 442
          },
          width: 96,
          height: 86
        }            
    },
    methods: {
    },
}
</script>

<style>

</style>