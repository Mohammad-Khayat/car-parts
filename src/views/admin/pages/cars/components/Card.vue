<template>
  <b-card
    footer-class="p-0 rounded shadow"
    header-class="p-1"
    class="rounded"
    body-class="p-0 position-relative car-card"
  >
    <template #header>
      <div class="d-flex justify-content-between align-items-center">
        <!-- <b-avatar
          variant=""
          size="30"
          :src="brands.find((el) => el.name == car.maker).logo"
        ></b-avatar> -->

        <h6 class="m-0 car-name">{{ car.maker }}</h6>
      </div>
    </template>
    <div>
      <b-img
        class="w-100 car-img"
        :src="'http://192.168.43.34:8000/' + car.image"
      ></b-img>
      <div class="overlay d-flex align-items-center justify-content-center">
        <b-button
          class="rounded-circle mx-2"
          :to="'admin/cars/car.id'"
          variant="light"
        >
          <fa icon="fas fa-pen " class="text-main"></fa>
        </b-button>
        <b-button
          class="rounded-circle mx-2"
          variant="light"
          @click="$emit('delete', car.id)"
        >
          <fa icon="fas fa-trash " class="text-main "></fa>
        </b-button>
      </div>
      <div class="info d-flex flex-column p-2">
        <div class="text-light-dark">
          <h6>الاسم : {{ car.name }}</h6>
        </div>
        <div class="text-light-dark">
          <h6 class="text-dark">سنة الصنع : {{ car.model }}</h6>
        </div>
        <div>
          <h6>بلد المنشأ : {{ car.country }}</h6>
        </div>
        <div>
          <h6>القطع المتوفرة : {{ car.partsCount }}</h6>
        </div>
      </div>
    </div>
    <template #footer>
      <b-button class="text-light" variant="custom-dark" block>
        عرض القطع <fa class="text-main" icon="gear"></fa
      ></b-button>
    </template>
  </b-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["car"],
  computed: {
    ...mapState({ brands: (state) => state.data.brands }),
  },
};
</script>

<style lang="scss" scoped>
.car-card {
  &:hover .overlay {
    opacity: 1;
    display: block;
    visibility: visible;
  }
}
.car-name {
  font-weight: bold;
}
.car-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
.overlay {
  transition: 0.3s;
  position: absolute;
  height: 200px;
  width: 100%;
  background-color: #080808ea;
  opacity: 0;
  visibility: hidden;
  top: 0;
}
</style>
