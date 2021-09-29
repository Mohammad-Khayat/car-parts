export default [
  {
    name: "cars",
    path: "cars",
    components:
        {
            default: () => import("../views/admin/pages/cars"),
            'actions': () => import("../views/admin/pages/cars/components/CarActions.vue"),
        }

    ,
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
];
