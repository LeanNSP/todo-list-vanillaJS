'use strict';

import controller from '../../controller';
import model from '../../model';
import view from '../../view';

import currentToDo from '../../services/currentToDo';

const taskButtonsOperations = {
  removeTask: () => {
    const id = currentToDo.getId();
    const toDo = currentToDo.getToDo();

    model.removeTask(id);

    view.removeToDo(toDo);

    view.renderCounters();

    controller.renderStatement();
  },

  editTaskDescription: () => {
    view.editToDo();
  },

  saveTaskDescription: () => {
    const id = currentToDo.getId();
    const description = currentToDo.getDescription();
    const newDescription = description.textContent;

    model.updateDescription(id, newDescription);

    view.saveToDo();
  },
};

export default taskButtonsOperations;
