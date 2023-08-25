<template>
  <section class="contact">
      <div class="contact__image">
        <h1>Контакты</h1>
      </div>
  </section>
  <main class="contact__main">
    <div class="contact__element">
      <div class="contact__text">
        <h1 class="contact__title">Написать мне</h1>
        <p class="contact__defenishen">Друг, ты можешь написать мне и я помогу тебе</p>
      </div>
      <div class="contact__email">
        <h3 class="contact__links-title">Email</h3>
        <p class="contact__email-link"><a href="mailto:me@slivinskiy-group.com">me@slivinskiy-group.com</a></p>
      </div>
      <div class="contact__links">
        <h3 class="contact__links-title">Social</h3>
        <p class="contact__email-link"><a href="https://github.com/userdev01rgithub">Github</a></p>
        <p class="contact__email-link"><a href="https://www.linkedin.com/in/nikolay-s-b819621b3/">LinkedIn</a></p>
        <p class="contact__email-link"><a href="https://github.com/userdev01rgithub/slivinskiy-group.com">Данный проект на github</a></p>
      </div>
    </div>
  </main>
</template>

<style>
  .contact{
    padding: 17px 116px 20px 120px;
  }
  .contact__image{
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
    padding: 17px 116px 20px 120px;
  }
  .contact__title{
    color: #999;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
  }
  .contact__defenishen{
    color: #6B7280;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    margin-top: 10px;
  }
  .contact__email{
    margin-top: 15px;
  }
  .contact__email-title{
    color: #999;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
  .contact__email-link{
    color: #999;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
  .contact__links{
    margin-top: 20px;
    color: #999;
    font-family: Inter;
  }
  .contact__links-title{
    color: #999;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
</style>
