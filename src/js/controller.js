'use strict';

import model from './model';
import view from './view';

import createTask from './services/createTask';

const controller = {
  addTask() {
    //TODO:
    const tasks = model.getTasks();
    const newTask = createTask(tasks);

    model.addTask(newTask);

    view.renderTask(newTask);
  },
};

export default controller;
