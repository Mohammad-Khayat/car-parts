<template>
  <div>
    <b-container>
      <b-row class="mt-2">
        <b-col
          v-for="category in categories"
          :key="category.id"
          class="my-3"
          cols="12"
          md="6"
        >
          <category-card
            @edit="openEditDialog"
            :category="category"
          ></category-card>
        </b-col>
      </b-row>
    </b-container>

    <div>
      <div class="w-100">
        <b-button
          @click="$refs.dialog.open()"
          class="rounded-circle add-btn"
          variant="custom-dark"
        >
          <fa icon="fas fa-plus"></fa>
        </b-button>
      </div>
      <vue-modal
        ref="dialog"
        isEdit
        :height="70"
        :width="40"
        title="اضافة تصنيف"
      >
        <b-row>
          <b-col cols="12" class="my-2">
            <div class="input-field">
              <label for="">اسم التصنيف</label>
              <b-input
                placeholder="ادخل اسم التصنيف"
                v-model="categoryDto.name"
              ></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="input-field">
              <label for="">صورة التصنيف</label>
              <input-image :value="categoryDto.image"></input-image>
            </div>
          </b-col>
        </b-row>

        <template #footer>
          <b-button variant="custom-dark"> اضافة التصنيف </b-button>
        </template>
      </vue-modal>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/views/admin/pages/categories/components/CategoryCard";
import { mapState } from "vuex";
export default {
  components: {
    CategoryCard,
  },
  methods: {
    openEditDialog(dto) {
      this.$refs.dialog.open();
      this.$store.commit("Set_Category_Dto", dto);
    },
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
      categoryDto: (state) => state.categories.categoryDto,
    }),
  },
};
</script>

<style></style>
