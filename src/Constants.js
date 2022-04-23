export const taskName = 'Shelter. DOM';

export const crossCheckCriteria = [

  {
    type: 'title',
    title:
      'Burger menu на Main Page & Pets Page',
    ident: 'burger'
  },
  {
    type: 'subtask',
    text: 'При ширине страницы width < 768px реализовано бургер-меню на обеих страницах\n(Если бургер-меню реализовано только на одной странице или не реализовано совсем - баллы за этот пункт не выставляются, требования к реализации бургер-меню не проверяются)',
    max: 20,
  },
  {
    type: 'title',
    title:
      'Бургер-меню на каждой странице должно удовлетворять следующим требованиям:\n - Бургер-меню присутствует на странице только при width < 768px.\n - При нажатии на бургер-меню, с правой стороны выезжает блок шириной 320px и высотой на всю высоту экрана, в котором вертикально расположены и центрированы элементы меню. Выезд сверху, а не справа, ошибкой не считается, но в таком случае заезжать меню тоже должно вверх, а не вправо.\n - При открытии бургер-меню плавно выезжает из-за правой (или верхней) границы экрана (slide-in).\n - При открытии бургер-меню иконка меню плавно поворачивается на 90 градусов (rotate).\n - После открытия бургер-меню вертикальный скролл основной страницы становится неактивным. В самом меню может быть активный скролл, если все пункты меню не вмещаются по высоте окна браузера.\n - В элементах меню действуют те же правила активности и неактивности, как и в меню на большей ширине экрана.\n - Область, выступающая за 320px, затемнена.\n - При нажатии вне границ меню на затемненную область или на кнопку с иконкой меню, бургер-меню заезжает обратно.\n - При закрытии бургер-меню плавно заезжает за правую (или верхнюю) границу экрана (slide-out).\n - При закрытии бургер-меню иконка меню плавно поворачивается обратно на 90 градусов (rotate).\n - После закрытия бургер-меню вертикальный скролл вновь становится активным.\n - При нажатии на "About the shelter" (на странице main) или "Our pets" (на странице our pets) страница оказывается в начальном положении, меню закрывается.\n - При нажатии на "About the shelter" (на странице our pets) или "Our pets" (на странице main) происходит переход на соответствующую страницу.\n - При нажатии на "Help" страница прокручивается к блоку help с последующим закрытием меню (со страницы main), или перебрасывает нас к блоку help страницы main (со страницы our pets)\n - При нажатии на "Contacts" страница прокручивается к блоку Footer, меню закрывается.\n\nЗа каждое нарушение указанных требований снимается -3 балла, но не более -20.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Burger menu требований',
    max: 20,
    parentPage: 1,
  },
  {
    type: 'title',
    title:
      'Popup на Main Page & Pets Page',
    ident: 'popup'
  },
  {
    type: 'subtask',
    text: 'Попап реализован на обеих страницах\n(Если попап реализован только на одной странице или не реализован совсем - баллы за этот пункт не выставляются, требования к реализации попап не проверяются)',
    max: 15,
  },
  {
    type: 'title',
    title:
      'Попап на каждой странице должен удовлетворять следующим требованиям:\n - При нажатии на любое место карточки (блока) с описанием конкретного питомца появляется попап, его контент без учета крестика в правом верхнем углу центрируется по ширине и высоте экрана.\n - Остальная часть страницы вне попапа затемняется.\n - После открытия попапа вертикальный скролл становится неактивным. Однако, скролл может быть в самом попапе, если по высоте он больше, чем окно браузера.\n - При нажатии на окно (блок) попапа ничего не происходит.\n - При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии hover, кнопка получает эффект наведения. Другими словами: кнопка интерактивная.\n - При нажатии вне границ попапа на затемненную область или на кнопку с крестиком, попап и затемнение исчезают.\n - После закрытия вертикальный скролл вновь становится активным.\n - Картинка питомца присутствует при 768px <= width и отсутствует при 768px > width.\n\nЗа каждое нарушение указанных требований снимается -3 балла, но не более -15.\n\n❗Обратите внимание: Анимация всплытия и скрытия попапа желательна, но не обязательна. Отсутствие анимации - это не ошибка, баллы за ее отсутствие не снижаются!',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Popup требований',
    max: 15,
    parentPage: 5,
  },
  {
    type: 'title',
    title:
      'Carousel на Main Page',
    ident: 'carousel'
  },
  {
    type: 'subtask',
    text: 'При нажатии кнопок влево или вправо происходит перелистывание слайдов\n(Если при нажатии на кнопки влево или вправо слайды не меняются - баллы за этот пункт не выставляются, требования к реализации карусели не проверяются)',
    max: 25,
  },
  {
    type: 'title',
    title:
      'Карусель должна удовлетворять следующим требованиям:\n - При нажатии на стрелки происходит переход к новому блоку элементов.\n - Смена блоков происходит с анимацией карусели. Время анимации и тайминг функция значения не имеют.\n - Карусель бесконечна, не имеет границ, т.е. можно нажимать влево и вправо сколько угодно раз, и каждый раз контент в блоках будет новый.\n - Каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\n    - в текущем блоке слайда карточки с питомцами не повторяются.\n    - в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде.\n - Производится три проверки на трех разных значениях ширины окна браузера, с перезагрузкой страницы после установки ширины:\n    - при 1280px <= width в блоке слайда 3 карточки питомцев. При нажатии на стрелку все 3 карточки заменяются на новые.\n    - при 768px <= width < 1280px в блоке слайда 2 карточки питомцев. При нажатии на стрелку обе карточки заменяются на новые.\n    - при width < 768px в блоке слайда 1 карточка питомца. При нажатии на стрелку карточка меняется на новую.\n\nЗа каждое нарушение указанных требований (как пунктов, так и подпунктов) снимается -5 баллов, но не более -25.',
    
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Carousel требований',
    max: 25,
    parentPage: 9,
  },
  {
    type: 'title',
    title:
      'Pagination на Pets Page',
    ident: 'pagination'
  },
  {
    type: 'subtask',
    text: 'При нажатии кнопок влево или вправо происходит перелистывание страниц с карточками животных\n(Если при нажатии на кнопки влево или вправо страницы не меняются - баллы за этот пункт не выставляются, требования к реализации пагинации не проверяются)',
    max: 40,
  },
  {
    type: 'title',
    title:
      'Пагинация должна удовлетворять следующим требованиям:\n - При переключении страниц данные меняются (при 1280px <= width карточки питомцев меняют свой порядок).\n - При каждой загрузке или перезагрузке страницы Our Pets в браузере всегда активной является первая страница.\n - Кнопка << всегда открывает первую страницу.\n - Кнопка < открывает предыдущую до текущей страницы.\n - Кнопка > открывает следующую после текущей страницы.\n - Кнопка >> всегда открывает последнюю страницу.\n - В кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный.\n - При открытии первой страницы кнопки << и < неактивны.\n - При открытии последней страницы кнопки > и >> неактивны.\n - Каждая новая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\n   - При неизменных размерах области пагинации, в том числе размерах окна браузера, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы.\n   - При загрузке Our Pets формируется массив из 48 объектов питомцев. Каждый из 8 приведенных на макете питомцев должен встречаться ровно 6 раз.\n   - При каждой загрузке набор элементов, отображенных на странице пагинации, должен формироваться случайно. Для этого делаем перезагрузку вкладки браузера 4 или более раза, и смотрим, чтобы порядок карточек питомцев в пагинации менялся. При этом, если есть вопросы при переходе между media query, то перезагрузку можно делать на уже измененном размере экрана.\n   - Каждые 8, каждые 6, и каждые 3 карточки питомцев не должны повторяться. Т.е. на одной странице пагинации не может быть одновременно два одинаковых питомца.\n - Производится три проверки на трех разных значениях ширины окна браузера, с перезагрузкой страницы после установки ширины:\n   - При 1280px <= width на странице одновременно показаны 8 неповторяющихся карточек питомцев, а самих страниц - 6. Т.е. при нажатии >> открывается шестая страница.\n   - При 768px <= width < 1280px на странице одновременно показаны 6 неповторяющихся карточек питомцев, а самих страниц - 8. Т.е. при нажатии >> открывается восьмая страница.\n   - При width < 768px на странице одновременно показаны 3 неповторяющиеся карточки питомцев, а самих страниц - 16. Т.е. при нажатии >> открывается шестнадцатая страница.\n\nЗа каждое нарушение указанных требований (как пунктов, так и подпунктов) снимается -5 баллов, но не более -40.\n\n❗Обратите внимание: Эффекты переключения страниц пагинации могут быть, а могут и не быть. Отсутствие эффектов не является ошибкой, баллы за их отсутствие не снижаются!',
    
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Pagination требований',
    max: 40,
    parentPage: 13,
  },





  


];