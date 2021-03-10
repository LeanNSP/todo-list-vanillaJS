'use strict';

import { refs } from './helpers/refs';

import templateToDo from './templates/templateToDo';

const view = {
  renderToDoList(list) {
    refs.todoList.innerHTML = list.textContent;
  },

  renderTask(newTask) {
    refs.todoList.insertAdjacentHTML('afterbegin', templateToDo(newTask));
  },
};

export default view;
