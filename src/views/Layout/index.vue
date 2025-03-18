<script setup>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
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
