<template>
  <b-container>
    <b-row class="my-4">
      <b-col>
        <h3>اضافة سيارة</h3>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">بلد المنشأ</label>
            <b-form-select
              v-model="carDto.country"
              :options="countries"
            ></b-form-select>
          </div>
        </b-col>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <div>
              <label for="">الشركة المصنعة</label>
            </div>
            <b-form-select
              :options="brandsList.filter((el) => el.country == carDto.country)"
              :disabled="!carDto.country"
              value-field="name"
              text-field="name"
              placeholder="ادخل اسم الشركة المصنعة"
              v-model="carDto.maker"
            />
          </div>
          <span class="text-danger" v-if="!carDto.country"
            >يجب اختيار بلد المنشأ اولا</span
          >
        </b-col>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">اسم السيارة</label>
            <b-input v-model="carDto.name" placeholder="ادخل اسم السيارة" />
          </div>
        </b-col>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">الموديل</label>
            <b-input
              placeholder="ادخل سنة انتاج السيارة"
              v-model="carDto.model"
            ></b-input>
          </div>
        </b-col>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">صورة السيارة</label>
            <!-- <input-image v-model="image" :multiple="false"></input-image> -->
            <input-image @input="handleImage" type="image"></input-image>
            <pre>
              {{ image }}
            </pre>
          </div>
        </b-col>
      </b-row>
      <template #footer>
        <b-button variant="dark" @click="submit">
          اضافة السيارة <fa icon="fas fa-plus"></fa>
        </b-button>
      </template>
    </b-card>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      selectedCountry: null,
      image: null,
    };
  },
  methods: {
    handleImage(e) {
      console.log(e);
      this.carDto.image = e;
    },

    ...mapActions(["addCar"]),
    submit() {
      let formData = new FormData();
      formData.append("name", this.carDto.name);
      formData.append("maker", this.carDto.maker);
      formData.append("model", this.carDto.model);
      formData.append("country", this.carDto.country);
      formData.append("image", this.carDto.image);
      this.addCar(formData);
    },
  },
  computed: {
    ...mapState({
      brandsList: (state) => state.data.brands,
      countries: (state) => state.data.countries,
      carDto: (state) => state.cars.carDto,
    }),
  },
};
</script>

<style></style>
