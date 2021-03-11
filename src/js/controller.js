'use strict';

import model from './model';
import view from './view';

import { createTask, currentToDo, isNotSaved } from './services';

import { taskButtonsClickHandler, checkboxClickHandler } from './handlers';

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

    view.renderCounters();
  },

  addTask() {
    const tasks = model.getTasks();

    const newTask = createTask(tasks);

    model.addTask(newTask);

    view.renderTask(newTask);

    view.renderCounters();

    controller.renderStatement();
  },

  onClickToDoList(target) {
    if (isNotSaved(target)) {
      return;
    }

    currentToDo.setIdAndRefs(target);

    if (currentToDo.isEmpty()) {
      return;
    }

    checkboxClickHandler(target);

    taskButtonsClickHandler(target);
  },

  calcCounters() {
    const tasks = model.getTasks();

    const scope = tasks.length;
    const successful = tasks.filter(task => task.isChecked).length;
    const active = scope - successful;

    return { scope, successful, active };
  },
};

export default controller;
