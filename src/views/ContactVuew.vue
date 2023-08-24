<template>
  <section class="contact">
      <div class="contact__image">
        <h1>Контакты</h1>
      </div>
  </section>
  <main class="contact__main">
    <div class="">
      <div class="">
        <h1>Написать мне</h1>
        <p>Друг, ты можешь написать мне и я помогу тебе</p>
      </div>
      <div class="">
        <h3>Email</h3>
        <p><a href="mailto:me@slivinskiy-group.com">me@slivinskiy-group.com</a></p>
      </div>
      <div class="">
        <h3>Social</h3>
        <p><a href="">Github</a></p>
        <p><a href="">LinkedIn</a></p>
        <p><a href="">Telegram</a></p>
        <p><a href="">Данный проект на github</a></p>
      </div>
    </div>
    <form action="">
      <label for="name"><p>Имя</p></label>
      <input type="text" name="" id="">
      <label for=""><p>Почта</p></label>
      <input type="email">
      <label for=""><p>Сообщение</p></label>
      <template></template>
      <button type="submit">Отправить</button>
    </form>
  </main>
</template>

<style>
  .contact{

  }
  .contact__image{
    max-width: 1920px;
    height: 400px; 
    background: url(@/assets/img/contactPage/722a3b048a1eb8feff425b502512b7ee.jpeg), lightgray 4.256px -235.115px / 100% 204.41% no-repeat;
    background-position-y: center;
  }
  .contact__image > h1 {
    height: inherit;
    padding-left: 41.5px;
    line-height: 4em;
    background-position-y: center;
  }
  .contact__main{
    display: flex;
  }
</style>
