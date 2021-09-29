<template>
  <div class="cars-list">


    <b-container>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="carItem in carsList" :key="carItem.name" class="my-4">
          <card :car="carItem"></card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { mapState } from "vuex";
export default {
  components: {
    Card,
  },
  computed: {
    ...mapState({ carsList: (state) => state.cars.cars }),
  },
};
</script>

<style>
</style>