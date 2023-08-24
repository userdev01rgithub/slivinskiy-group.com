<template>
  <div class="news">
    <h1 class="about__title">Новости</h1>
    <div class="news__index">
      <div class="index__image">
        <img src="@/assets/img/newsPage/indexArticle.png" alt="Index page image">
      </div>
      <div class="index__content">
        <h3 class="index__definishen">Август 2023 <span class="index__date">JavaScript - Видео</span></h3>
        <h2>CSS свойства, о которых ты не знал</h2>
        <p>Мир Css не стоит на месте, и css развивается вместе с ним, сегодня поговорим о свойствах, о которых никто не знает ...</p>
      </div>
    </div>
    <div class="news__portal">
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
      <article>
        <img src="@/assets/img/newsPage/unsplash_sxNt9g77PE0.png" alt="">
        <h3>Javascript - lifestyle</h3>
        <h2>Новые свойства в ES6</h2>
        <p>Почувствуй силу javascript, я подготовил список небольших, но крутых проектов на javascript</p>
        <p><span>Август 2023</span></p>
      </article>
    </div>
    <div class="news__nb">
      <button>Дальше</button>
    </div>
  </div>
</template>

<style>
  .news{
    padding: 17px 116px 20px 120px;
  }
  .news__portal{
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  .news__index{
    display: flex;
  }
  .index__content{
    padding: 64px 40px 64px 40px;
  }
  .index__definishen{
    color: var(--neutral-500, #6B7280);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .index__date{
    color: var(--accent-base, #3B82F6); 
  }
  .index__title{ 
    color: #999;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
  }
  .index__text{
    color: var(--neutral-500, #6B7280);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .news__portal > article {
    max-height: 540px;
    max-width: 390px;
  }
  .news__portal > article > h3 {
    color: var(--accent-base, #3B82F6);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  } 
  .news__portal > article > h2 {
    color: var(--color-2, #F8F7F9);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
  }
  .news__portal > article > p {
    color: var(--neutral-500, #6B7280);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
  }
  .news__portal > article > p > span {
    font-size: 16px;
  }
  .news__nb{
    display: flex;
    justify-content: center;
  }
  .news__nb > button{
    padding: 12px 16px 12px 16px;
    color: var(--neutral-700, #374151);
    border-radius: 8px;
    border: 1px solid var(--neutral-200, #E5E7EB);
    background: var(--neutral-0, #FFF);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
  }
</style>
