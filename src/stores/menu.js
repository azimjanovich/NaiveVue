import { RouterLink } from 'vue-router'
import { BookOutline as BookIcon } from '@vicons/ionicons5'

export const useMenu = defineStore('menu', () => {
    const details = reactive({
        defaultValue: null,
        options: [
            {
                label: () => h(RouterLink, { to: { name: 'cabinet.home' } }, { default: () => 'Home' }),
                key: 'cabinet.home',
                icon: renderIcon(BookIcon)
            },
            {
                label: () => h(RouterLink, { to: { name: 'cabinet.users' } }, { default: () => 'Users' }),
                key: 'cabinet.users',
                icon: renderIcon(BookIcon)
            }
        ]
    })

    const setDefaultValue = (defaultValue) => {
        details.defaultValue = defaultValue
    }

    return { setDefaultValue, details }
})