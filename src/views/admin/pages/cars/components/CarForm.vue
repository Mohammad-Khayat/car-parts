<template>
  <b-container>
    <b-row class="my-4">
      <b-col>
        <h3>اضافة سيارة</h3>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col cols="6">
          <div class="d-flex flex-column">
            <label for="">اسم السيارة</label>
            <b-input placeholder="ادخل اسم السيارة" />
          </div>
        </b-col>
        <b-col cols="6">
          <div class="d-flex flex-column">
            <label for="">الشركة المصنعة</label>
            <b-input placeholder="ادخل اسم الشركة المصنعة" />
          </div>
        </b-col>
        <b-col cols="6" class="my-4">
          <div class="d-flex flex-column">
            <label for="">بلد المنشأ</label>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="d-flex flex-column">
            <label for="">صورة السيارة</label>
            <input-image></input-image>

          </div>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "يرجى اختيار دولة" },
        { value: "germany", text: "Germany" },
        { value: "america", text: "America" },
        { value: "japan", text: "Japan" },
        { value: "korea", text: "Korea" },
        { value: "france", text: "France" },
      ],
    };
  },
};
</script>

<style>
</style>