export default {
  state: {
    productDto: {
      name: "",
      maker: "",
      country: "",
      description: "",
      quantity: 0,
      sellingPrice: "",
      orginalPrice: "",
      category_id: "",
      car_id: "",
      image:null
    },
    products: [
      {
        name: "مصفاة بانزين",
        maker: "Hyundai",
        country: "koria",
        description: "وصف هذا المنتج",
        quantity: 20,
        sellingPrice: "30",
        orginalPrice: "20",
        category_id: "1",
        car_id: 1,
        image:'https://static.summitracing.com/global/images/prod/xlarge/sum-250111_xl.jpg'
      },
      {
        name: "جوان كولاص",
        maker: "Hyundai",
        country: "koria",
        description: "وصف هذا المنتج",
        quantity: 20,
        sellingPrice: "30",
        orginalPrice: "20",
        category_id: "1",
        car_id: 2,
        image:'https://m.media-amazon.com/images/I/71l7JasSk-L._AC_SY355_.jpg'
      },
    ],
  },


  mutations:{
    Set_Product_Dto(state,data){
      if(data){
        state.productDto = data
      }
      else {
        state.productDto= {
          name: "",
          maker: "",
          country: "",
          description: "",
          quantity: 0,
          sellingPrice: "",
          orginalPrice: "",
          category_id: "",
          car_id: "",
          image:null
        }
      }

    }
  }


};
