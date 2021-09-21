'use strict'

window.onload = function () {

  new Swiper ('.swp-banner-top', {
    loop: true,
    slidesPerView: 2,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteractioni: false,
    },
    pagination: {
      el: ".swp-banner-top-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swp-button-next-top-banner',
      prevEl: '.swp-button-prev-top-banner',
    },
  });

  let lang_butt = $('.language-button');
  lang_butt.click(function () {
    $('.language').slideToggle();
  });

  $('.icon-header-banner').click(function () {
    $('.banner-top').slideToggle('500');
    $(this).toggleClass('icon-focused');
  })

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


  // notices title visual

  let notice_data_1 = [
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
  let notice_data_2 = [
    {
      title: '[학생지원팀] 코로나19 수도권(인천) 거리두기 4단계 격상에 따른 교내시설이용 지침 안내',
      date: '2021.07.09.',
      page: '#'
    },
    {
      title: '[학생지원팀] 코로나19 거리두기 개편안에 따른 실외체육시설이용 안내',
      date: '2021.06.30.',
      page: '#'
    },
    {
      title: '[국제지원팀]코로나 19 관련 외국인 유학생 개인 방역 수칙 안내',
      date: '2021.06.30.',
      page: '#'
    },
    {
      title: '2021학년도 1학기 기말고사 운영 방식 안내',
      date: '2021.05.21.',
      page: '#'
    },
    {
      title: '2021학년도 1학기 기말고사 응시 가이드라인 안내',
      date: '2021.05.21.',
      page: '#'
    },
    {
      title: '[교무처] 2021-1학기 중간고사 부정행위 관련 당부',
      date: '2021.04.14.',
      page: '#'
    }
  ];
  let notice_data_3 = [
    {
      title: '2021-2학기 재학생 최종등록 안내',
      date: '2021.09.15.',
      page: '#'
    },
    {
      title: '2021-2학기 전담 지도교수 상담 안내',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '2021학년도 2학기 미등록 및 복학불이행 제적처리 안내 ',
      date: '2021.09.15.',
      page: '#'
    },
    {
      title: '2021-2학기 수강신청과목 포기 안내 ',
      date: '2021.09.14.',
      page: '#'
    },
    {
      title: '인하대학교 휴학제도 변경 안내',
      date: '2021.08.09.',
      page: '#'
    },
    {
      title: '2021학년도 2학기 학기초 강의진단 실시 안내',
      date: '2021.08.09.',
      page: '#'
    }
  ];
  let notice_data_4 = [
    {
      title: '제7회 연수인재육성재단 장학생 선발 안내',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '2021년 고속도로 장학생 선발 안내',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '2021년도 (재)경주시장학회 장학생 선발 안내',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
      date: '2021.08.10.',
      page: '#'
    },
    {
      title: '2021-2학기 동산장학회 장학생 선발안내(이공계 새터민)',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[국제지원팀]2021-2 국제학생 토픽(TOPIK)장학금 지급 안내',
      date: '2021.09.10.',
      page: '#'
    }
  ];
  let notice_data_5 = [
    {
      title: '[BK글로컬다문화교육연구단 / 다문화융합연구소] 9-11월 초청 특강 안내',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '인하대 다문화융합연구소의  북새통, 명사와 함께하는 다문화인문학 산책   특강 안내: 줌주소 포함',
      date: '2021.09.13.',
      page: '#'
    },
    {
      title: '평생교육원 가을학기 수강생모집',
      date: '2021.09.13.',
      page: '#'
    },
    {
      title: '[교수학습개발센터] 2021학년도 2학기 학습법 워크숍 변경 안내',
      date: '2021.09.09.',
      page: '#'
    },
    {
      title: '[인하공학교육혁신센터] 2021 인하 융합 콜로키엄 개최',
      date: '2021.09.09.',
      page: '#'
    },
    {
      title: '[상담센터]  시와 노래를 활용한 독서치료 경험  온라인 심리특강 신청 안내 (9/17)',
      date: '2021.08.27.',
      page: '#'
    }
  ];
  let notice_data_6 = [
    {
      title: '[공학교육혁신센터]  2021 전국 공학페스티벌  E²VJ(홍보대사) 학생 모집 ',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '혁신공유대학사업(미래자동차 사업단) 연구원(석사) 채용 공고[~9/28(화)]',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[모집] 인하대 국제개발협력혁신센터 3기 서포터즈 모집',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '[공학교육혁신센터]  2021 전국 공학페스티벌  공대생 심사위원단 E² Pannel 학생 모집',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '인하대학교 미래융합대학 Life(대학의 평생교육체제 지원) 사업 계약직 연구원(석사) 채용 공고',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '[창업지원단] 2021-2 아랩 나도 발명왕 모집 (선착순)',
      date: '2021.09.16.',
      page: '#'
    }
  ];
  let notice_data_7 = [
    {
      title: '한글날 기념행사 ‘한글 사랑 공모전’ 안내',
      date: '2021.09.14.',
      page: '#'
    },
    {
      title: '2021 인하 발명아이디어 경진대회 결과(수상팀) 안내 ',
      date: '2021.09.10.',
      page: '#'
    },
    {
      title: '[교육효과성센터] 학부교육실태조사 참여 안내',
      date: '2021.09.08.',
      page: '#'
    },
    {
      title: '[교육효과성센터] 인하핵심역량진단 참여자 이벤트 안내',
      date: '2021.09.02.',
      page: '#'
    },
    {
      title: '2021학년도 2학기(2021.09.01~2022.02.28) 의료공제 접수 안내 ',
      date: '2021.09.01.',
      page: '#'
    },
    {
      title: '(안전방재팀) 2021-2학기 연구실 안전교육 안내',
      date: '2021.08.30.',
      page: '#'
    }
  ];
  let notice_data_all = [
    notice_data_1,
    notice_data_2,
    notice_data_3,
    notice_data_4,
    notice_data_5,
    notice_data_6,
    notice_data_7
  ];
  let bid_data = [
    {
      title: '[공사입찰] [대학혁신지원사업] 2호동관 강의, 연구동 난방용 스팀 배관 교체 공사(긴급)',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[입찰] 마이크로플레이트리더 구매',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[입찰] 워크스테이션 구매',
      date: '2021.09.17.',
      page: '#'
    },
    {
      title: '[공사입찰] 각 호관 보일러 화학세관공사(2021년)',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '[입찰] 이러닝콘텐츠(K-학술확산연구소사업 온라인 공개강좌) 개발',
      date: '2021.09.16.',
      page: '#'
    },
    {
      title: '[입찰] 반응기 구매',
      date: '2021.09.13.',
      page: '#'
    }
  ];
  let notice_tit = $('.notice_tit');
  
  let notice_cont = $('.notices-contents');
  let notice_box = notice_cont.find('>a');

  let notice_sub_nav = $('.notices-sub-nav').find('ul> li> a');

  notice_sub_nav.hover(function () {
    $(this).toggleClass('sub-button-focused');

  });

  function sort_data(_obj, _to) {
    $.each(_to, function (index, item) {
      // notice_box의 index total 6개
      let temp_data = _obj[index];

      let temp_tit = $(this).find('.notices-contents-tit');
      temp_tit.text(temp_data.title);
      let temp_date = $(this).find('.notices-contents-date');
      temp_date.text(temp_data.date);
      // $(this).find('.notices_contents_tit').text(temp_data.title);
      // $(this).find('notices_contents_date').text(temp_data.date)
      $(this).attr('href', temp_data.page);
    })
  }

  // at first
  sort_data(notice_data_1, notice_box);
  
  $.each(notice_tit, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      // tit visual
      notice_tit.removeClass('button-focused');
      $(this).addClass('button-focused');
      // contents
      if (index == 0) {
        sort_data(notice_data_1, notice_box);
      } else {
        sort_data(bid_data, notice_box);
      }
    });
  });

  let notice_subnav = $('.notices-sub-nav').find('ul > li > a');

  $.each(notice_subnav, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      notice_subnav.removeClass('sub-button-focused');
      $(this).addClass('sub-button-focused');
      sort_data(notice_data_all[index], notice_box);
    })
  })

  $('.button-site-map').click(function () {
    $(this).find('.icon-angle-down').toggleClass('button-site-map-active');
    $('.site-map').find('> .page-container').slideToggle();
  });

}