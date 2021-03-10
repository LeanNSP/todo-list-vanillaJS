'use strict';

import model from './model';
import view from './view';

import createTask from './services/createTask';

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
    //TODO:
    const tasks = model.getTasks();
    const newTask = createTask(tasks);

    model.addTask(newTask);

    view.renderTask(newTask);

    controller.renderStatement();
  },
};

export default controller;
