<template>
  <div class="admin">
    <div class="c-row">
      <div class="col p-0 m-0 admin-sidebar bg-custom-dark">
        <div class="py-4">
          <div
            class="
              d-flex
              flex-column
              align-items-center
              justify-content-center
              m-auto
            "
          >
            <b-avatar rounded="circle" size="70"></b-avatar>
            <span class="text-light m-0 mt-1">اسم المستخدم</span>
          </div>
        </div>

        <div class="content">
          <ul class="side-bar-list p-0 m-0">
            <b-nav-item to="/admin">
              <fa icon="fa-solid fa-house" />
              الرئيسية
            </b-nav-item>
            <b-nav-item to="/admin/sales">
              <fa icon="fa-solid fa-coins" />
              المبيعات
            </b-nav-item>
            <b-nav-item to="/admin/cars">
              <fa icon="fa-solid fa-car " />
              السيارات
            </b-nav-item>
            <b-nav-item to="/admin/products">
              <fa icon="fa-solid fa-store" />
              المخزن
            </b-nav-item>
            <b-nav-item to="/admin/categories">
              <fa icon="fa-solid fa-list-ul" />
              التصنيفات
            </b-nav-item>
            <b-nav-item to="/admin/customers">
              <fa icon="fa-solid fa-users" />
              الزبائن
            </b-nav-item>
            <b-nav-item to="/admin/settings">
              <fa icon="fa-solid fa-gear" />
              الإعدادات
            </b-nav-item>
          </ul>
        </div>
      </div>

      <div class="col main p-0 m-0">
        <navbar></navbar>
        <bread-crumb class="mt-2">
          <router-view name="actions">

          </router-view>
          
        </bread-crumb>
        <router-view ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
  },
  data: () => ({}),
};
</script>

<style lang='scss'>
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
    transition: 0.3s ease-in;
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