'use strict';

import { refs } from './helpers/refs';

import templateToDo from './templates/templateToDo';

const view = {
  renderTask(newTask) {
    refs.todoList.insertAdjacentHTML('afterbegin', templateToDo(newTask));
  },
};

export default view;
