<script setup>
import { onMounted } from "vue";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
// 触发获取导航列表的action
import { useCategoryStore } from "@/stores/category";
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>
<template>
  <div class="">
    <LayoutFixed></LayoutFixed>
    <Nav></Nav>
    <Header></Header>
    <!-- 二级路由出口 -->
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
