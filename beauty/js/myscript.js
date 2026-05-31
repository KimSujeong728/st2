(function() {
  // DOM이 준비된 후 Swiper를 초기화하고 재생/정지 토글 버튼을 연결합니다.
  function initSwiper() {
    const swiper = new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
    });

    // 재생/정지 토글 버튼 상태를 관리합니다.
    const playToggleButton = document.querySelector('.swiper-button-play-toggle');
    if (!playToggleButton) {
      return;
    }

    playToggleButton.addEventListener('click', function() {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        playToggleButton.classList.remove('is-play');
        playToggleButton.classList.add('is-pause');
      } else {
        swiper.autoplay.start();
        playToggleButton.classList.remove('is-pause');
        playToggleButton.classList.add('is-play');
      }
    });
  }

  // Cafe24 환경에서도 DOM 준비 시점에 안전하게 실행되도록 합니다.
  function onDocumentReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  onDocumentReady(initSwiper);
})();
