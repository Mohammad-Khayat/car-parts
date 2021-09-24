<template>
  <div>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-container>

    <b-navbar-brand href="#" >
      <span class="text-main">
      Auto</span>Cars   
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" class='text-main'> Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
           User
          </template>
          <b-dropdown-item to="register">Register</b-dropdown-item>
          <b-dropdown-item to="login">Login</b-dropdown-item>
            
          <b-dropdown-item to="">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
      </b-container>
  </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>