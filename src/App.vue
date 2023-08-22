<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/">Кто я?</RouterLink>
        <RouterLink to="/">Портфолио</RouterLink>
        <RouterLink to="/">Новости</RouterLink>
        <RouterLink to="/">Контакты</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #212121;
}

</style>
