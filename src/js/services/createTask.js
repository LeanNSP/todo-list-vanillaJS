'use strict';

const idGenerator = tasks => {
  if (!tasks.length) {
    return 1;
  }

  const lastId = tasks[tasks.length - 1].id;

  return lastId + 1;
};

const createTask = tasks => {
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };

  return {
    id: idGenerator(tasks),
    date: date.toLocaleDateString('en-GB', options),
    describtion: 'Click edit and describe your task, please.',
    isChecked: false,
  };
};

export default createTask;
