<template>
  <main class="mainPage">
    <div class="mainPage__information">
      <h3><b>Привет друг!</b></h3>
      <h1 class="mt-20">Я Коля</h1>
      <p class="mt-36">Я люблю котиков, писать код и создавать чудо. Посмотри мои проекты или нажми на кнопку ниже и узнай, что будет</p>
      <button v-if="this.stateElement===true" class="btn mt-42" @click="changeState">Сделать чудо</button>
      <button v-else class="btn mt-42" @click="changeState">Вернуть обратно</button>
    </div>
    <div class="mainPage__myImage">
      <img v-if="this.stateElement===true" alt="Nikolay Slivinskiy - image" class="logo" src="@/assets/img/mainPage/giwoTrmEPjcU2daGY1mumVOXQTAWFHAwQcJCjnllJJfTN3HeFe059ar7GMkhkWkp.png">
      <img v-else alt="Nikolay Slivinskiy - image" class="logo" src="@/assets/img/mainPage/sMCJLcg3Mf35TfiD3osRhHtKlaFNcvBNCAt88TNADxwthfPNhiDyi6S7Lsxpc47s.png">
    </div>
  </main>
  <div class="main__notifical" v-if="this.stateElement===false">
    <img src="@/assets/img/mainPage/Watch.svg" alt="">
    <p>Ты повернул время назад</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateElement: true,
    }
  },
  methods: {
    changeState() {
      this.stateElement = !this.stateElement 
    }
  }
}
</script>

<style>
.mainPage{
  height: 100%;
}
.mainPage__myImage{
  height: 100%;
  display: flex;
  max-width: 1400px;
  justify-content: end; 
  justify-self: end;
  align-content: flex-end; 
  padding-top: 141px;
}
.main__notifical{
  transform: translateX(-150%);
  animation: ani 0.2s forwards;
  margin-top: -130px;
  margin-left: 90px;
  padding: 16px 32px 16px 32px;
  color: var(--color-2, #F8F7F9);
  border: 2px solid var(--color-2, #F8F7F9);
  border-radius: 16px;
  display: flex;
  max-width: fit-content;
}
@keyframes ani{
  0% {transform: translateX(-150%);}
  100% {transform: translateY(0);}
  0% {transform: translateX(-150%);}
}
.main__notifical > p {
  margin-left: 20px;
}
</style>