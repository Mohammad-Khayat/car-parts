<template>
  <div class="admin">
       <div class="col p-0 m-0 admin-sidebar bg-main-light shadow">
        <side-bar></side-bar>
    </div>



      <div class="col main p-0 m-0">
      <b-container class="my-2">
        <navbar class="shadow-sm rounded"></navbar>
      </b-container>
        <bread-crumb class="mt-2">
          <router-view name="actions"> </router-view>
        </bread-crumb>
        <router-view></router-view>
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
@import '@/assets/_custom.scss';

.admin {
  position: relative;
ul,
li {
  list-style: none !important;
  padding: 0 15px;
}
.admin-sidebar {
  position: fixed;
  height: 100%;
  width: 240px;
  opacity: .8;
  backdrop-filter: blur(5px);
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
    padding: 18px;
    transition: 0.3s ease-in-out;
    border-radius: 25px;
    &:hover {
  background-color:#2b2b2b1a;

    }

  }
  .router-link-active{
  background-color:#2b2b2b1a;
  
}
}
.main {
  height: 100%;
  position: absolute;
  width: calc(100% - 240px);
  left: 0;
}
}

</style>
