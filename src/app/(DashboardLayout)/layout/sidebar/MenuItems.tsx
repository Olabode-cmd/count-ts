import {
  IconBrandDaysCounter, IconHome, IconBuildingWarehouse } from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Count Session",
    icon: IconBrandDaysCounter,
    href: "/count-session",
  },
  {
    id: uniqueId(),
    title: "Warehouses",
    icon: IconBuildingWarehouse,
    href: "/warehouse",
  },
  // {
  //   id: uniqueId(),
  //   title: "Forms",
  //   icon: IconTable,
  //   href: "/ui-components/forms",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Alerts",
  //   icon: IconInfoCircle,
  //   href: "/ui-components/alerts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ratings",
  //   icon: IconStar,
  //   href: "/ui-components/ratings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/ui-components/images",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/ui-components/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tables",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/table",
  // },
];

export default Menuitems;
