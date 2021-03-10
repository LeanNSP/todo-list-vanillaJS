'use strict';

import { refs } from './js/helpers/refs';

import controller from './js/controller';

import './sass/main.scss';

const { addButtonTop, addButton } = refs;
const { renderToDoList, addTask } = controller;

// TODO:
renderToDoList();

addButtonTop.addEventListener('click', addTask);
addButton.addEventListener('click', addTask);
