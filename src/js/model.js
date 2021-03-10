'use strict';

import localStorage from './services/localStorage';

const model = {
  tasks: localStorage.getTasks() || [],

  getTasks() {
    return this.tasks;
  },

  addTask(task) {
    this.tasks = [...this.tasks, task];

    localStorage.saveTasks(this.tasks);
  },
};

export default model;
