<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
</script>
<template>
    <n-space vertical>
        <n-layout>
            <n-layout has-sider>
                <!-- begin::sidebar -->
                <Sidebar />
                <!-- end::sidebar -->

                <!-- begin::content -->
                <n-layout-content class="h-screen">
                    <!-- begin::header -->
                    <Navbar class="fixed z-50 h-14 w-full bg-white shadow-md" />
                    <!-- end::header -->

                    <!-- begin::breadcrumb -->
                    <Breadcrumb class="fixed z-40 bg-slate-100 top-14 pt-3 w-full p-2 pb-2" />
                    <!-- end::breadcrumb -->

                    <!-- begin::content -->
                    <main class="h-screen w-full px-2 bg-slate-100 relative mt-24 pt-3">
                        <router-view v-slot="{ Component }">
                            <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
                                <component :is="Component" />
                            </Transition>
                        </router-view>
                    </main>
                    <!-- end:content -->

                    <!-- begin::footer -->
                    <Footer />
                    <!-- end::footer -->
                </n-layout-content>
                <!-- end::content -->
            </n-layout>
        </n-layout>
    </n-space>
</template>