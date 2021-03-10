'use strict';

import model from './model';
import view from './view';

import createTask from './services/createTask';
import getRefCurrentToDo from './services/getRefCurrentToDo';

import templateToDo from './templates/templateToDo';

const controller = {
  renderStatement() {
    const tasks = model.getTasks();

    if (tasks.length <= 1) {
      const hideStatement = Boolean(tasks.length);

      view.renderStatement(hideStatement);
    }
  },

  renderToDoList() {
    const tasks = model.getTasks();

    const list = new DocumentFragment();

    tasks.map(task => {
      list.prepend(templateToDo(task));
    });

    view.renderToDoList(list);
  },

  addTask() {
    const tasks = model.getTasks();
    const newTask = createTask(tasks);

    model.addTask(newTask);

    view.renderTask(newTask);

    controller.renderStatement();
  },

  onClickToDoList(target) {
    // TODO:refactoring!
    const { tagName } = target;
    let currentButton;
    let action;

    if (tagName === 'use') {
      currentButton = target.parentNode.parentNode;
      action = currentButton.dataset.action;
    }

    if (tagName === 'svg') {
      currentButton = target.parentNode;
      action = currentButton.dataset.action;
    }

    if (action === 'remove') {
      const refCurrentToDo = getRefCurrentToDo(target);
      const id = parseInt(refCurrentToDo.id);

      model.removeTask(id);

      view.removeToDo(refCurrentToDo);

      controller.renderStatement();
    }
  },
};

export default controller;
