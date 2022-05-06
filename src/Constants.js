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
    text: 'the generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag)',
    max: 20,
  },
  {
    type: 'subtask',
    text: 'pressing a key on a physical keyboard highlights the key on the virtual keyboard (you should check keystrokes of numbers, letters, punctuation marks, backspace, del (if it\'s present), enter, shift, alt, ctrl, tab, caps lock, space, arrow keys',
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
    text: 'switching keyboard layouts between English and another language is implemented. Selected language should be saved and used on page reload. A keyboard shortcut for switching a language should be specified on the page',
    max: 15,
  },
  {
    type: 'subtask',
    text: 'mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field (text area)',
    max: 15,
  },
  {
    type: 'title',
    title:
      'Extra scope',
    ident: 'basic'
  },
  {
    type: 'subtask',
    text: 'animation of pressing a key is implemented',
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
    text: 'usage of ES6+ features (classes, property destructuring, etc)',
    max: 15,
  },
  {
    type: 'subtask',
    text: 'usage of ESLint',
    max: 10,
  },
  {
    type: 'subtask',
    text: 'requirements to the repository, commits and pull request are met',
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
    text: 'there\'re errors related to the executable code (errors like favicon.ico: Failed to load resource: the server responded with a status of 404 are not taken into account) or there\'re eslint-config-airbnb-base warnings',
    max: 15,
  },
];