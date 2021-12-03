<template>
  <div>
     <b-button
      @click="$refs.modal.open()"
      class=" add-btn"
      variant="custom-dark"
    >
      <fa icon="fas fa-plus"></fa>
    </b-button>
    <vue-modal title="إضافة منتج" ref="modal" :width="80" :height="85">
      <b-row>
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">اسم القطعة</label>
            <b-input placeholder="اسم القطعة" v-model="productDto.name"></b-input>
          </div>
        </b-col>
         <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
             <label for="">السيارة التابعة</label>
            <vue-select
             v-model="productDto.car_id"
              :options="cars"
              placeholder="أختر السيارات التابعة"
            ></vue-select>
          </div>
        </b-col>

        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">الكمية المتوفرة</label>
            <b-input placeholder="ادخل الكمية المتوفرة"  v-model="productDto.quantity"></b-input>
          </div>
        </b-col>

        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">بلد المنشأ</label>
            <vue-select
             v-model="productDto.country"
              :options="countries"
              placeholder="اختر بلد المنشأ"
            ></vue-select>
          </div>
        </b-col>
 
        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for=""  >السعر الأصلي</label>
            <b-input placeholder="ادخل سعر الرأسمال"  v-model="productDto.orginalPrice"></b-input>
          </div>
        </b-col>

        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">سعر المبيع </label>
            <b-input placeholder="ادخل سعر المبيع"  v-model="productDto.sellingPrice"></b-input>
          </div>
        </b-col>

        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">وصف المنتج</label>
            <b-textarea placeholder="ادخل تفاصيل المنتج"  v-model="productDto.description"></b-textarea>
          </div>
        </b-col>

        <b-col cols="6" class="my-2">
          <div class="d-flex flex-column">
            <label for="">صورة المنتج </label>
            <input-image multiple placeholder="اختر صورة المنتج"  v-model="productDto.image"></input-image>
          </div>
        </b-col>
      </b-row>

      <template #footer>
        <div class="d-flex w-100">
          <b-button variant="custom-dark" >{{productDto.id?'تعديل المنتج':'اضافة المنتج'}} </b-button>
        </div>
      </template>
    </vue-modal>


<b-container>
     <vue-table class="my-3" :cols='columns' :data='products' >
    

    <template slot='items.car_id' slot-scope="{props}">
      {{cars.find(el=>props.row.car_id == el.id).name}}
    </template>

    <template slot="items.image" slot-scope="{props}">
    {{props}}
        
      
    </template>


    <template slot="items.options" slot-scope={props}>
    
    <div class="d-flex align-items-center justify-content-around">
    
    <b-button variant="primary" class="rounded" name='بيع المنتج'> 
    <fa icon = ' fas fa-cart-plus'>
    </fa>
    </b-button>
     
    <b-button variant="primary" class="rounded" name='التفاصيل' @click="getDetails(props.row)"> 
    <fa icon = 'fas fa-ellipsis'>
    </fa>
    </b-button>
    <b-button variant="primary" name='زيادة الكمية' >
    
    <fa icon='fas fa-plus'></fa>
    
    </b-button>
    
 
    
    
    </div>
    

    </template>
    
    </vue-table>
</b-container>






  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data(){
    return{
            columns: [
        {
          label: 'اسم القطعة',
          field: 'name',
        },
        {
          label: 'السيارة',
          field: 'car_id',
        },
        {
          label: 'بلد المنشأ',
          field: 'country',
        },
        {
          label: 'الكمية ',
          field: 'quantity',
         },
        {
          label: 'سعر البيع',
          field: 'sellingPrice',
        },
        {
          label: 'اجرائات',
          field: 'options',
        },
      ],

    }
  },
  computed: {
    ...mapState({
      cars: (state) => state.cars.cars,
      products: (state) => state.products.products,
      countries: (state) => state.data.countries,
      productDto:(state)=>state.products.productDto
    }),

  },
      methods: {
      ...mapMutations(['Set_Product_Dto']),
      getDetails(data){
        this.Set_Product_Dto(data)
        this.$refs.modal.open()
      }
    },
};
</script>

<style lang="scss">
.add-btn {
  bottom: 10%;
  height: 45px !important;
  width: 45px !important;
  right: 280px;
  border-radius: 50% !important ;
  
  position: fixed;
  z-index: 10;
  border: #fff 1px solid;
}
</style>
