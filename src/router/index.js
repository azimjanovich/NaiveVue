import { createRouter, createWebHistory } from 'vue-router'
import { useBreadcrumb } from '../stores/Breadcrumb'
import { useMenu } from '../stores/menu'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            beforeEnter(to, from, next) {
                console.log(to);
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../auth/Login.vue'),
            meta: { title: "Login" },
            // beforeEnter(to, from, next) {
            //     if (is_user_logged()) {
            //         next({ name: 'cabinet.home' })
            //     } else {
            //         next()
            //     }
            // },
        },
        {
            path: '/cabinet',
            name: 'cabinet',
            component: () => import('../auth/Auth.vue'),
            children: [
                {
                    path: '/cabinet/home',
                    name: 'cabinet.home',
                    component: () => import('../view/Home.vue'),
                    meta: { title: 'Home page', breadcrumbClosable: false }
                },
                {
                    path: '/cabinet/users',
                    name: 'cabinet.users',
                    component: () => import('../view/User.vue'),
                    meta: { title: 'Users page' }
                }
            ],
            beforeEnter(to, from, next) {
                console.log(to);
                next({ name: 'login' })
                // if (is_user_logged()) {
                //     next()
                // } else {
                //     next({ name: 'login' })
                // }
            },
        }
    ],
})

router.beforeEach((to, from) => {
    useBreadcrumb().add(to.meta.title, to.name, to.meta.breadcrumbClosable ?? true)
    useMenu().setDefaultValue(to.name)
})

export default router