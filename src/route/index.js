import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/About.vue')
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return {
				x: 0,
				y: 0
			};
		}
	}
});

//此处做路由鉴权和动态状态注册
router.beforeEach((to, from, next) => {
	next();
})

export default router;