import router from "../router"

export const useBreadcrumb = defineStore('breadcrumb', () => {
    const breadcrumbs = reactive({
        items: JSON.parse(localStorage.getItem('breadcrumbs'))
    })

    const add = (name, routerName, closable = true) => {
        let check = false
        breadcrumbs.items.map((item) => {
            item.isActive = false
            if (item.routerName == routerName) {
                check = true
                item.isActive = true
            }
        })
        if (!check) {
            breadcrumbs.items.push({
                name: name,
                routerName: routerName,
                isActive: true,
                closable: closable
            })
        }

        localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs.items))
    }

    const remove = (routerName, isActive) => {
        breadcrumbs.items = breadcrumbs.items.filter(item => item.routerName != routerName)
        isActive ? router.push({ name: breadcrumbs.items.pop().routerName }) : false
        localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs.items))
    }

    return { add, remove, breadcrumbs }
})