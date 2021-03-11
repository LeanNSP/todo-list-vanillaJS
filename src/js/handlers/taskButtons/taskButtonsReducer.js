'use strict';

import { taskButtonsOperations } from './';

const taskButtonsReducer = action => {
  const { removeTask, editTaskDescription, saveTaskDescription } = taskButtonsOperations;

  switch (action) {
    case 'remove':
      removeTask();
      break;

    case 'edit':
      editTaskDescription();
      break;

    case 'save':
      saveTaskDescription();
      break;
  }
};

export default taskButtonsReducer;
