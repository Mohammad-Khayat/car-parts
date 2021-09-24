<template>
<div id="app">

<nav-bar></nav-bar>
<router-view>

</router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  },
};
</script>

<style lang="scss">
body{
  padding-top: 56px;
}
*{
  direction: rtl;
  text-align: right;
}
.full-screen{

  height: calc(100vh - 56px);
  flex-direction: column;
}
small{
  cursor: pointer;
}
label{
  color:#777;
}
::placeholder{
  font-size:12px ;
}
@import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
*{

  font-family: 'Tajawal', sans-serif !important;
}
body{
  background-color: #f5f5f5 !important;
}
</style>

