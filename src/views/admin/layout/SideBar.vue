<template>
<div class="side">
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

</template>

<script>
export default {};
</script>

<style></style>
