import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

//引入进度条
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

//sotre
import { useUserStore } from "@/stores/index";
console.log(import.meta);
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: routes
});
console.log(router);

Nprogress.configure({ showSpinner: false });

//添加相应的全局守卫
//前置守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  //访问路由组件的之前,进度条开始动
  Nprogress.start();
  //判断用户是否登录-token
  const token = userStore.userInfo.token;

  //如果用户登录，可以访问所有的页面
  if (token) {
    next();
  } else {
    //如果没有登陆，需要条件才能访问
    if (to.meta.requiresAuth == false) {
      next();
    } else {
      //登录组件显示出来
      userStore.visiable = true;
      next({ path: from.fullPath, query: { redirect: to.fullPath } });
    }
  }
});

//后置路由
router.afterEach(() => {
  //访问路由组件成功,进度条消息
  Nprogress.done();
});

export default router;
