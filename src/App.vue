<template>
  <v-app>
    <v-main class="container-principal " src="./assets/logomaxidoctor.png">
      <div id="Layer1"></div>
			<div id="Layer2"></div>
			<div id="Layer3"></div>
      <div id="numeros"></div>
      <router-view class="d-flex justify-space-around flex-column" style="height: 100%"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    
  }),
};
</script>
<style>
.container-principal{ 
  background-image: url('../src/assets/fundo_roxo.png');
  left: 0px; 
  top: 0px; 
  position: relative; 
  margin-left: auto; 
  margin-right: auto; 
  width: 640px;
  height: 100%; 
  overflow: hidden;
  z-index:0;
} 
#Layer1 {
  background-image: url('../src/assets/fundo/Layer1.png');
  left: -142px;
  top: -92px;
  position: absolute;
  width: 500px;
  height: 488px;
  z-index: -6;
}

#Layer2 {
  background-image: url('../src/assets/fundo/Layer2.png');
  opacity: .1;
  left: -186px;
  top: -177px;
  position: absolute;
  width: 661px;
  height: 685px;
  z-index: -7;
}

#Layer3 {
  background-image: url('../src/assets/fundo/Layer3.png');
  opacity: .1;
  left: -152px;
  top: -143px;
  position: absolute;
  width: 496px;
  height: 515px;
  z-index: -8;
}

#numeros {
  background-image: url('../src/assets/fundo/numeros.png');
  left: 22px;
  opacity: .1;
  top: -52px;
  position: absolute;
  width: 276px;
  height: 402px;
  z-index: -9;
}
</style>
