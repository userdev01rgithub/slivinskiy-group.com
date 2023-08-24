<template>
  <div class="work">
    <h1 class="about__title">Портфолио</h1>
    <div class="work__list">
      <div class="work__title">
        <h3>Личный веб сайт</h3>
        <p>Август • 2023</p>
      </div>
      <div class="work__definishen">
        <h3>Небольшой проект на vue</h3>
        <ul class="work__profession">
          <li>HTML</li>
          <li>CSS</li>
          <li>Vue</li>
        </ul>
      </div>
      <div class="work__title">
        <h3>FiSQL Привет!</h3>
        <p>Июнь • 2023 - 2023</p>
      </div>
      <div class="work__definishen">
        <h3>Образовательный онайн тренажер, языка SQL.</h3>
        <ul class="work__profession">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Nodejs</li>
        </ul>
      </div>
      <div class="work__title">
        <h3>Marlo</h3>
        <p>Сентябрь • 2021 - н.в</p>
      </div>
      <div class="work__definishen">
        <h3>Мультиапп платформа, с функциями социальной сети.</h3>
        <ul class="work__profession">
          <li>СТО</li>
          <li>Frontend</li>
          <li>Frontend</li>
          <li>CRE</li>
        </ul>
      </div>
      <div class="work__title">
        <h3>Slivinskiy group </h3>
        <p>Январь • 2019 - 2022</p>
      </div>
      <div class="work__definishen">
        <h3>Группа проектов, под моим крылом</h3>
        <ul class="work__profession">
          <li>Design Thinking</li>
          <li>User research</li>
        </ul>
      </div>
      <div class="work__title">
        <h3>Cube group </h3>
        <p>Январь • 2017 - 2019</p>
      </div>
      <div class="work__definishen">
        <h3>Платформа для публикации статей</h3>
        <ul class="work__profession">
          <li>HTML</li>
          <li>WordPress</li>
          <li>DevOps</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  .work{
    padding: 17px 116px 20px 120px;
  }
  .work__list {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .work__profession{
    display: flex;
    list-style-type: none;
    margin-left: 0; 
    padding-left: 0;
  }
  .work__profession >  li {
    margin-right: 16px;
    padding: 5px 14px 5px 14px;
    border-radius: 16px;
    background: #EDEDED; 
    color: #666;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0.257px; 
  }
</style>
