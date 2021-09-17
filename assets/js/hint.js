const app = Vue.createApp({
  data() {
    return {
      /*
      *ユーザー名の定義
      */
      userName: localStorage.getItem("name")
    }
  }
});

app.mount('main');

'use strict'
/* ヒントの開閉を設定します */
{
  const cardOpen = document.querySelectorAll(".card__title");
  for (let i = 0; i < cardOpen.length; i++){
    cardOpen[i].addEventListener('click', cardToggle);
  }
  function cardToggle(event) {
    var content = event.currentTarget.parentNode;
    content.classList.toggle('is-open');
  }
}