'use strict';

import { localStorage } from './services';

const model = {
  tasks: localStorage.getTasks() || [],

  getTasks() {
    return this.tasks;
  },

  addTask(task) {
    this.tasks = [...this.tasks, task];

    localStorage.saveTasks(this.tasks);
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);

    localStorage.saveTasks(this.tasks);
  },

  updateChecked(id) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });

    localStorage.saveTasks(this.tasks);
  },

  updateDescription(id, newDescription) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.describtion = newDescription;
      }
      return task;
    });

    localStorage.saveTasks(this.tasks);
  },
};

export default model;
