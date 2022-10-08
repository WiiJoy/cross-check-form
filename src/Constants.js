export const taskName = 'online-zoo. week-2';

export const crossCheckCriteria = [

  {
    type: 'title',
    title:
      'Страница Landing',
    ident: 'landing'
  },
  {
    type: 'subtask',
    text: 'Страница Landing ведет себя адаптивно при изменении размера (меняет дизайн и расположение элементов)',
    max: 60,
  },
  {
    type: 'title',
    title:
      'Выставляем Landing на 1000px. Смотрим отличия (> 10px) и снимаем баллы (но не более -30), если нарушены следующие пункты:\n - Отступы между элментами меню в хедере: -5.\n - Расположение элементов в блоке Watch your favorite animal online: -5.\n - Расположение элементов в блоке The Backstage: -5.\n - ❗ Не пропало растение в блоке The Backstage: -5. Растение может исчезнуть резко, может плавно уходить за край экрана.\n - Расположение или отступы между карточками животных в блоке Pets: -5. При этом последовательность (очередность) карточек не учитваем.\n - Расположение или отступы между кнопками вправо/влево в блоке Pets: -5.\n - Расположение или вид растений справа или слева в блоке Pets: -5.\n - Количество, расположение или отступы между отзывами в блоке Testimonials: -5. При этом то, какой именно текст в отзывах - не учитваем.\n - Расположение кнопки leave feedback в блоке Testimonials: -5.\n - Расположение или вид растения справа в блоке Testimonials: -5.\n - Отступы между иконками и именами соцсетей в футере: -5.\n - Отступы между элментами меню в футере: -5.\n❗Расположение элементов внутри формы Subscribe to our news в футере и расположение кнопки donate for volunteers здесь НЕ ОЦЕНИВАЕТСЯ! Отступ от края в 43px, а не 30px - не считаем ошибкой.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Landing на 1000px требований',
    max: 30,
    parentPage: 1,
  },
  {
    type: 'title',
    title:
      'Выставляем Landing на 640px. Смотрим отличия (> 10px) и снимаем баллы (но не более -30), если нарушены следующие пункты:\n - Меню не преобразовано в бургер меню в хедере: -5.\n - ❗ Хедер не стал фиксированным: -10.\n - Расположение элементов в блоке Watch your favorite animal online: -5.\n - Расположение элементов в блоке The Backstage: -5.\n - ❗ Не появилось растение в блоке The Backstage: -5. Растение может появиться резко, может плавно выходить из-за края экрана.\n - Количество, расположение или отступы между карточками животных в блоке Pets: -5.\n - Расположение или отступы между кнопками вправо/влево в блоке Pets: -5.\n - Вид растений справа или слева в блоке Pets: -5.\n - Расположение элементов в блоке Pick and feed a friend: -5.\n - ❗ Вид стрелок в блоке Pick and feed a friend: -5.\n - Вид, расположение или отступы между отзывами в блоке Testimonials: -5.\n - Расположение кнопки leave feedback в блоке Testimonials: -5.\n - Вид растения справа в блоке Testimonials: -5.\n - ❗ Не пропала форма Subscribe to our news в футере: -5. Она должна скрыться\n - Расположение кнопки donate for volunteers в футере: -5.\n - Расположение или отступы между иконками соцсетей в футере: -5.\n - ❗ Если рядом с иконками соцсетей будут видны имена, это не ошибка, баллы не снимаем.\n - Отступы между элментами меню в футере: -5.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Landing на 640px требований',
    max: 30,
    parentPage: 1,
  },
  {
    type: 'title',
    title:
      'Выставляем Landing на 320px. Смотрим отличия (> 10px) и снимаем баллы, если нарушены следующие пункты:\n - Нет бургер меню в хедере: -5. При этом, оно может быть неактивным.\n - Расположение элементов в блоке Watch your favorite animal online: -5.\n - Расположение элементов в блоке The Backstage: -5.\n - ❗ Точность расположения растения в блоке The Backstage не оцениваем, и баллы за то, что его нет, не снимаем. Однако, если растение наезжает на текст: -5.\n - Количество, расположение или отступы между карточками животных в блоке Pets: -5.\n - ❗ Расположение элементов в блоке Pets не оцениваем. На дизайне шириной 320px была допущена ошибка с отступами, и если колонка с карточками будет не центрирована, а отстоять от края на 10px - это не ошибка, баллы не снимаем.\n - ❗ Не пропали кнопки вправо/влево в блоке Pets: -5.\n - Вид растений справа или слева в блоке Pets: -5.\n - Расположение элементов в блоке Pick and feed a friend: -5.\n - Вид стрелок в блоке Pick and feed a friend: -5.\n - Расположение или отступы между отзывами в блоке Testimonials: -5.\n - Расположение кнопки leave feedback в блоке Testimonials: -5.\n - Расположение или вид растения справа в блоке Testimonials: -5.\n - Расположение или вид основного логотипа в футере: -5.\n - Расположение или отступы между иконками соцсетей в футере: -5.\n - Расположение кнопки donate for volunteers в футере: -5.\n - Отступы между элментами меню в футере: -5.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Landing на 320px требований',
    max: 30,
    parentPage: 1,
  },
  {
    type: 'title',
    title:
      'Проверяем на резиновый дизайн (Responsive):Пошагово выполняем следующие действия:\nРастягиваем страницу на ширину больше 1600px, либо уменьшаем масштаб.\n 1. Изменяем ширину страницы до размеров от 1599px до 1001px.\n 2. Изменяем ширину страницы до размеров от 999px до 641px.\n 3. Изменяем ширину страницы до размеров от 639px до 321px.\n 4. Меньше 320px - не смотрим!\nИ оцениваем:\n - В какой-либо момент сужения до 338px появляется горизонтальная полоса прокрутки: -30 единожды.\n - При проверке граничных значений, отсуствует хотя бы один элемент, помимо указанных или фоновых элементов, или есть лишний: -5 единожды за каждый промежуток.\n - Есть элементы, помимо указанных или фоновых элементов, которые обрезаются или выходят за край экрана, хотя в дизайне они вписаны в границы: -5 единожды за каждый промежуток.\n - В какой-либо момент элементы, кроме указанных или фоновых элементов, наезжают на другие элементы, хотя во всех дизайнах между ними есть отступ: -5 единожды за каждый промежуток.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Landing требований резинового дизайна (Responsive)',
    max: 30,
    parentPage: 1,
  },

  {
    type: 'title',
    title:
      'Страница Donate',
    ident: 'donate'
  },
  {
    type: 'subtask',
    text: 'Страница Donate ведет себя адаптивно при изменении размера (меняет дизайн и расположение элементов)',
    max: 40,
  },
  {
    type: 'title',
    title:
      'Выставляем Donate на 1000px. Смотрим отличия (> 10px) и снимаем баллы (но не более -20), если нарушены следующие пункты:\n - Отступы между элментами меню в хедере: -5.\n - Расположение элементов в блоке Pick and feed a friend: -5.\n - Расположение поля Another amount: -5.\n - Расположение элементов внутри формы Subscribe to our news в футере: -5.\n - Расположение кнопки donate for volunteers в футере: -5.\n - Отступы между иконками и именами соцсетей в футере: -5.\n - Отступы между элментами меню в футере: -5.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Donate на 1000px требований',
    max: 20,
    parentPage: 11,
  },
  {
    type: 'title',
    title:
      'Выставляем Donate на 640px. Смотрим отличия (> 10px) и снимаем баллы (но не более -20), если нарушены следующие пункты:\n - Меню не преобразовано в бургер меню в хедере: -5.\n - ❗ Хедер не стал фиксированным: -10.\n - Расположение элементов в блоке Pick and feed a friend: -5.\n - ❗ Не пропала форма Subscribe to our news в футере: -5. Она должна скрыться\n - Расположение кнопки donate for volunteers в футере: -5.\n - Расположение или отступы между иконками соцсетей в футере: -5.\n - Отступы между элментами меню в футере: -5.\n - ❗ Если рядом с иконками соцсетей будут видны имена, это не ошибка, БАЛЛЫ НЕ СНИМАЕМ.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Donate на 640px требований',
    max: 20,
    parentPage: 11,
  },
  {
    type: 'title',
    title:
      'Выставляем Donate на 320px. Смотрим отличия (> 10px) и снимаем баллы (но не более -20), если нарушены следующие пункты:\n - Нет бургер меню в хедере: -5. При этом, оно может быть неактивным.\n - Расположение элементов в блоке Pick and feed a friend: -5.\n - Вид или расположение основного логотипа в футере: -5.\n - Расположение или отступы между иконками соцсетей в футере: -5.\n - Расположение кнопки donate for volunteers в футере: -5.\n - Отступы между элментами меню в футере: -5.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Donate на 320px требований',
    max: 20,
    parentPage: 11,
  },
  {
    type: 'title',
    title:
      'Проверяем на резиновый дизайн (Responsive):Пошагово выполняем следующие действия:\nРастягиваем страницу на ширину больше 1600px, либо уменьшаем масштаб.\n 1. Изменяем ширину страницы до размеров от 1599px до 1001px.\n 2. Изменяем ширину страницы до размеров от 999px до 641px.\n 3. Изменяем ширину страницы до размеров от 639px до 321px.\n 4. Меньше 320px - не смотрим!\nИ оцениваем:\n - В какой-либо момент сужения до 338px появляется горизонтальная полоса прокрутки: -20 единожды.\n - При проверке граничных значений, отсуствует хотя бы один элемент, помимо указанных или фоновых элементов, или есть лишний: -5 единожды за каждый промежуток.\n - Есть элементы, помимо указанных или фоновых элементов, которые обрезаются или выходят за край экрана, хотя в дизайне они вписаны в границы: -5 единожды за каждый промежуток.\n - В какой-либо момент элементы, кроме указанных или фоновых элементов, наезжают на другие элементы, хотя во всех дизайнах между ними есть отступ: -5 единожды за каждый промежуток.',
  },
  {
    type: 'penalty',
    text: 'Проверка выполнения указанных для Donate требований резинового дизайна (Responsive)',
    max: 20,
    parentPage: 11,
  },

];