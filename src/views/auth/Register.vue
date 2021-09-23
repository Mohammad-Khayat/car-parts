<template>
  <div class="full-screen d-flex align-items-center justify-content-center  ">
    <b-form class="signup-form auth-form bg-light pt-3 px-2">

      <b-row no-gutters>
        <b-col cols="12" class="my-2">
          <div class="d-flex flex-column">
            <label for="">اسم المستخدم</label>
            <b-input placeholder="ادخل اسم المستخدم"></b-input>
          </div>
        </b-col>
        <b-col cols="12" class="my-2">
          <div class="d-flex flex-column">
            <label for="">كلمة المرور</label>
            <b-input placeholder="ادخل كلمة المرور "></b-input>
          </div>
        </b-col>
        <b-col cols="12 " class="my-2">
          <div class="d-flex flex-column">
            <label for=""> التحقق من كلمة المرور </label>
            <b-input placeholder=" ادخل كلمة المرور مجددا "></b-input>
          </div>
        </b-col>
        <b-col cols="12" class="my-2">
            <b-button variant="primary" block>انشاء حساب</b-button>
        </b-col>
      </b-row>
    </b-form>
      <div>
    <small>لديك حساب بالفعل؟<a class="text-primary" @click="$router.push('/login')"> تسجيل الدخول </a></small>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.auth-form{
    width: 500px;
    border-radius: 10px;
}
</style>