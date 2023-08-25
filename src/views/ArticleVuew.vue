<template>
  <div class="article">
    <img src="@/assets/img/newsPage/dog-food.jpg" class="article__indexPage" alt="">
    <div class="article__content">
      <h4 class="article__date">Август 2023 <span class="article__tag">JavaScript - Видео</span></h4>
      <h1 class="article__title">CSS свойства, о которых ты не знал</h1>
      <p class="article__text">Мир Css не стоит на месте, и css развивается вместе с ним, сегодня поговорим о свойствах, о которых никто не или не помнит.</p>
      <iframe 
        class="article__youtube"
        src="//www.youtube.com/embed/Y8Wp3dafaMQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <div class="article__ab">
        <img src="@/assets/img/newsPage/Icon.svg" alt="Icons download">
        <p><a href="https://github.com/userdev01rgithub">Исходники тут</a></p>
      </div>
    </div>
  </div>
</template>

<style>
  .article{
    padding: 51px 34px 20px 34px;
  }
  .article__content{
    padding: 40px 96px 40px 96px;
  }
  .article__youtube{
    width: 1174px; 
    height: 667px; 
  }
  .article__ab{
    display: flex;
  }
  .article__indexPage{
    width: 100%;
    max-height: 266px;
    object-fit: cover;
    object-position: 0 0;
  }
  .article__date{
    color: var(--neutral-500, #6B7280);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .article__tag{
    color: var(--accent-base, #3B82F6); 
  }
  .article__title{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #999;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .article__text{
    color: var(--neutral-500, #6B7280);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .article__youtube{
    margin-top: 20px;
    width: 100%;
    max-height: 30%;
  }
  .article__ab{
    margin-top: 10px;
  }
  .article__ab > p {
    margin-left: 5px;
  }
  .article__ab > p > a:hover{
    color: #6B7280;
  }
</style>
