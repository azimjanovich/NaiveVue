<script setup>
import { useBreadcrumb } from '../stores/Breadcrumb'
const storeBreadcrumb = useBreadcrumb()
</script>
<template>
    <div
        class="flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-dark-gray-200 scrollbar-hover-black pb-1">
        <n-tag v-for="item in storeBreadcrumb.breadcrumbs.items" :closable="item.closable"
            :type="item.isActive ? 'primary' : ''" class="p-4 mr-2 bg-white" size="medium"
            @close="storeBreadcrumb.remove(item.routerName, item.isActive)" :bordered="false">
            <RouterLink :to="{ name: item.routerName }">{{ item.name }}</RouterLink>
        </n-tag>
    </div>
</template>