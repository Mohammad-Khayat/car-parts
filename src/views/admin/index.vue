<template>
  <div class="admin">
    <div class="c-row">
      <div class="col p-0 m-0 admin-sidebar bg-custom-dark">
        <side-bar></side-bar>
      </div>

      <div class="col main p-0 m-0">
        <navbar></navbar>
        <bread-crumb class="mt-2">
          <router-view name="actions"> </router-view>
        </bread-crumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/views/admin/layout/SideBar.vue";
import Navbar from "./layout/NavBar.vue";
import BreadCrumb from "@/views/admin/layout/BreadCrumb.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
    SideBar,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.c-row {
  display: grid;
  grid-template-columns: 70% 25%;
}
.admin {
  position: relative;
}
ul,
li {
  list-style: none !important;
}
.admin-sidebar {
  position: fixed;
  height: 100%;
  width: 240px;
  background-color: #ccc;
  overflow: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .nav-link {
    color: #fff !important;
    padding: 20px;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.055) !important;
    }

    svg {
      margin-left: 20px;
      color: #ff3737;
    }
  }
}
.main {
  height: 100%;
  position: absolute;
  width: calc(100% - 240px);
  left: 0;
}
.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.055) !important;
}
</style>
