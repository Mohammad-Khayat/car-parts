<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="custom-dark" class="d-flex justify-content-between align-items-center">
      <b-navbar-nav class="w-100 p-0 nav-search">
          <b-input placeholder="ابحث في اللوحة" > </b-input>
      </b-navbar-nav>
      <b-navbar-brand class="text-right">
        <h4 class="text-light m-0"><span class="text-main">Car</span> Parts</h4>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>

.nav-search{
  input{

    background-color: #2b2b2b !important;
    border: 0;
  }
}
</style>