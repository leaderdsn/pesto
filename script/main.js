//МАССИВ КАРТИНОК ДЛЯ ГАЛЕРЕИ
var imageData = [{
        id: 1,
        alt: 'image #1',
        url: '../img/jpg/gallery-masonry-1-640x429.jpg'
    },
    {
        id: 2,
        alt: 'image #2',
        url: '../img/jpg/gallery-masonry-2-640x429.jpg'
    },
    {
        id: 3,
        alt: 'image #3',
        url: '../img/jpg/gallery-masonry-3-640x429.jpg'
    },
    {
        id: 4,
        alt: 'image #4',
        url: '../img/jpg/gallery-masonry-4-960x429.jpg'
    },
    {
        id: 5,
        alt: 'image #5',
        url: '../img/jpg/gallery-masonry-5-960x429.jpg'
    }
]

var headerElem = $('#header');
var navbarElemCustom = $('.navbar-custom');
var navbarElemBig = $('.navbar-big');

function myFunc() {
    var logoElem = $('.navbar__pesto-logo');
    var btnBackElem = $('#back');
    var navElem = $('.navbar-nav');
    var elemBtnRight = $('.right');
    var empBackgElem = $('.employee__background');
    var empBoxElem = $('.employee__about-box');
    var foodsFeatElem = $('.foods__featured');
    var sliderHeader = $('.slider__header');
    var sliderWrapper = $('.slider__wrapper');
    var footerContainer = $('.footer__container');
    var foodsBoxElem = $('.foods__box');
    var widthMax = headerElem.attr('width');
    console.log('width ' + widthMax);
    logoElem.css({
        'transition': ' 0s'
    })
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        if (scrolled > 100) {
            navbarElemBig.css({
                'background': 'rgb(50, 50, 50)',
                'height': '100px',
                'transition': '0.5s'
            });
            navElem.css({
                'line-height': '100px',
                'transition': '0.5s'
            });
            elemBtnRight.css({
                'top': '30px',
                'transition': '0.5s'
            });
            logoElem.css({
                'top': '10px',
                'transition': '0.5s'
            });
        }
        if (scrolled < 100) {
            navbarElemBig.css({
                'background': 'rgba(120, 125, 131, 0.3)',
                'height': '120px',
            });
            navElem.css({
                'line-height': '115px',
            });
            elemBtnRight.css({
                'top': '40px',
            });
            logoElem.css({
                'top': '20px',
                'transition': '0.5s'
            });
        }
        if (scrolled >= 380) {
            btnBackElem.css({
                'transition': '0.5s',
                'bottom': '50px'

            })
        }
        if (scrolled <= 380) {
            btnBackElem.css({
                'transition': '0.5s',
                'bottom': '-70px'

            })
        }
        if (scrolled >= 260) {
            empBackgElem.css({
                'opacity': '1',
                'left': '0px',
                'transition': 'all 0.5s'
            });
            empBoxElem.css({
                'opacity': '1',
                'right': '0px',
                'transition': 'all 0.5s'
            });
        }
        if (scrolled >= 780) {
            foodsFeatElem.css({
                'transition': '0.5s',
                'top': '100px'

            });
        }
        if (scrolled >= 1200) {
            foodsBoxElem.css({
                'transition': '0.5s',
                'bottom': '0px',
                'top': '150px'

            });
        }
        if (scrolled > 3900) {
            sliderHeader.css({
                'opacity': '1',
                'top': '100px',
                'transition': 'all 0.5s'

            });
            sliderWrapper.css({
                'opacity': '1',
                'top': '0px',
                'transition': 'all 0.5s'
            });
        }
        if (scrolled > 4200) {
            footerContainer.css({
                'opacity': '1',
                'transition': 'all 1s'
            });
        }
    })
}

//READY
$(document).ready(function() {
    myFunc();
    togglerChange();
    inputFocus();
    inDateHandler();
    $('#taskDate').datepicker({ dateFormat: 'dd/mm/y' });
    $('#taskDate').datepicker('setDate', new Date());
    $(window).resize(function() {
        myFunc();
    });
    slider();
});

//NAVBAR TOGGLE
function togglerChange() {
    var flag = true;
    var navbarBtn = $('.navbar__toggler');
    var navbar = $('.navbar');
    var navbarItems = $('.navbar__items');
    navbarBtn.click(function() {
        if (flag) {
            navbarItems.addClass('show');
            navbarBtn.css('background-image', 'url(../img/png/previous.png)');
            navbar.css('position', 'fixed');
            flag = false;
        } else {
            navbarItems.removeClass('show');
            navbarBtn.css('background-image', 'url(../img/png/menu.png)');
            navbar.css('position', 'relative');
            flag = true;
        }
    });
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(navbarItems).length == 0 && $target.closest(navbarBtn).length == 0) {
            navbarItems.removeClass("show");
            navbarBtn.css('background-image', 'url(../img/png/menu.png)');
            navbar.css('position', 'relative');
        }
    });
}

//AVAILABILITY
let initElem, node;
const MSG_NAME = 'Your name',
    MSG_PHONE = 'Your phone number',
    DATE_FORMAT = 'DD/MM/YY';
document.oninput = inPhoneHandler
let flag = true;


function inDateHandler() {
    let currentDate = new Date(DATE_FORMAT);
    let inDateElem = document.querySelector('#taskDate');
    inDateElem.value = currentDate;
}

//Обработка данных введённых в форму секции "availability"
function inputFocus() {
    const inElems = document.querySelectorAll("input");
    let index, input;
    for (index = 0; index < inElems.length; index++) {
        input = inElems[index];
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }
    let selectElem = document.getElementById('list');
    selectElem.addEventListener('click', selectHandler);
}

//анимация select'а
function selectHandler() {

    let arrowElem = document.querySelector('#arrow');
    if (flag) {
        arrowElem.style.backgroundImage = 'url(../img/svg/arrow-down.svg)';
        flag = false;
        console.log('1', flag)
    } else {
        arrowElem.style.backgroundImage = 'url(../img/svg/up-arrow.svg)';
        flag = true;
        console.log('2', flag)
    }
}
//Убирает ввозможность ввода букв
function inPhoneHandler() {
    let input = document.querySelector('input.inPhone');
    input.value = input.value.replace(/[^\+\d]/g, '');
}
//Обработчик ввода данных
function focusHandler(event) {
    initElem = event.target.value;
    node = event.target.nextElementSibling;
    console.log(node.nodeName)
    console.log('EVENT', event.target.value)
    if (event.target.value == MSG_NAME || event.target.value == MSG_PHONE) {
        event.target.value = '';
        node.style.display = 'block';
        event.target.style.borderBottom = '1px solid #f5543f';
    }

}
//Обработчик после ввода данных
function blurHandler(event) {
    node = event.target.nextElementSibling;
    if (event.target.value == '') {
        event.target.value = initElem
    }
    if (event.target.value != MSG_NAME && event.target.value != MSG_PHONE) {
        node.style.display = 'none';
        event.target.style.borderBottom = 'none';
        document.querySelector('.icon-date').style.display = "block"; //чтобы не исчезал "<span class="icon-date"></span>"
    }
}

//Слайдер
var slideNow = 1;
var slideCount = $('.slider__wrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var switchInterval = setInterval(nextSlide, slideInterval);

function slider() {
    $('.slider__viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.nav__btn_slide').click(function() {
        $('.nav__btn_slide').css({
            'background-color': '#c4c4c4',
            'transition': '0.5s'
        });

        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.slider__viewport').width() * (navBtnId);
            $('.slider__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $(this).css({
                'background-color': '#409c4f',
                'transition': '0.5s'
            });
            slideNow = navBtnId + 1;
        }
    });
}

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider__wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.slider__viewport').width() * (slideNow);
        $('.slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
/*
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.slider__viewport').width() * (slideCount - 1);
        $('.slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.slider__viewport').width() * (slideNow - 2);
        $('.slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
*/

//$("#dog").hide().parent().children().show()

//#menu
//Функция переключения tabs в #menu
$(function() {
    $(".menu__container").tabs();
});

//Загрузка изображений в слайдер
var itemZoom = $('.item__zoom_in');
var btnExit = $('.btn__exit');
var gallerySlider = $('#gallery__slider');
var imgPreview = $('.image__preview');
var count;
var item;
itemZoom.click(function() {
        var imgId = $(this).attr("id");
        item = imageData.find(item => item.id === +imgId);
        count = imgId;
        imgPreview.css({
            'background-image': `url(${item.url})`,
        })
        console.log("tmp = " + imgId);
        gallerySlider.css({
            'visibility': 'visible'
        })
        headerElem.css({
            'visibility': 'hidden'
        })
        $('body').css({
            'overflow': 'hidden'
        })
        $('.label__count').text(`${count} / 5`);

    })
    //переключение на предыдущее изображение
var btnPrev = $('.btn__prev');
btnPrev.click(function() {
        imgPreview.css({
            'width': '100%',
            'height': '100%',
            'top': '0',
            'left': '0',
            'transition': '0.5s',
        })
        if (count <= 5) {
            count--;
            $('.label__count').text(`${count} / 5`);
            if (count == 1) {
                btnPrev.css({
                    'display': 'none',
                })
            }
            item = imageData.find(item => item.id === count);
            imgPreview.css({
                'background-image': `url(${item.url})`,
            })
            btnNext.css({
                'display': 'block',
            })
        }
    })
    //переключение на следующие изображение
var btnNext = $('.btn__next');
btnNext.click(function() {
        imgPreview.css({
            'width': '100%',
            'height': '100%',
            'top': '0',
            'left': '0',
            'transition': '0.5s',
        })
        if (count >= 1) {
            count++;
            $('.label__count').text(`${count} / 5`);
            if (count == 5) {
                btnNext.css({
                    'display': 'none',
                })
            }
            item = imageData.find(item => item.id === count);
            imgPreview.css({
                'background-image': `url(${item.url})`,
            })
            btnPrev.css({
                'display': 'block',
            })

        }
    })
    //выход из галереи
btnExit.click(function() {
    gallerySlider.css({
        'visibility': 'hidden'
    })
    headerElem.css({
        'visibility': 'visible'
    })
    $('body').css({
        'overflow': 'auto'
    })
})

var btnZoomIn = $('.btn__zoom-in');
var btnZoomOut = $('.btn__zoom-out');
const upValue = 300;
const upVal = 150;
var num = 0;
var tmpImgWidth;
var tmpImgHeight;
var tmpTopPos;
var tmpLeftPos;
btnZoomIn.click(function() {
    btnZoomOut.attr('disabled', false);
    $('.btn__zoom-out:hover').css({
        opacity: 1
    })
    tmpImgWidth = (imgPreview.css('width')).replace('px', '');
    tmpImgHeight = (imgPreview.css('height')).replace('px', '');
    tmpTopPos = (imgPreview.css('top')).replace('px', '');
    tmpLeftPos = (imgPreview.css('left')).replace('px', '');
    if (num <= 5) {
        imgPreview.css({
            'width': +tmpImgWidth + upValue,
            'height': +tmpImgHeight + upValue,
            'top': +tmpTopPos - upVal,
            'left': +tmpLeftPos - upVal,
            'transition': '0.5s',
            'position': 'relative',
        })
        num++;
    }
    if (num == 5) {
        btnZoomIn.attr('disabled', true);
        $('.btn__zoom-in:hover').css({
            opacity: 0.5
        })

    }
    console.log("num " + num);
})
btnZoomOut.click(function() {
    btnZoomIn.attr('disabled', false);
    $('.btn__zoom-in:hover').css({
        opacity: 1
    })
    tmpImgWidth = (imgPreview.css('width')).replace('px', '');
    tmpImgHeight = (imgPreview.css('height')).replace('px', '');
    tmpTopPos = (imgPreview.css('top')).replace('px', '');
    tmpLeftPos = (imgPreview.css('left')).replace('px', '');
    if (num >= 0) {
        imgPreview.css({
            'width': +tmpImgWidth - upValue,
            'height': +tmpImgHeight - upValue,
            'top': +tmpTopPos + upVal,
            'left': +tmpLeftPos + upVal,
            'transition': '0.5s',
            'position': 'relative',
        })
        num--;
    }
    if (num == 0) {
        btnZoomOut.attr('disabled', true);
        $('.btn__zoom-out:hover').css({
            opacity: 0.5
        })

    }
    console.log("num " + num);
})