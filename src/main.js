import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProductSearch from "./components/ProductSearch.vue";
import ProductDetail from "./components/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
      props: {
        title: "Home Page",
      },
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      component: About,
      sensitive: true,
    },
    {
      path: "/products/search",
      component: ProductSearch,
      name: "product-search",
      props: (route) => {
        return {
          product: route.query.product,
        };
      },
    },
    {
      path: "/products/search/:keyword",
      redirect: (route) => {
        return {
          name: "product-search",
          query: { product: route.params.keyword },
        };
      },
    },
    {
      path: "/products/:id(\\d+)?",
      component: ProductDetail,
      props: true,
      // props: (route) => {
      //   return {
      //     id: route.params.id,
      //   };
      // },
    },
    {
      path: "/users",
      component: () => import("./components/User.vue"),
      children: [
        {
          path: "",
          name: "user",
          components: {
            default: () => import("./components/UserProfile.vue"),
            header: () => import("./components/UserHeader.vue"),
          },
        },
        {
          path: "profile",
          name: "user-profile",
          components: {
            default: () => import("./components/UserProfile.vue"),
            header: () => import("./components/UserHeader.vue"),
          },
        },
        {
          path: "order",
          components: {
            default: () => import("./components/UserOrder.vue"),
            header: () => import("./components/UserHeader.vue"),
            footer: () => import("./components/UserOrderFooter.vue"),
          },
          name: "user-order",
        },
        {
          path: "wishlist",
          components: {
            default: () => import("./components/UserWishlist.vue"),
            header: () => import("./components/UserHeader.vue"),
            footer: () => import("./components/userWishlistFooter.vue"),
          },
          name: "user-wishlist",
        },
      ],
    },
    {
      path: "/:notfound*",
      component: NotFound,
      beforeEnter: (to, from, next) => {
        console.log(`Not Found ${to.fullPath}`);
        next();
      },
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  console.log(`before navigation to ${to.fullPath} from ${from.fullPath}`);
  next();
});
router.afterEach((to, from) => {
  console.log(`after navigation to ${to.fullPath} from ${from.fullPath}`);
});

createApp(App).use(router).mount("#app");
