import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';

Vue.use(Router);

// 自动导入module下所有模块
const routes = (modulesFiles => {
    return modulesFiles.keys().reduce((modules, modulePath) => {
        const value = modulesFiles(modulePath);
        modules.push(...value.default);
        return modules;
    }, []);
})(require.context('./module', false, /\.js$/));
console.log(routes);
const router = new Router({ routes, mode: 'history', base: '/', scrollBehavior: () => ({ y: 0 }) });
const whiteList = []; // 不重定向白名单
router.beforeEach((to, from, next) => {
    // if (store.getters.token) {
    //     if (to.matched.length === 0) {
    //         //如果未匹配到路由
    //         next({ path: '/login' });
    //         return;
    //     }
    //     next();
    // } else {
    //     if (whiteList.indexOf(to.path) !== -1) {
    //         next();
    //     } else {
    //         next('/login'); // 否则全部重定向到登录页
    //     }
    // }
    next();
});
// router.afterEach(() => {});
export default router;