<script setup>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="">
    <Nav></Nav>
    <Header></Header>
    <!-- 二级路由出口 -->
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
