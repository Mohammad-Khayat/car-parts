import Vue from 'vue'
import InputImage from "@/global-components/InputImage.vue";
import VueModal from "@/global-components/VueModal";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisVertical,
  faTimes,
  faBuilding,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faStore,
  faUsers,
  faBorderAll,
  faListUl,
  faCar,
  faGears,
  faPen,
  faTrash,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faListUl,
  faEllipsisVertical,
  faTimesCircle,
  faTimes,
  faPen,
  faBuilding,
  faGears,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faUsers,
  faStore,
  faBorderAll,
  faListUl,
  faCar,
  faTrash
);
Vue.component("fa", FontAwesomeIcon);
Vue.component("input-imge", InputImage);
Vue.component("vue-modal", VueModal);