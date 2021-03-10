'use strict';

import { refs } from './js/helpers/refs';

import controller from './js/controller';

import './sass/main.scss';

const { addButtonTop, addButton } = refs;
const { renderStatement, renderToDoList, addTask } = controller;

// TODO:
renderStatement();
renderToDoList();

addButtonTop.addEventListener('click', addTask);
addButton.addEventListener('click', addTask);
