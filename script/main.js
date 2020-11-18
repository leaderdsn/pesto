//* -- ЗАГРУЗКА СТРАНИЦЫ -- *//
document.addEventListener('DOMContentLoaded', readyFunctions);

/* Запускает выполнение функций при изменении окна */
$(window).resize(function(e) {
    readyFunctions();
    clearInterval(switchInterval);
    switchInterval = setInterval(showSlides, slideInterval);
});

/* Запускает функций при загрузке страницы */
function readyFunctions() {
    setFooterDate() //Устанавливает текущий год в конце страницы
    inputFocus(); //Обрабатывает данные в input
    inDateHandler(); //Устанавливает текущую дату и её формат
    createSlides(); //Создаёт слайдер
    moveTheSlide(); //Анимация слайдера
    itemZoomClick(); //Открывает просмоторщик изображений

    $('#taskDate').datepicker({ dateFormat: 'dd/mm/y' });
    $('#taskDate').datepicker('setDate', new Date());
};
window.addEventListener('scroll', animatedAppearance)

/* Анимация содержимого странице при scroll'e */
function animatedAppearance() {
    const clientHeightForNavbar = 100;
    const clientHeightForButton = 380;
    const clientHeightForEmployee = 260;
    const clientHeightForFoodHeader = 780;
    const clientHeightForFoodBox = 1200;
    const clientHeightForGallaryTop = 3100;
    const clientHeightForGallaryBottom = 3400;
    const clientHeightForSliderHeader = 3900;
    const clientHeightForSliderWrapper = 4100;
    let scrolled = $(this).scrollTop();

    //Изменение параметров элементов страницы при scrolle
    if (scrolled > clientHeightForNavbar) {
        navbarBigElem.css({
            'background': 'rgb(50, 50, 50)',
            'height': '100px',
            'transition': '0.5s'
        });
        navbarNavElem.css({
            'line-height': '100px',
            'transition': '0.5s'
        });
        btnBookNow.css({
            'top': '30px',
            'transition': '0.5s'
        });
        logoElem.css({
            'top': '10px',
            'transition': '0.5s'
        });
    }
    if (scrolled < clientHeightForNavbar) {
        navbarBigElem.css({
            'background': 'rgba(120, 125, 131, 0.3)',
            'height': '120px',
        });
        navbarNavElem.css({
            'line-height': '115px',
        });
        btnBookNow.css({
            'top': '40px',
        });
        logoElem.css({
            'top': '20px',
            'transition': '0.5s'
        });
    }
    if (scrolled >= clientHeightForButton) {
        btnBackElem.css({
            'transition': '0.5s',
            'bottom': '50px'

        })
    }
    if (scrolled <= clientHeightForButton) {
        btnBackElem.css({
            'transition': '0.5s',
            'bottom': '-70px'

        })
    }
    if (scrolled >= clientHeightForEmployee) {
        empBackgroundElem.css({
            'opacity': '1',
            'left': '0px',
            'transition': 'all 0.5s'
        });
        empAboutBoxElem.css({
            'opacity': '1',
            'right': '0px',
            'transition': 'all 0.5s'
        });
    }
    if (scrolled >= clientHeightForFoodHeader) {
        foodFeaturedElem.css({
            'opacity': '1',
            'padding-top': '0%',
            'transition': 'all 0.5s',

        });
    }
    if (scrolled >= clientHeightForFoodBox) {
        foodsBoxElem.css({
            'transition': '0.5s',
            'bottom': '0px',
            'top': '220px'

        });
    }
    if (scrolled >= 1900) {
        menuHeaderElem.css({
            'opacity': '1',
            'padding-top': '10%',
            'transition': 'all 0.5s'

        });
    }
    if (scrolled >= 2000) {
        menuContent.css({
            'height': '800px',
        });
    }
    if (scrolled > clientHeightForGallaryTop) {
        gallaryTopElem.css({
            'opacity': '1',
            'top': '0px',
            'transition': 'all 1s'
        });
    }
    if (scrolled > clientHeightForGallaryBottom) {
        gallaryBottomElem.css({
            'opacity': '1',
            'top': '0px',
            'transition': 'all 1s'
        });
    }
    if (scrolled > clientHeightForSliderHeader) {
        sliderHeader.css({
            'opacity': '1',
            'padding-top': '10%',
            'transition': 'all 0.5s'
        });
    }
    if (scrolled > clientHeightForSliderWrapper) {
        sliderWrapper.css({
            'opacity': '1',
            'transition': 'all 0.5s'
        });
    }
}

/* -- H E A D E R -- */

let headerElem = document.getElementById('header');
let navbarCustomElem = $('.navbar__main');
let navbarBigElem = $('.navbar__big');
let logoElem = $('.navbar__pesto-logo');
let navbarNavElem = $('.navbar__list-items');
let btnBookNow = $('.navbar__btn');
let navbarItemsElem = $('.navbar__list');
let navbarElem = document.querySelector('.navbar__custom');

let btnNavToggleElem = document.querySelector('.navbar__toggler');
btnNavToggleElem.addEventListener('click', togglerChange);
let flagShow = true; //Текущее положение меню

/* Вывод меню при нажатии на toggle */
function togglerChange() {
    if (flagShow) {
        navbarItemsElem.addClass('show');
        btnNavToggleElem.style.backgroundImage = 'url(./img/png/previous.png)';
        btnNavToggleElem.style.transform = 'rotate(180deg)';
        btnNavToggleElem.style.top = '4px';
        navbarElem.style.position = 'fixed';
        flagShow = false;
    } else {
        navbarItemsElem.removeClass('show');
        btnNavToggleElem.style.backgroundImage = 'url(./img/png/menu.png)';
        btnNavToggleElem.style.transform = 'rotate(0deg)';
        btnNavToggleElem.style.top = '8px';
        navbarElem.style.position = 'absolute';
        flagShow = true;
    }

    /* Скрытие меню при нажатии за его пределами */
    $(document).mouseup(function(e) {
        let $target = $(e.target);
        if ($target.closest(navbarItemsElem).length == 0 && $target.closest(btnNavToggleElem).length == 0) {
            navbarItemsElem.removeClass("show");
            btnNavToggleElem.style.backgroundImage = 'url(./img/png/menu.png)';
            btnNavToggleElem.style.transform = 'rotate(0deg)';
            btnNavToggleElem.style.top = '8px';
            navbarElem.style.position = 'absolute';
            flagShow = true;
        }
    });
}

/* Присваение элементов header переменным */
let btnBackElem = $('#back');
let empBackgroundElem = $('.employee__background');
let empAboutBoxElem = $('.employee__about-box');
let foodFeaturedElem = $('.food__featured');
let gallaryTopElem = $('#gallary__top');
let gallaryBottomElem = $('#gallary__bottom');
let sliderHeader = $('.slider__header');
let sliderWrapper = $('.slider__wrapper');
let footerContainer = $('.footer__container');
let foodsBoxElem = $('.food__box');
let menuContent = $('.container__tabs');
let menuHeaderElem = $('.menu__header');

logoElem.css({
    'transition': ' 0s'
})



//* -- AVAILABILITY -- *//
let initElem, node;
const MSG_NAME = 'Your name',
    MSG_PHONE = 'Your phone number',
    DATE_FORMAT = 'DD/MM/YY';
document.oninput = inPhoneHandler
let flag = true;

/* Обработчик даты */
function inDateHandler() {
    let currentDate = new Date(DATE_FORMAT);
    let inDateElem = document.querySelector('#taskDate');
    inDateElem.value = currentDate;
}

/* Обработка данных введённых в форму секции "availability" */
function inputFocus() {
    const inElems = document.querySelectorAll("input");
    let index, input;
    for (index = 0; index < inElems.length; index++) {
        input = inElems[index];
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }
}

$('.fa-chevron-up').css('display', 'none'); // изначально стрелка вверх должна быть скрыта
$('.fa-chevron-down').click(function() { // выбор количества людей - показать список
    $('.select-list').css('height', '176px');
    $('.fa-chevron-up').css('display', 'initial');
    $('.fa-chevron-down').css('display', 'none');
});

$('.fa-chevron-up').click(function() { // выбор количества людей - свернуть список
    $('.fa-chevron-up').css('display', 'none');
    $('.fa-chevron-down').css('display', 'initial');
    $('.select-list').css('height', '0px');
});

$('.select-list li').click(function() {
    $('.people-default').text($(this).text()); // передаём количество людей из списка в поле .people-default
    $('.fa-chevron-up').css('display', 'none');
    $('.fa-chevron-down').css('display', 'initial');
    $('.select-list').css('height', '0px');
});

/* Убирает ввозможность ввода букв */
function inPhoneHandler() {
    let input = document.querySelector('input.in-phone');
    input.value = input.value.replace(/[^\+\d]/g, '');
}

/* Обработчик ввода данных */
function focusHandler(event) {
    initElem = event.target.value;
    node = event.target.nextElementSibling;
    if (event.target.value == MSG_NAME || event.target.value == MSG_PHONE) {
        event.target.value = '';
        node.style.display = 'block';
        event.target.style.borderBottom = '1px solid #f5543f';
    }

}

/* Обработчик после ввода данных */
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

//* -- M E N U -- *//

/* Контент для заполнения меню */
let tabMenu1 = [{
        cost: '$9.99',
        productName: 'Osso Buco',
        description: 'Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious.',
    },
    {
        cost: '$28.08',
        productName: 'Pappardelle Mimmo',
        description: 'This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.',
    },
    {
        cost: '$12.47',
        productName: 'Trippa Satriano',
        description: 'Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!',
    },
    {
        cost: '$16.36',
        productName: 'Filetto Di Manzo',
        description: 'Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.',
    },
];

let tabMenu2 = [{
        cost: '$20.55',
        productName: 'Tiramisu',
        description: 'A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.',
    },
    {
        cost: '$6.89',
        productName: 'Cannoli',
        description: 'Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.',
    },
    {
        cost: '$5.89',
        productName: 'Pistachio Passion',
        description: 'Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust',
    },
    {
        cost: '$4.89',
        productName: 'Chocolate-and-Pistachio Biscotti',
        description: 'At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.',
    },
];

let tabMenu3 = [{
        cost: '$25.89',
        productName: 'Aperol Spritz',
        description: 'The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!',
    },
    {
        cost: '$16.89',
        productName: 'Negroni',
        description: 'Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.',
    },
    {
        cost: '$17.89',
        productName: 'Negroni Sbagliato',
        description: 'A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.',
    },
    {
        cost: '$18.89',
        productName: 'White Peach Bellini',
        description: 'White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.',
    },
];

/* Теперь код для генерации самого "меню" по клику на кнопки сверху блока tabMenu */
ourMenuBlocksGenerator(tabMenu1, '#menu__header-item1') // формируем контент по умолчанию после загрузки страницы
let tabs1 = document.querySelector('#menu__header-item1');
let tabs2 = document.querySelector('#menu__header-item2');
let tabs3 = document.querySelector('#menu__header-item3');
tabs1.addEventListener('click', () => ourMenuFadeOut(tabMenu1, tabs1));
tabs2.addEventListener('click', () => ourMenuFadeOut(tabMenu2, tabs2));
tabs3.addEventListener('click', () => ourMenuFadeOut(tabMenu3, tabs3));

function ourMenuFadeOut(stock, ident) {
    $('.container__tabs').fadeOut(100);
    setTimeout(() => ourMenuBlocksGenerator(stock, ident), 100);
};
let hTabs = document.querySelector('h3');

hTabs.addEventListener('mouseover', mouseOverLeave);

/* Для того чтобы кнопочки меню белели при наведении и серели обратно когда убрали курсор */
function mouseOverLeave() {
    if (this.style.color == '#808080') {
        this.addEventListener('mouseleave',
            () => this.style.color = '#808080');
        this.addEventListener('mousedown',
            () => this.addEventListener('mouseleave',
                () => this.style.color = '#ffffff'));
    }

}

function ourMenuBlocksGenerator(stock, ident) { // первый параметр - имя массива, второй - id кнопки навигации секции ourMenu
    $('.container__tabs').html(''); // очищаем поле под новую генерацию
    $('.menu__header-list').children().css('color', '#808080'); // обнуляем цвета нажатых ранее элементов меню
    $(ident).css('color', '#ffffff'); // меняем цвет нажатого элемента меню

    for (i = 0; i < stock.length; i++) { // генерируем блоки текста

        let newMenuElem = $('<div>');
        newMenuElem.addClass('menu__box');

        let cost = $('<p>');
        cost.addClass('cost');
        cost.text(stock[i].cost);

        let productName = $('<h4>');
        productName.addClass('product-name');
        productName.text(stock[i].productName);

        let description = $('<p>');
        description.addClass('description');
        description.text(stock[i].description);

        newMenuElem.append(cost);
        newMenuElem.append(productName);
        newMenuElem.append(description);

        $('.container__tabs').append(newMenuElem);
    };
    $('.container__tabs').fadeIn(100);
};

//* -- G A L L A R Y -- *//

/* МАССИВ КАРТИНОК ДЛЯ ГАЛЕРЕИ */
var imageData = [{
        id: 1,
        alt: 'image #1',
        url: './img/jpg/gallery-masonry-1-640x429.jpg'
    },
    {
        id: 2,
        alt: 'image #2',
        url: './img/jpg/gallery-masonry-2-640x429.jpg'
    },
    {
        id: 3,
        alt: 'image #3',
        url: './img/jpg/gallery-masonry-3-640x429.jpg'
    },
    {
        id: 4,
        alt: 'image #4',
        url: './img/jpg/gallery-masonry-4-960x429.jpg',
        url_lite: './img/jpg/gallery-masonry-4-2-640x429.jpg',
    },
    {
        id: 5,
        alt: 'image #5',
        url: './img/jpg/gallery-masonry-5-960x429.jpg',
        url_lite: './img/jpg/gallery-masonry-5-2-640x429.jpg',
    },
    {
        id: 6,
        alt: 'image #4-2',
        url: './img/jpg/gallery-masonry-4-2-640x429.jpg',
    },
    {
        id: 7,
        alt: 'image #5-2',
        url: './img/jpg/gallery-masonry-5-2-640x429.jpg'
    }
]

//* -- G A L L A R Y  P R E V I E W -- *//

let btnExit = document.querySelector('.btn__exit'); //кнопка выхода из просмотра галереи
let galleryPreview = document.getElementById('gallery-preview'); //окно просмотра галереи
let sliderPreview = document.querySelector('.slider-preview'); //окно для загрузки изображений
let btnPrev = document.querySelector('.btn__prev'); //кнопка переключения на следующие изображение
let btnNext = document.querySelector('.btn__next'); //кнопка переключения на предыдущие изображение
let imgElem; //элемент изображения
let count_img; //номер изображения
let item; //текущий пункт
const max_img = 5; //максимальное кол-во изображений
const min_img = 1; //минимальное кол-во изображений
let btnZoomIn = document.querySelector('.btn__zoom-in'); //кнопка увеличения изображения
let btnZoomOut = document.querySelector('.btn__zoom-out'); //кнопка уменьшения изображения
let curImgElem; //текущий элемент изображения
let curUpValue; //текущая кратность увелечения изображения 
const upMinValue = 1.3; //минимальная кратность увелечения изображения 
const upMaxValue = 2; //максимальная кратность увелечения изображения 
const max_num = 6; // макс. кол-во увеличений
const min_num = 1 // мин. кол-во увелечений
let num = 1; //счётчик кол-во увелечений
let curImgWidth; //текущая ширина изображения

let currentZoomElem = document.querySelector('.item__zoom-in');
currentZoomElem.addEventListener('click', itemZoomClick)

/* Обработчик клика на елементы zoom, для вызова представления */
function itemZoomClick() {
    let zoomInElement = document.querySelectorAll('.item__zoom-in');
    let index, itemZoom;
    for (index = 0; index < zoomInElement.length; index++) {
        itemZoom = zoomInElement[index];
        itemZoom.addEventListener('click', creatingView)

    }
}

btnPrev.addEventListener('click', previousView)
btnNext.addEventListener('click', nextView);
btnExit.addEventListener('click', exitView);

function creatingView() {

    count_img = $(this).attr("id");
    item = imageData.find(item => item.id === +count_img);

    if (count_img == min_img) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'block';
    }

    if (count_img == max_img) {
        btnNext.style.display = 'none';
    } else {
        btnNext.style.display = 'block';
    }

    imgElem = document.createElement('img');
    imgElem.setAttribute('id', count_img);
    imgElem.classList.add('image-preview');

    imageReplacement(imgElem, item);
    sliderPreview.appendChild(imgElem);

    galleryPreview.style.visibility = 'visible';
    headerElem.style.visibility = 'hidden';
    document.body.style.overflow = 'hidden';

    $('.label-count').text(`${ count_img } / ${ max_img }`);

    $('#back').css({
        'display': 'none'
    })
}
/* Замена изображения */
function imageReplacement(curElem, curItem) {
    if ((curItem.id == 4) || (curItem.id == 5)) {
        curElem.setAttribute('src', curItem.url_lite);
        console.log('SRC1 ', curElem.getAttribute('src'));
    } else {
        curElem.setAttribute('src', curItem.url);
        console.log('SRC2 ', curElem.getAttribute('src'));
    }
}

/* Переключение на предыдущее изображение */
function previousView() {

    num = min_num;

    btnZoomIn.removeAttribute('disabled');
    btnZoomOut.removeAttribute('disabled');

    $('.btn__zoom-in:hover').css({
        opacity: 1
    })

    $('.btn__zoom-out:hover').css({
        opacity: 1
    })

    let currentImg = document.querySelector('.image-preview');
    currentImg.remove();

    if (count_img <= max_img) {
        count_img--;
        $('.label-count').text(`${ count_img } / ${ max_img }`);
        if (count_img == min_img) {
            btnPrev.style.display = 'none';
        }

        item = imageData.find(item => item.id === count_img);

        imgElem = document.createElement('img');
        imgElem.setAttribute('id', count_img);
        imgElem.classList.add('image-preview');
        imageReplacement(imgElem, item);
        sliderPreview.appendChild(imgElem);

        btnNext.style.display = 'block';
    }
}

/* Переключение на следующие изображение */
function nextView() {

    num = min_num;

    btnZoomIn.removeAttribute('disabled');
    btnZoomOut.removeAttribute('disabled');

    $('.btn__zoom-in:hover').css({
        opacity: 1
    })

    $('.btn__zoom-out:hover').css({
        opacity: 1
    })

    let currentImg = document.querySelector('.image-preview');
    currentImg.remove();

    if (count_img >= min_img) {
        count_img++;
        $('.label-count').text(`${ count_img } / ${ max_img }`);
        if (count_img == max_img) {
            btnNext.style.display = 'none';
        }
        item = imageData.find(item => item.id === count_img);

        imgElem = document.createElement('img');
        imgElem.setAttribute('id', count_img);
        imgElem.classList.add('image-preview');
        imageReplacement(imgElem, item);
        sliderPreview.appendChild(imgElem);

        btnPrev.style.display = 'block';
    }
}

/* Выход из просмотра галереи */
function exitView() {

    num = min_num;

    let currentImg = document.querySelector('.image-preview');

    currentImg.remove();

    galleryPreview.style.visibility = 'hidden';
    headerElem.style.visibility = 'visible';
    document.body.style.overflow = 'visible';

    $('#back').css({
        'display': 'block'
    })

    btnZoomIn.removeAttribute('disabled');
    btnZoomOut.removeAttribute('disabled');

    $('.btn__zoom-in:hover').css({
        opacity: 1
    })

    $('.btn__zoom-out:hover').css({
        opacity: 1
    })
}

btnZoomIn.addEventListener('click', zoomIncrease);
btnZoomOut.addEventListener('click', zoomDecrease);

/* Увелечение изображения */
function zoomIncrease() {
    curImgElem = document.querySelector('.image-preview')
    btnZoomOut.removeAttribute('disabled');

    curImgWidth = curImgElem.offsetWidth;
    console.log('num_min1 ', num);
    if (num < max_num) {
        if (num == min_num) {
            curUpValue = upMaxValue;
        } else {
            curUpValue = upMinValue;
        }
        curImgElem.style.width = (+curImgWidth * curUpValue) + 'px';
        num++;
    } else if (num == max_num) {
        btnZoomIn.setAttribute('disabled', true);
    }
    console.log('num_min2 ', num);
}

/* Уменьшение изображения */
function zoomDecrease() {
    btnZoomIn.removeAttribute('disabled');
    curImgElem = document.querySelector('.image-preview')
    curImgWidth = curImgElem.offsetWidth;
    console.log('num_max1 ', num);
    if (num > min_num) {
        if (num == (min_num + 1)) {
            curUpValue = upMaxValue;
        } else {
            curUpValue = upMinValue;
        }
        curImgElem.style.width = (+curImgWidth / curUpValue) + 'px'
        num--;
    }

    if (num == min_num) {
        btnZoomOut.setAttribute('disabled', true);
    }
    console.log('num_max2 ', num);
}

//* -- S L I D E R -- *//

/* Контент для наполения слайдера */
let contentForSlider = [{
        data: 'JUL 02, 2019',
        header: 'Genuine Italian Pizza: Authenticity and Choice',
        content: 'As an Italian restaurant, we are very proud of our delicious authentic pizzas. Our three most popular choices are the Rustica, the Toscana and...',
        link: 'none',
    },
    {
        data: 'JUL 12, 2019',
        header: 'Italian vs. American Spaghetti: Top 5 Differences',
        content: 'Commonly, when we hear there is spaghetti for dinner we will be expecting a red tomato sauce with meat and seasonings poured over long...',
        link: 'none',
    },
    {
        data: 'AUG 02, 2019',
        header: 'The Delicious History of Lasagna and Its Origins',
        content: 'Lasagna, could there be a more perfect dish? It’s comfort food on steroids. Layers of cheese generously piled on top of decadent amounts...',
        link: 'none',
    },
    {
        data: 'AUG 15, 2019',
        header: 'Making Gelato Like a True Italian: Tips From Our Chef',
        content: 'Most would agree that gelato is the most delicious frozen dessert; the perfect ending to any meal. With origins in Sicily, gelato has been made famous...',
        link: 'none',
    },
    {
        data: 'SEP 15, 2019',
        header: 'Italian Ingredients You Can Easily Grow at Home',
        content: 'Imagine preparing an Italian dinner but having to stop cooking because you forget an ingredient and must run to the store. How nice would it be to go...',
        link: 'none',
    },
    {
        data: 'SEP 28, 2019',
        header: 'Our Brief Guide to Pairing Wine and Pasta the Right Way',
        content: 'To Italians, pasta is the food of the gods, and there is nothing better to go with a good pasta than a perfect wine. To the uninitiated, finding the right...',
        link: 'none',
    },
    {
        data: 'OCT 05, 2019',
        header: 'Top 10 Famous Spring Dishes in Italian Restaurants',
        content: 'As an Italian restaurant, we proud of delicious authentic pizzas. Our three most popular choices are the Rustica, the Toscana and...',
        link: 'none',
    },
    {
        data: 'OCT 17, 2019',
        header: 'What Makes Some Seasonings Truly Italian?',
        content: 'Commonly, when we hear there is spaghetti for dinner we will be expecting a red tomato sauce with meat and seasonings poured over long...',
        link: 'none',
    },
    {
        data: 'NOV 10, 2019',
        header: 'Types of Italian Sausage and Why They Are Different',
        content: 'Lasagna, could there be a more perfect dish? It’s comfort food on steroids. Layers of cheese generously piled on top of decadent amounts...',
        link: 'none',
    },

];

var slideNow = 0; //текущий слайд
var slideCount; //количество слайдов
var slideInterval = 3000; //значение интервала, означающее через какое время перемещать слайд
var navBtnId; //текущий nav__btn_slide
var translateWidth = 0; //велечина перемещения слайда
let sliderWrap = document.querySelector('.slider__wrapper');
let navBtns = document.querySelector('.nav__btns');
let navBtnSlide = document.querySelector('.btn-slide');
let switchInterval = setInterval(showSlides, slideInterval); //запуск автоматического перемещения слайда
function moveTheSlide() {

    $('.btn-slide').click(function() {
        navBtnId = $(this).index();
        currentSlide(navBtnId);
        clearInterval(switchInterval);
    });
}

/* Создание слайда */
function createSlides() {
    clearSliderContent(sliderWrap, navBtns);
    contentForSlider.forEach(function(index, elem) {
        let docWidth = document.documentElement.clientWidth;

        if ((docWidth < 980) && (docWidth > 767) && (elem < 5)) {
            createNavBtn(elem);
            sliderWrap.style.width = 'calc(100%*5)';

            let slideElem = document.createElement('li');
            slideElem.classList.add('slide');
            slideElem.style.width = 'calc(100%/5)';

            let slideBoxElem = document.createElement('div');
            slideBoxElem.classList.add('slide__box');

            let i;
            let n;
            //Изменение значений n и i для правильного заполнения контентом слайдера
            if (elem < 1) {
                i = 0;
                n = 2;
            } else if (elem == 1) {
                i = 2;
                n = 4;
            } else if (elem == 2) {
                i = 4;
                n = 6;
            } else if (elem == 3) {
                i = 6;
                n = 8;
            } else if (elem == 4) {
                i = 8;
                n = 9;
            }

            for (; i < n; i++) {
                createBoxNews(contentForSlider[i], slideBoxElem);
            }

            slideElem.appendChild(slideBoxElem);
            sliderWrap.appendChild(slideElem);

        } else if ((docWidth < 767) && (elem < 9)) {
            createNavBtn(elem);
            sliderWrap.style.width = 'calc(100%*9)';

            let slideElem = document.createElement('li');
            slideElem.classList.add('slide');
            slideElem.style.width = 'calc(100%/9)';

            let slideBoxElem = document.createElement('div');
            slideBoxElem.classList.add('slide__box');

            createBoxNews(index, slideBoxElem);

            slideElem.appendChild(slideBoxElem);
            sliderWrap.appendChild(slideElem);

        } else if ((docWidth >= 980) && (elem < 3)) {
            createNavBtn(elem);
            sliderWrap.style.width = 'calc(100%*3)';

            let slideElem = document.createElement('li');
            slideElem.classList.add('slide');
            slideElem.style.width = 'calc(100%/3)';

            let slideBoxElem = document.createElement('div');
            slideBoxElem.classList.add('slide__box');

            let i;
            let n;
            //Изменение значений n и i для правильного заполнения контентом слайдера
            if (elem < 1) {
                i = 0;
                n = 3;
            } else if (elem == 1) {
                i = 3;
                n = 6;
            } else if (elem == 2) {
                i = 6;
                n = 9;
            }

            for (; i < n; i++) {
                createBoxNews(contentForSlider[i], slideBoxElem);
            }

            slideElem.appendChild(slideBoxElem);
            sliderWrap.appendChild(slideElem);
        }
    })
}
var elem = document.querySelector('.slider__wrapper');

/* Очистка слайдера */
function clearSliderContent(slCont, btnCont) {
    while (slCont.firstChild) {
        slCont.removeChild(slCont.firstChild);
        btnCont.removeChild(btnCont.firstChild);
    }
}

/* Создание новостной колонки */
function createBoxNews(index, slideBoxElem) {
    let boxNewsElem = document.createElement('div');
    boxNewsElem.classList.add('slide__box-news');

    let newsDateElem = document.createElement('div');
    newsDateElem.classList.add('slide__box-date');
    let a1Elem = document.createElement('a');
    let h4Elem = document.createElement('h4');
    let a2Elem = document.createElement('a');
    let pElem = document.createElement('p');
    let linkElem = document.createElement('div');
    linkElem.classList.add('read-more');
    let a3Elem = document.createElement('a');
    let arrowElem = document.createElement('span');
    arrowElem.classList.add('arrow-right')

    a1Elem.innerText = index.data;
    a2Elem.innerText = index.header;
    pElem.innerText = index.content;
    a3Elem.innerText = 'Read more';
    a1Elem.setAttribute('href', '#')

    newsDateElem.appendChild(a1Elem);
    h4Elem.appendChild(a2Elem);
    a3Elem.appendChild(arrowElem);
    linkElem.appendChild(a3Elem);
    boxNewsElem.appendChild(newsDateElem);
    boxNewsElem.appendChild(h4Elem);
    boxNewsElem.appendChild(pElem);
    boxNewsElem.appendChild(linkElem);
    slideBoxElem.appendChild(boxNewsElem);
}

function createNavBtn(elem) {
    let navBtnSlide = document.createElement('li');
    navBtnSlide.classList.add('btn-slide');
    navBtnSlide.setAttribute('id', elem);

    navBtns.appendChild(navBtnSlide);

}

/* ПЕРЕМЕЩЕНИЕ СЛАЙДА */

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideNow = n);
}

function showSlides(n) {
    if (n == undefined) {
        n = slideNow;
    }
    $('.btn-slide').css({
        'background-color': '#c4c4c4', //white
        'transition': '0.5s'
    });


    $('.btn-slide').each(function(index, elem) {
        if (index == n) {
            $(this).css({
                'background-color': '#409c4f', //green
                'transition': '0.5s'
            });
        }
    })

    slideCount = $('.slider__wrapper').children().length;

    if (slideNow == slideCount) {
        $('.slider__wrapper').css('transform', 'translate(0, 0)');

        slideNow = 0;

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

//* -- F O O T E R -- *//

/* Установка текущего года для footer */
function setFooterDate() {
    document.querySelector(".currentFooterDate").innerHTML = new Date().getFullYear();
}