export default {
  path: "/test",
  redirect: "/test/index",
  meta: {
    icon: "informationLine",
    title: "异常页面",
    // showLink: false,
    rank: 9
  },
  children: [
    {
      path: "/test/index",
      name: "Test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "测试页面"
      }
    }
  ]
} as RouteConfigsTable;
