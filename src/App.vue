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

</style>

