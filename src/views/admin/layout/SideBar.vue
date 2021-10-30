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
            <span class="m-0 mt-1">اسم المستخدم</span>
          </div>
        </div>

        <div class="content">
          <ul class="side-bar-list p-0 m-0">
            <b-nav-item to="/admin" class="my-2">
              <fa icon="fa-solid fa-house"  class="ml-2 text-primary" />
              <span  class="text-main-dark">
              رابط
              </span>
            </b-nav-item>


            <b-nav-item to="/admin/sales" class="my-2">
              <fa icon="fa-solid fa-coins" class="ml-2 text-primary" />
              <span  class="text-main-dark">
              رابط
              </span>
            </b-nav-item>
 
          </ul>
        </div>
</div>

</template>

<script>
export default {};
</script>

<style>



</style>
