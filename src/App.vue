<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Кто я?</RouterLink>
        <RouterLink to="/work">Портфолио</RouterLink>
        <RouterLink to="/news">Новости</RouterLink>
        <RouterLink to="/contact">Контакты</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView style="height: calc(100vh - 128px);" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #212121;
}

</style>
