export const taskName = 'Virtual Keyboard';

export const crossCheckCriteria = [

  {
    type: 'title',
    title:
      'Minimal scope',
    ident: 'minimal'
  },
  {
    type: 'subtask',
    text: 'body в index.html пустой, DOM-элементы генерируются из js\n(допускается наличие тега script внутри body)',
    max: 20,
  },
  {
    type: 'subtask',
    text: 'Нажатие клавиши на физической клавиатуре выделяют соответствующие клавиши на виртуальной.\nПроверяются нажатия букв, цифр, знаков препинания, backspace, del (если есть), enter, shift, alt, ctrl, caps lock, space, стрелки',
    max: 10,
  },
  {
    type: 'title',
    title:
      'Basic scope',
    ident: 'basic'
  },
  {
    type: 'subtask',
    text: 'Реализовано переключение виртуальной клавиатуры между английским и другим языком. Выбранный язык сохраняется после перезагрузки страницы. На странице указана комбинация клавиш для смены языка',
    max: 15,
  },
  {
    type: 'subtask',
    text: 'В поле ввода (текстовое поле) вводятся символы при клике мышью по кнопкам виртуальной клавиатуры и при нажатии кнопок на физической клавиатуре',
    max: 15,
  },
  {
    type: 'title',
    title:
      'Extra scope',
    ident: 'extra'
  },
  {
    type: 'subtask',
    text: 'Реализована анимация нажатия кнопок виртуальной клавиатуры',
    max: 15,
  },
  {
    type: 'title',
    title:
      'Technical requirements',
    ident: 'technical'
  },
  {
    type: 'subtask',
    text: 'В исходниках js используются функции ES6+ (classes, property destructuring, etc)',
    max: 15,
  },
  {
    type: 'subtask',
    text: 'Используется ESLint',
    max: 10,
  },
  {
    type: 'subtask',
    text: 'Выполнены все требования к репозиторию:\n - работа выполнена в личном репозитории;\n - исходный код находится в отдельной ветке;\n - основная ветка (master/main) пустая, или содержит только файлы README.md и/или .gitignore\n - наименования коммитов выполнены согласно рекомендациям (содержат префиксы init, feat и т.д.)\n - Pull Request из ветки разработки в основную ветку (master/main) открыт и выполнен по установленной форме\n - Pull Request и, соответственно, ветка разработки не содержит закомментированного кода, автоматически сгенерированных файлов и папок сборки (в тч папки dist) или вашей операционной системы',
    max: 10,
  },
  {
    type: 'title',
    title:
      'Penalties',
    ident: 'penalties'
  },
  {
    type: 'penalty',
    text: 'Присутствуют ошибки, связанные с исполняемым кодом (ошибки типа "favicon.ico: Failed to load resource: the server responded with a status of 404" или "Error with Permissions-Policy header: Origin trial controlled not enabled: interest-cohort" не учитываются), или ошибки и предупреждения при выполнении проверки eslint.\nПроверка линтером осуществляется следующим образом:\n1. Репозиторий проверяемой работы клонируется к себе на компьютер.\n2. В редакторе кода открывается директория склонированного репозитория, выполняется переключение на ветку разработки\n3. Выполняется установка зависимостей командой npm -i\n4. Выполняется запуск проверки линтером соответствующей командой.\nОшибки типа "Expected linebreaks to be LF but found CRLF linebreak-style" не учитываются',
    max: 15,
  },
];