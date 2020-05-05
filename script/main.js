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

//var headerElem = $('#header');
var headerElem = $('.header-light');

function myFunc() {
    var logoElem = $('.navbar__pesto-logo');
    var btnBackElem = $('#back');
    var navElem = $('.navbar-nav');
    var elemBtnRight = $('.right');
    var empBackgElem = $('.employee__background');
    var empBoxElem = $('.employee__about-box');
    var foodsFeatElem = $('.foods__featured');
    var foodsBoxElem = $('.foods__box');
    var widthMax = headerElem.attr('width');
    console.log('width ' + widthMax);
    var sizeWidth = document.documentElement.clientWidth;
    //if (document.documentElement.clientWidth > 1200) {
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        if (scrolled > 100) {
            headerElem.css({
                'background': 'rgb(50, 50, 50)',
                'height': '100px',
                'transition': ' 0.5s'
            });
            navElem.css({
                'line-height': '100px',
                'transition': ' 0.5s'
            });
            elemBtnRight.css({
                'top': '30px',
                'transition': ' 0.5s'
            });
            logoElem.css({
                'top': '10px',
                'transition': ' 0.5s'
            });
        }
        if (scrolled < 100) {
            headerElem.css({
                'background': 'rgba(120, 125, 131, 0.3)',
                'height': '120px',
                'transition': 'all 0.5s'
            });
            navElem.css({
                'line-height': '115px',
            });
            elemBtnRight.css({
                'top': '40px',
            });
            logoElem.css({
                'top': '20px',
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
    });
    //} else {
    //  headerElem.css('background', 'none');
    // }
}
//myFunc();
$(document).ready(function() {
    myFunc();
    togglerChange();
    inputFocus();
    $('.datepicker').datepicker({ dateFormat: 'dd/mm/y' });
    $('.datepicker').datepicker('setDate', new Date());
    $(window).resize(function() {
        myFunc();
    });
    slider();
});

//nav-bar toogler
function togglerChange() {
    var flag = true;
    var navbarBtn = $('.navbar__toggler');
    var navbar = $('.navbar');
    navbarBtn.click(function() {
        if (flag) {
            $('.navbar__items').addClass('show');
            navbarBtn.css('background-image', 'url(../img/png/previous.png)');
            navbar.css('position', 'fixed');
            flag = false;
        } else {
            $('.navbar__items').removeClass('show');
            navbarBtn.css('background-image', 'url(../img/png/menu.png)');
            navbar.css('position', 'absolute');
            flag = true;
        }
    });
}

/**
function checkFormDataValid(data) {
    const taskState = [
        TASK_ST_NEW,
        TASK_ST_INPROGRESS,
        TASK_ST_DONE
    ];
    const errors = {};
    STATE.errState = false;
    STATE.errors = errors;

    if (data.taskName.length < 3) {
        errors.taskName = 'Это поле обязательно для ввода';
    }
    if (data.taskDate.length < 8) {
        errors.taskDate = 'Это поле обязательно для ввода';
    }
    if (STATE.formState === FORM_EDIT && !taskState.includes(data.taskState)) {
        errors.taskState = 'Укажите актуальный статус задачи';
    }

    if (Object.keys(errors).length) {
        STATE.errState = true;
        return false;
    }
    // STATE.errors = errors;

    return true;
}
     */

function inputFocus() {
    $('input').focusin(function() {
        if ($(this).val() == 'Your name' || 'Your phone number') {
            $(this).val('');
        }
    })

    $('input').focusout(function() {
        if ($('#taskName').val() == '') {
            $(this).val('Your name');
            $(this).css({
                'border-bottom': '1px solid #f5543f',
            });
            $('#errName').css('display', 'block');
            $('.datepicker').css({
                'border-bottom': 'none',
            });
        } else if ($('#taskPhone').val() == '') {
            $(this).val('Your phone number');
            $(this).css({
                'border-bottom': '1px solid #f5543f',
            });
            $('#errPhone').css('display', 'block');
            $('.datepicker').css({
                'border-bottom': 'none',
            });
        } else if ($('input[type=text]').val() != '') {
            $(this).css({
                'border-bottom': 'none',
            });
            $('.datepicker').css({
                'border-bottom': 'block',
            });
            $('#errName').css('display', 'none');
            $('#errPhone').css('display', 'none');

        }
    })

    $('#list').keypress(function() {
        $(this).css({
            'background': 'url(../img/svg/up-arrow.svg)',
        });
    })
}

//slider
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