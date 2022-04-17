export const taskName = 'Shelter. Desktop';

export const crossCheckCriteria = [
  {
    type: 'title',
    title:
      'Уважаемые проверяющие.\nПроверяются только требования, указанные в критериях.\nЕсли какой-то момент в критериях не описан, его не проверяем и не оцениваем.',
  },
  {
    type: 'title',
    title:
      'Работа проверяется в браузере Google Chrome последней версии на ширине экрана 1280px. Если экран меньше, можно сделать масштабирование, а можно поставить на странице ширину 1280px и смотреть со включенной горизонтальной полосой прокрутки. Если экран шире, можно поставить область уже или сузить окно. При наличии вертикального скролла, в некоторых случаях, ширина может не совпадать с той, что показывает значение в панели разработчика (смещение может быть до 17px). При проверке учитывайте этот нюанс, и убедитесь, что ширина задана верно.',
  },
  {
    type: 'title',
    title:
      'Все сомнения трактуются на пользу студента\n Если сомневаетесь отнимать баллы или нет, - не отнимайте',
  },
  {
    type: 'title',
    title:
      'Будьте внимательны: балл не может опуститься ниже 0 за страницу\n Каждый несет личную ответственность за то, как он проверяет работы в ходе cross-check',
  },
  {
    type: 'title',
    title:
      'Если вы отмечаете, что какой-то блок отсутствует - НЕ НУЖНО вычитать баллы еще и за элементы, входящие в этот блок',
  },
  {
    type: 'title',
    title:
      'Страница main',
    ident: 'страница-main'
  },
  {
    type: 'subtask',
    text: 'Создана страница main',
    max: 60,
  },
  {
    type: 'title',
    title:
      'Обеспечение общих требований для блоков страницы main (отмечаются при отсутствии подобных требований в самих требованиях рассматриваемых блоков)',
  },
  {
    type: 'title',
    title:
      'Отступы от границ элементов (или наборов элементов) до краев блока, по горизонтали или вертикали, отличаются более чем на 20px у блока:',
  },
  {
    type: 'penalty',
    text: 'Страница main: Header',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Not only',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: About',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Our Friends',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Help',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: In addition',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Footer',
    max: -1,
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Отступы внутри набора или сетки между элементами, по горизонтали или вертикали, отличаются более чем на 10px в блоках:',
  },
  {
    type: 'penalty',
    text: 'Страница main: Header',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Not only',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: About',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Our Friends',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Help',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: In addition',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Footer',
    max: -1,
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Цвет фона блока или цвет элемента отличается от дизайна (не касается положения градиента или растянутого изображения) в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница main: Header',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Not only',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: About',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Our Friends',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Help',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: In addition',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Footer',
    max: -1,
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Отсутствует элемент или картинка, как фоновая, так и картинка элемента, в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница main: Header',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Not only',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: About',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Our Friends',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Help',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: In addition',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Footer',
    max: -1,
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Шрифт или семейство шрифтов не подключено, или разница в размере шрифта более чем 4px, в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница main: Header',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Not only',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: About',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Our Friends',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Help',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: In addition',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Страница main: Footer',
    max: -1,
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок Header страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока Header',
    max: -10,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет логотипа',
    max: -2,
    parentPens: [49],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет панели навигации',
    max: -5,
    parentPens: [49],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Панель навигации есть, но не интерактивная',
    max: -1,
    parentPens: [49, 51],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент About the shelter не подсвечен',
    max: -1,
    parentPens: [49, 51],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент Our pets не работает как ссылка на страницу our pets',
    max: -1,
    parentPens: [49, 51],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент Help the shelter не работает как якорная ссылка на блок Help',
    max: -1,
    parentPens: [49, 51],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент Contacts не работает как якорная ссылка на блок Footer',
    max: -1,
    parentPens: [49, 51],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'На странице нет элемента <h1>',
    max: -2,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент <h1> есть, но в количестве больше одного',
    max: -1,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Фон сильно отличается от того, что на макете (не имеется ввиду смещенная картинка или градиент)',
    max: -1,
    parentPens: [49],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок Not Only страницы main',
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет блока Not only',
    max: -5,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет кнопки Make a Friend',
    max: -2,
    parentPens: [61],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кнопка Make a Friend есть, но не интерактивная, или не работает как якорная ссылка на блок Our Friends',
    max: -1,
    parentPens: [61, 62],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Фон сильно отличается от того, что на макете (не имеется ввиду смещенная картинка или градиент)',
    max: -1,
    parentPens: [61],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет картинки собаки',
    max: -2,
    parentPens: [61],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Картинка собаки есть, но сильно смещена, или накладывается на текст или другие блоки',
    max: -1,
    parentPens: [61, 65],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок About страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока About',
    max: -5,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет картинки кошки и собаки',
    max: -2,
    parentPens: [68],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Картинка кошки и собаки есть, но сильно смещена, или накладывается на текст или другие блоки',
    max: -1,
    parentPens: [68, 69],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Текст заголовка имеет неверные размеры',
    max: -2,
    parentPens: [68],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кавычки имеют неправильный вид',
    max: -1,
    parentPens: [68],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок Our Friends страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока Our Friends',
    max: -20,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет кнопки "влево"',
    max: -2,
    parentPens: [74],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кнопка "влево" есть, но не интерактивная',
    max: -1,
    parentPens: [74, 75],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет кнопки "вправо"',
    max: -2,
    parentPens: [74],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кнопка "вправо" есть, но не интерактивная',
    max: -1,
    parentPens: [74, 77],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет карточек с питомцами',
    max: -10,
    parentPens: [74],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но сеточная структура элементов нарушена',
    max: -2,
    parentPens: [74, 79],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но количество карточек не соответствует макету',
    max: -2,
    parentPens: [74, 79],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но структура карточек нарушена (например текст или кнопка сверху над картинкой)',
    max: -2,
    parentPens: [74, 79],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Карточки не интерактивные',
    max: -2,
    parentPens: [74, 79],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кнопки Learn more не меняют цвет при наведении на карточку',
    max: -2,
    parentPens: [74, 79],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет кнопки Get to know the rest',
    max: -2,
    parentPens: [74],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Кнопка Get to know the rest есть, но не интерактивная, или не работает как ссылка на страницу our pets',
    max: -1,
    parentPens: [74, 85],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок Help страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока Help',
    max: -5,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Сеточная структура элементов нарушена (не 5 элементов сверху, 4 снизу)',
    max: -2,
    parentPens: [88],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Изображение одной или более иконок отсутствуют',
    max: -2,
    parentPens: [88],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нарушена структура (например текст сверху, иконка снизу) в одном или более элементе',
    max: -1,
    parentPens: [88],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок In addition страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока In addition',
    max: -5,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет блока со ссылкой на банковский счет',
    max: -2,
    parentPens: [93],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Блок со ссылкой на банковский счет есть, но он не интерактивный, или не является ссылкой',
    max: -1,
    parentPens: [93, 94],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет картинки собаки',
    max: -2,
    parentPens: [93],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Картинка собаки есть, но сильно смещена, или накладывается на текст или другие блоки',
    max: -1,
    parentPens: [93, 96],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Блок Footer страницы main',
  },
  {
    type: 'penalty',
    text: 'Нет блока Footer',
    max: -10,
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Сеточная структура элементов нарушена',
    max: -2,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент email не работает как ссылка на почтовый сервис',
    max: -2,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Элемент телефон не работает как ссылка на сервис звонков',
    max: -2,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Хотя бы один элемент "локация" не работает как ссылка на google maps',
    max: -1,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Нет картинки собаки',
    max: -2,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Картинка собаки есть, но сильно смещена, или накладывается на текст или другие блоки',
    max: -1,
    parentPens: [99, 104],
    parentPage: 6
  },
  {
    type: 'penalty',
    text: 'Фон сильно отличается от того, что на макете (не имеется ввиду смещенная картинка или градиент)',
    max: -1,
    parentPens: [99],
    parentPage: 6
  },
  {
    type: 'title',
    title:
      'Страница our pets',
    ident: 'страница-our-pets'
  },
  {
    type: 'subtask',
    text: 'Создана страница our pets',
    max: 40,
  },
  {
    type: 'title',
    title:
      'Обеспечение общих требований для блоков страницы our pets',
  },
  {
    type: 'title',
    title:
      'Отступы от границ элементов (или наборов элементов) до краев блока, по горизонтали или вертикали, отличаются более чем на 20px у блока:',
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Header',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Our Friends',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Footer',
    max: -1,
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Отступы внутри набора или сетки между элементами, по горизонтали или вертикали, отличаются более чем на 10px в блоках:',
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Header',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Our Friends',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Footer',
    max: -1,
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Цвет фона блока или элемента отличается от дизайна (не касается положения градиента или растянутого изображения) в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Header',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Our Friends',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Footer',
    max: -1,
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Отсутствует элемент или картинка, как фоновая, так и картинка элемента, в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Header',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Our Friends',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Footer',
    max: -1,
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Шрифт или семейство шрифтов не подключено, или разница в размере шрифта более чем 4px, в блоках (если подобное требование не отмечено в блоке):',
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Header',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Our Friends',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Страница our pets: Footer',
    max: -1,
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Блок Header страницы our pets',
  },
  {
    type: 'penalty',
    text: 'Нет блока Header',
    max: -10,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Нет логотипа',
    max: -2,
    parentPens: [131],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Логотип есть, но не работает как ссылка на страницу main',
    max: -1,
    parentPens: [131, 132],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Нет панели навигации',
    max: -5,
    parentPens: [131],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Панель навигации есть, но не интерактивная',
    max: -1,
    parentPens: [131, 134],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент About the shelter не работает как ссылка на страницу main',
    max: -1,
    parentPens: [131, 134],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент Our pets не подсвечен',
    max: -1,
    parentPens: [131, 134],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент Help the shelter не работает как якорная ссылка на блок Help страницы main',
    max: -1,
    parentPens: [131, 134],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент Contacts не работает как якорная ссылка на блок Footer',
    max: -1,
    parentPens: [131, 134],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'На странице нет элемента <h1>',
    max: -2,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент <h1> есть, но в количестве больше одного',
    max: -1,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Фон сильно отличается от того, что на макете (не имеется ввиду смещенная картинка или градиент)',
    max: -1,
    parentPens: [131],
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Блок Our Friends страницы our pets',
  },
  {
    type: 'penalty',
    text: 'Нет блока Our Friends',
    max: -20,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Нет кнопок пагинации',
    max: -10,
    parentPens: [144],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кнопки пагинации есть, но все кнопки одного цвета или фона',
    max: -2,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кнопки пагинации есть, но расположены в неверной последовательности',
    max: -2,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кнопки пагинации есть, но кнопки "влево" интерактивные',
    max: -1,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кнопки пагинации есть, но кнопки "вправо" не интерактивные',
    max: -1,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'На кружочке страницы в пагинации нет цифры, или там не единица',
    max: -1,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кружочек страницы в пагинации интерактивный',
    max: -1,
    parentPens: [144, 145],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Нет карточек с питомцами',
    max: -10,
    parentPens: [144],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но сеточная структура элементов нарушена',
    max: -2,
    parentPens: [144, 152],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но количество карточек не соответствует макету',
    max: -2,
    parentPens: [144, 152],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Карточки есть, но структура карточек нарушена (например текст или кнопка сверху над картинкой)',
    max: -2,
    parentPens: [144, 152],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Карточки не интерактивные',
    max: -2,
    parentPens: [144, 152],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Кнопки Learn more не меняют цвет при наведении на карточку',
    max: -2,
    parentPens: [144, 152],
    parentPage: 108
  },
  {
    type: 'title',
    title:
      'Блок Footer страницы our pets',
  },
  {
    type: 'penalty',
    text: 'Нет блока Footer',
    max: -10,
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Сеточная структура элементов нарушена',
    max: -2,
    parentPens: [159],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент email не работает как ссылка на почтовый сервис',
    max: -2,
    parentPens: [159],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Элемент телефон не работает как ссылка на сервис звонков',
    max: -2,
    parentPens: [159],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Хотя бы один элемент "локация" не работает как ссылка на google maps',
    max: -1,
    parentPens: [159],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Нет картинки собаки',
    max: -2,
    parentPens: [159],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Картинка собаки есть, но сильно смещена, или накладывается на текст или другие блоки',
    max: -1,
    parentPens: [159, 164],
    parentPage: 108
  },
  {
    type: 'penalty',
    text: 'Фон сильно отличается от того, что на макете (не имеется ввиду смещенная картинка или градиент)',
    max: -1,
    parentPens: [159],
    parentPage: 108
  },









  
  
  
];