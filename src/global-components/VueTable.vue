<template>
  <div>
    <vue-good-table
      class="vue-good-table-scope"
      :columns="cols"
      :rows="data"
      :sort-options="{ enabled: false }"
    >
                        <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'details'">
                            <slot name="items.details" :props="props">
                                <b-button
                                    size="sm"
                                    variant="flat-secondary"
                                    class="btn-icon rounded-circle mx-auto"
                                    style="padding: 2px 6px !important"
                                    @click="details(props)"
                                >
                                    <unicon name="ellipsis-v" width="18"></unicon>
                                </b-button>
                            </slot>
                        </span>
                        <span v-else>
                            <slot :name="'items.' + props.column.field" :value="props.formattedRow[props.column.field]" :props="props">
                                {{ props.formattedRow[props.column.field] }}
                            </slot>
                        </span>
                    </template>
    </vue-good-table>
  </div>
</template>
// :search-options="{enabled: true}"

<script>
export default {
  name: "my-component",
  props: {
    cols: Array,
    data: Array,
    label: String,
    sortable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};



    
  },
};
</script>

<style lang="scss">
@import "@/assets/_custom.scss";

.vue-good-table-scope {
  overflow: hidden;
  border: 0 !important;
  border-radius: 10px !important;
  table {
    thead {
      tr {
        th {
          color: #fff;
          background: $mainDark !important ;
          vertical-align: middle !important;
          text-align: center !important;
        }
      }
    }
    td{
      vertical-align: middle !important;
      text-align: center ;
      font-size: 20px;
    }
}

.vgt-table.bordered td, .vgt-table.bordered th {
    border: 0 !important
}


  }
</style>
