<template>

  <b-card
    footer-class="p-0 rounded shadow"
    header-class="p-1"
    class="rounded"
    body-class="p-0"
    

  >
    <template #header>
      <div class="d-flex justify-content-between align-items-center">
        <b-avatar
        variant=""

          size="30"
          :src="`/media/flags/${car.country}.png`"
        ></b-avatar>

        <h6 class="m-0 car-name">{{car.maker}}</h6>
      </div>
    </template>
    <b-img
      class="w-100 car-img "
      :src="car.image"
    ></b-img>
    <div class="info d-flex flex-column p-2">
      <div class="text-light-dark d-flex justify-content-between"><h6>الموديل : {{car.name}}</h6>
        <span class="text-main">{{car.model}}</span>

      </div>
      <div><h6>القطع المتوفرة : {{car.partsCount}}</h6></div>
    </div>
    <template #footer>
      <b-button class="text-light" variant="custom-dark" block>
        عرض القطع <fa class="text-main" icon="gear"></fa
      ></b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ["car"],
};
</script>

<style lang='scss' scoped>
.car-name {
  font-weight: bold;
}
.car-img{
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>