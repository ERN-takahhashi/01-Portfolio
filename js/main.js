'use strict';
feather.replace();

//mv部分
const swiper = new Swiper('.p-hero', {
  slidesPerView: 'auto',
  spaceBetween: 80,          // 画像間（矢印用）
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