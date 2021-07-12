export default async ({app, store}) => {
  app.router.afterEach((to, from) => {
    console.log("ページ移動しました");
  });
}
