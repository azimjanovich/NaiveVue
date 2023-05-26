<script setup>
import { useMenu } from '../stores/menu'
const storeMenu = useMenu()

</script>
<template>
    <n-layout-sider bordered show-trigger="bar" collapse-mode="width" :collapsed-width="64" :width="230"
        :native-scrollbar="false" class="h-screen">
        <n-menu :default-value="storeMenu.details.defaultValue" :collapsed-width="64" :collapsed-icon-size="22"
            :options="storeMenu.details.options" />
    </n-layout-sider>
</template>
