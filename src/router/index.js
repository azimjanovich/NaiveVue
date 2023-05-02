import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            beforeEnter(to, from, next) {
                next({ name: 'login' })
            },
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
        // {
        //     path: '/cabinet',
        //     name: 'cabinet',
        //     component: () => import('../auth/Auth.vue'),
        //     children: [
        //     ],
        //     beforeEnter(to, from, next) {
        //         next()
        //         // if (is_user_logged()) {
        //         //     next()
        //         // } else {
        //         //     next({ name: 'login' })
        //         // }
        //     },
        // }
    ],
})

export default router