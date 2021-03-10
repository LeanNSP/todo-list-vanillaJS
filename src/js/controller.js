'use strict';

import model from './model';
import view from './view';

import createTask from './services/createTask';

import templateToDo from './templates/templateToDo';

const controller = {
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
  },
};

export default controller;
