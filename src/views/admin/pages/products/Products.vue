<template>
  <div>
    <b-button  @click='$refs.modal.open()' class="rounded-circle add-btn" variant="custom-dark">
      <fa icon="fas fa-plus"></fa>
    </b-button>
  <vue-modal title='إضافة منتج' ref="modal" :width="80" :height="85">
  
    <b-row>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">اسم القطعة</label>
        <b-input placeholder='اسم القطعة'></b-input>
      </div>
    </b-col>

    
    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">السيارة التابعة</label>
        <b-input placeholder='اسم القطعة'></b-input>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">الكمية المتوفرة</label>
        <b-input placeholder='ادخل الكمية المتوفرة'></b-input>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">بلد المنشأ</label>
        <b-input placeholder='اختر بلد المنشأ'></b-input>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">السعر الأصلي</label>
        <b-input placeholder='اختر بلد المنشأ'></b-input>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">سعر المبيع </label>
        <b-input placeholder='ادخل سعر المبيع'></b-input>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">سعر المبيع </label>
        <b-textarea placeholder='وصف المنتج'></b-textarea>
      </div>
    </b-col>

    <b-col cols='6' class='my-2'>
      <div class="d-flex flex-column">
        <label for="">صورة المنتج </label>
        <input-image  placeholder='وصف المنتج'></input-image>
      </div>
    </b-col>
    </b-row>
  
<template #footer>
<div class="d-flex w-100">
<b-button variant="custom-dark">اضافة المنتج </b-button>
</div>

</template>



  </vue-modal>





  </div>
</template>

<script>
 export default {
   };
</script>

<style lang="scss">
.add-btn {
  bottom: 10%;
  right: 20%;
  position: fixed;
  z-index: 10;
  border: #fff 1px solid;
}
</style>
