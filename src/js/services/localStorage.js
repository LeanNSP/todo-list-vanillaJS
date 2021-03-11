'use strict';

const localStorage = {
  getTasks() {
    try {
      return JSON.parse(window.localStorage.getItem('tasks'));
    } catch (error) {
      alert("Your browser don't support Local Storage!");
    }
  },

  saveTasks(tasks) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

export default localStorage;
