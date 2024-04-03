$(function () {
    // 링크 방지
    $('a').click(function (e) {
        e.preventDefault();
    });

    //new 더보기 버튼 클릭 시, 버튼 생성
    let newBtn = $('.new .normal');
    newBtn.click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('on');
        //siblings() : 나를 제외한 모든 형제 선택자
        //next() : 바로 뒤에 있는 형제 선택자
        //nextAll() : 뒤에 있는 모든 형제 선택자
    });

    //produt jquery 탭메뉴 구현
    let productMenu = $('.product .product__menu li');
    let productList = $('.product .product__list');

    productMenu.click(function () {

        // $(this).index() => 클릭한 index값 찾기
        //eq() => index값 설정
        //eq(&(this).index()) => 클릭한 index값을 다른 요소의 index값으로 설정
        productMenu.removeClass('on');
        $(this).addClass('on');
        productList.removeClass('on');
        productList.eq($(this).index()).addClass('on');
    });

    //best 마우스 호버 시, 이미지 변경
    let bestLink = $('.best .item-big a');
    let bestImage = $('.best .item-big img');
    let bestTitle = $('.best .item-big h4');
    let bestText = $('.best .item-big strong');
    let bestSmallItem = $('.best .item-small .item');

    bestSmallItem.mouseenter(function () {
        bestSmallItem.find('img').css({
            'opacity': '0.3'
        });
        $(this).find('img').css({
            'opacity': 1
        });

        let thisLink = $(this).find('a').attr('href');
        let thisImage = $(this).find('img').attr('src');
        let thisTitle = $(this).find('h4').text();
        let thisText = $(this).find('strong').text();

        bestLink.attr('href', thisLink);
        bestImage.attr('src', thisImage);
        bestTitle.text(thisTitle);
        bestText.text(thisText);
    });

        if ($(window).width() < 480) {
            $('.md .swiper').removeClass('md_pick_slides');
        } else {
            var swiper = new Swiper(".md_pick_slides", {
                slidesPerView: 2.5,
                spaceBetween: 25,
                breakpoints: {
                    // 화면의 넓이가 767px 이상일 때
                    767: {
                        slidesPerView: 3.5,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 35
                    },
                    1280: {
                        slidesPerView: 5.5,
                        spaceBetween: 35
                    }
                }
            });
        };



    let imageBoxImage = document.querySelectorAll('.image_box figure');
    let imageBoxNextBtn = document.querySelector('.image_box .slide_btn');
    let imageBoxPage = document.querySelector('.image_box .slide_pagination');

    for (let i = 0; i < imageBoxImage.length; i++) {
        imageBoxPage.innerHTML += '<li></li>'
    }

    let pageBtn = document.querySelectorAll('.slide_pagination li');
    pageBtn[0].classList.add('on');

    //페이징 버튼 클릭 시, 이미지 변경
    for (let i = 0; i < pageBtn.length; i++) {
        pageBtn[i].addEventListener('click', () => {
            imageBoxImage.forEach((item) => {
                item.classList.remove('on');
            });
            imageBoxImage[i].classList.add('on');
            pageBtn.forEach((item) => {
                item.classList.remove('on');
            });
            pageBtn[i].classList.add('on');
        });
    };

    //다음 버튼 클릭 시, 이미지 변경
    let index = 0;
    imageBoxNextBtn.addEventListener('click', () => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        };

        imageBoxImage.forEach((item) => {
            item.classList.remove('on');
        });
        imageBoxImage[index].classList.add('on');

        pageBtn.forEach((item) => {
            item.classList.remove('on');
        });
        pageBtn[index].classList.add('on');

    });

    //자동슬라이드
    setInterval(() => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        };

        imageBoxImage.forEach((item) => {
            item.classList.remove('on');
        });
        imageBoxImage[index].classList.add('on');

        pageBtn.forEach((item) => {
            item.classList.remove('on');
        });
        pageBtn[index].classList.add('on');
    }, 2000);

    $('.company_info-mobile').click(function(){
        $(this).next().toggle(); /* toggle() : dispaly가 none/block 됨. */
        $(this).toggleClass('on');

    });


});