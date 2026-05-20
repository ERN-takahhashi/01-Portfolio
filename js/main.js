'use strict';
feather.replace();

//mv部分
const swiper = new Swiper('.p-hero', {
  slidesPerView: 'auto',
  spaceBetween: 25,          // 画像間（矢印用）
  centeredSlides: true,
  loop: true,               // ← 無限ループ
  speed: 800,               // スライド速度（ms）

  autoplay: {
    delay: 3000,            // 3秒ごとに自動再生
    disableOnInteraction: false, // 操作後も止まらない
    pauseOnMouseEnter: true,     // ホバーで一時停止（任意）
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const categories = document.querySelectorAll(".p-shopNews__category");
categories.forEach(function (category) {
  category.addEventListener("click", function () {

    categories.forEach(function (item) {
      item.classList.remove("is-active");
    });

    category.classList.add("is-active");
  });
});


const swiper2 = new Swiper('.p-trend__swiper', {
  loop: true,
  spaceBetween: 40,
  speed: 10000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
});


document.querySelectorAll('.c-tab__area').forEach(tabArea => {

  const buttons = tabArea.querySelectorAll('.c-tab__button');
  const contents = tabArea.querySelectorAll('.c-tab__content');

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.classList.remove('is-active'));
      contents.forEach(content => {
        content.classList.remove('is-active');
      });

      button.classList.add('is-active');

      const target = button.dataset.tab;
      tabArea.querySelector('#' + target)
        .classList.add('is-active');
    });
  });
});