'use strict';

import { currentToDo, getRefCurrentToDo } from './';

import { getButtonAction, taskButtonsReducer } from '../handlers/taskButtons';

const onCurrentToDo = target => {
  const id = currentToDo.getId();

  const toDo = getRefCurrentToDo(target);

  if (!toDo) {
    return;
  }

  if (parseInt(toDo.id) === id) {
    return true;
  }
};

const onSaveButton = target => {
  const action = getButtonAction(target);

  if (!action) {
    return;
  }

  if (action === 'save') {
    return action;
  }
};

const isNotSaved = target => {
  const description = currentToDo.getDescription();

  if (currentToDo.isEmpty()) {
    return;
  }

  if (!description.onfocus) {
    return;
  }

  if (target.tagName === 'INPUT') {
    target.checked = !target.checked;
  }

  if (onCurrentToDo(target)) {
    const action = onSaveButton(target);

    if (action) {
      taskButtonsReducer(action);
      return true;
    }

    if (description === target) {
      return true;
    }
  }

  alert('You have an unsaved task. Click save, please.');
  return true;
};

export default isNotSaved;
