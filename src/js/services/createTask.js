'use strict';

import { TO_DO_PLACEHOLDER } from '../helpers/variables';

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
    describtion: TO_DO_PLACEHOLDER,
    isChecked: false,
  };
};

export default createTask;
