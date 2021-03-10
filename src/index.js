'use strict';

import { refs } from './js/helpers/refs';

import controller from './js/controller';

import './sass/main.scss';

const { addButtonTop, addButton, todoList } = refs;
const { renderStatement, renderToDoList, addTask, onClickToDoList } = controller;

// TODO:
renderStatement();

renderToDoList();

addButtonTop.addEventListener('click', addTask);
addButton.addEventListener('click', addTask);

todoList.addEventListener('click', ({ target }) => onClickToDoList(target));
