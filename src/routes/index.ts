import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/characters',
        name: 'characters',
        component: ()=> import('@/components/CharacterList.vue')
    },
    {
        path: '/character/:id/comment',
        name: 'character-comment',
        component: ()=> import('@/components/CommentForm.vue')

    },
    {
        path: '/character/:id/comments',
        name: 'character-comment-detail',
        component: ()=> import('@/components/CommentDetail.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;