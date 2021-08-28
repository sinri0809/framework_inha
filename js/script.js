'use strict'

window.onload = function () {
  new Swiper ('.swp-banner-top', {
    loop: true,
    slidesPerView: 2,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteractioni: false,
    // },
    pagination: {
      el: ".swp-banner-top-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swp-button-next-top-banner',
      prevEl: '.swp-button-prev-top-banner',
    },
  });
  var swp_banner_main = new Swiper('.swp-banner-main', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteractioni: false,
    },
    speed: 1000,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swp-banner-main-pagination",
      clickable: true,
    },
  });
  new Swiper('.swp-banner-middle', {
    loop: true,
    effect: 'fade',
    delay: 1000,
    // spaceBetween: 50,
    navigation: {
      nextEl: '.swp-button-next-middle-banner',
      prevEl: '.swp-button-prev-middle-banner',
    },
  });
  
  new Swiper('.swp-sch-event', {
    loop: true,
    effect: 'fade',
    slidesPerView: 1,
    navigation: {
      nextEl: '.swp-button-schedule-next',
      prevEl: '.swp-button-schedule-prev',
    },
  });
  new Swiper('.swp-inhanews-coop', {
    loop: true,
    delay: 1500,
    navigation: {
      nextEl: '.swp-inhanews-coop-next',
      prevEl: '.swp-inhanews-coop-prev',
    },
  });
  
  $('.icon-pause').click(function () {
    $(this).toggleClass('icon-play');
    var temp = $(this).hasClass('icon-play');

    if (temp == true) {
      swp_banner_main.autoplay.stop();
    } else {
      swp_banner_main.autoplay.start();
    }
  });



  var notice_data_1 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_2 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_3 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_4 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_5 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_6 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var notice_data_7 = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  var noice_data_all = [
    notice_data_1,
    notice_data_2,
    notice_data_3,
    notice_data_4,
    notice_data_5,
    notice_data_6,
    notice_data_7
  ];
  var bid_data = [
    {
      title: '2021년 8월 온라인 학위수여식 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
      date: '2021.07.30.',
      page: '#'
    },
    {
      title: '조교/사무보조원 채용 공고',
      date: '2020.11.11.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '상담센터 학생상담실 시간제 상담원 모집 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  
}