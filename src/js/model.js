'use strict';

const model = {
  tasks: [],

  getTasks() {
    return this.tasks;
  },

  addTask(task) {
    this.tasks = [...this.tasks, task];
  },
};

export default model;
