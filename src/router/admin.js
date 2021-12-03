export default [
  {
    name: "home",
    path: "",
    components: {
      default: () => import("../views/admin/pages/home"),
    },

    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
      ],
    },
  },

  {
    name: "cars",
    path: "cars",
    components: {
      default: () => import("../views/admin/pages/cars"),
      actions: () =>
        import("../views/admin/pages/cars/components/CarActions.vue"),
    },

    meta: {
      pageTitle: "السيارات",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "السيارات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },
  {
    name: "CarDetails",
    path: "cars/:id",
    props: true,
    component: () => import("../views/admin/pages/cars/components/CarForm.vue"),
    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "السيارات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },

  {
    path: "categories",
    name: "Categories",
    components: {
      default: () => import("../views/admin/pages/categories"),
    },
    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "التصنيفات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },
  {
    path: "products",
    name: "Products",
    components: {
      default: () => import("../views/admin/pages/products/Products.vue"),
      actions: () =>
        import("../views/admin/pages/products/components/ProductAction.vue"),
    },
    meta: {
      pageTitle: "جميع القطع",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "المخزن",
          path: "/admin/products",
          icon: "fas fa-home",
        },
      ],
    },
  },
  {
    path: "products/:id",
    name: "Products",
    props: true,
    components: {
      default: () =>
        import("../views/admin/pages/products/components/ProductDetails.vue"),
    },
    meta: {
      pageTitle: "التفاصيل",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "المخزن",
          path: "/admin/products",
          icon: "fas fa-home",
        },
      ],
    },
  },
];
