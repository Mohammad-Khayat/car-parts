<template>
  <div>
    <b-card
      class="category rounded"
      footer-class="p-0"
      header-class="p-0 rounded"
    >
      <template #header>
        <div
          class="d-flex justify-content-between align-items-center bg-custom-dark p-2 rounded"
        >
          <h6 class="text-main m-0">
            {{ category.name }}
          </h6>
          <b-button
            @click="$emit('edit', category)"
            variant="outline-dark"
            class="text-light rounded-circle p-0 "
            style="height:30px; width:30px"
          >
            <fa icon="fas fa-ellipsis-vertical" class="text-light"> </fa>
          </b-button>
        </div>
      </template>

      <b-img
        class="w-100"
        :src="category.image"
        style="height:250px; object-fit:cover;"
      >
      </b-img>

      <template #footer>
        <b-button variant="custom-dark" block>
          عرض المنتجات ({{ category.quantity }})
        </b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style>
.add-btn {
  bottom: 10%;
  right: 20%;
  position: fixed;
  z-index: 10000;
  border: #fff 1px solid;
}
</style>
