<template>
  <div class="article">
    <img src="@/assets/img/newsPage/article_title.png" alt="">
    <div class="article__content">
      <h4>Август 2023 <span>JavaScript - Видео</span></h4>
      <h1>CSS свойства, о которых ты не знал</h1>
      <p>Мир Css не стоит на месте, и css развивается вместе с ним, сегодня поговорим о свойствах, о которых никто не или не помнит.</p>
      <iframe 
        class="article__youtube"
        src="//www.youtube.com/embed/Y8Wp3dafaMQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <div class="article__ab">
        <p><a>Исходники тут</a></p>
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
</style>
