import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      requiresAuth: false
    },
    component: () => import("@/views/home/home.vue")
  },
  /***************************************************************** 
  hospital
  */
  {
    path: "/hospital/:hoscode",
    name: "hospital",
    meta: {
      title: "挂号",
      requiresAuth: false
    },
    component: () => import("@/views/hospital/hospital.vue"),
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "挂号",
          requiresAuth: false,
          key: "home"
        },
        component: () => import("@/views/hospital/home/home.vue")
      },
      {
        //门诊科室(挂号页面)
        path: ":depcode/:cdepcode/source",
        name: "source",
        meta: {
          title: "source",
          requiresAuth: true,
          key: "home"
        },
        component: () => import("@/views/hospital/home/source.vue")
      },
      {
        //门诊科室(挂号页面)
        path: ":depcode/:cdepcode/:docId/confirm",
        name: "confirm",
        meta: {
          title: "confirm",
          requiresAuth: true,
          key: "home"
        },
        component: () => import("@/views/hospital/home/confirm.vue")
      },
      {
        path: "detail",
        name: "detail",
        meta: {
          title: "挂号",
          requiresAuth: false,
          key: "detail"
        },
        component: () => import("@/views/hospital/detail/detail.vue")
      },
      {
        path: "notice",
        name: "notice",
        meta: {
          title: "挂号",
          requiresAuth: false,
          key: "notice"
        },
        component: () => import("@/views/hospital/notice/notice.vue")
      }
    ]
  },

  /***************************************************************** 
  support
  */
  {
    path: "/support/:path",
    name: "support",
    meta: {
      requiresAuth: false
    },
    component: () => import("@/views/support/support.vue")
  },
  /***************************************************************** 
  information
  */
  {
    path: "/information",
    name: "information",
    component: () => import("@/views/information/information.vue"),
    redirect: "/information/contact",
    children: [
      {
        path: "contact",
        name: "contact",
        meta: {
          title: "联系我们",
          isMenu: true,
          requiresAuth: false
        },
        component: () => import("@/views/information/contact/contact.vue")
      },
      {
        path: "cooperate",
        name: "cooperate",
        meta: {
          title: "合作伙伴",
          isMenu: true,
          requiresAuth: false
        },
        component: () => import("@/views/information/cooperate/cooperate.vue")
      },
      {
        path: "user-agreement",
        name: "user-agreement",
        meta: {
          title: "用户协议",
          isMenu: true,
          requiresAuth: false
        },
        component: () => import("@/views/information/user-agreement/user-agreement.vue")
      },
      {
        path: "privacy-agreement",
        name: "privacy-agreement",
        meta: {
          title: "隐私协议",
          isMenu: true,
          requiresAuth: false
        },
        component: () => import("@/views/information/privacy-agreement/privacy-agreement.vue")
      }
    ]
  },
  /***************************************************************** 
  注释 用户信息相关
  */
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user/user.vue"),
    redirect: "/user/authentication",

    children: [
      {
        path: "authentication",
        name: "authentication",
        meta: {
          requiresAuth: true,
          key: "authentication"
        },
        component: () => import("@/views/user/authentication/authentication.vue")
      },
      {
        path: "order",
        name: "order",
        meta: {
          requiresAuth: true,
          key: "order"
        },
        component: () => import("@/views/user/order/order.vue")
      },
      {
        path: "order/detail/:orderId",
        name: "order-detail",
        meta: {
          requiresAuth: true,
          key: "order"
        },
        component: () => import("@/views/user/order/order-detail.vue")
      },
      {
        path: "patient",
        name: "patient",
        meta: {
          requiresAuth: true,
          key: "patient"
        },
        component: () => import("@/views/user/patient/patient.vue")
      },
      {
        path: "patient/:operation/:pid?",
        meta: {
          title: "添加(编辑)就诊人",
          requiresAuth: true,
          key: "patient"
        },
        component: () => import("@/views/user/patient/patient-add.vue")
      },
      {
        path: "patient/detail/:id",
        meta: {
          title: "就诊人详情",
          requiresAuth: true,
          key: "patient"
        },
        component: () => import("@/views/user/patient/patient-detail.vue")
      }
    ]
  }
];

export default routes;
