<template>
  <div class="full-screen  login d-flex align-items-center justify-content-center">

    <b-form class="auth-form bg-light pt-3 px-2">
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
            <b-input placeholder="ادخل كلمة المرور"></b-input>
          </div>
        </b-col>
        <b-col cols="12" class="my-2">
          <b-button variant="primary "  block> تسجيل الدخول</b-button>
        </b-col>
      </b-row>
    </b-form>
    <div>
    <small>الا تملك حساب؟ <a class="text-primary" @click="$router.push('/register')">انشاء حساب جديد</a></small>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>

</style>