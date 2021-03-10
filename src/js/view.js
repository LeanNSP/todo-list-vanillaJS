'use strict';

import { refs } from './helpers/refs';

import controller from './controller';

import currentToDo from './services/currentToDo';
import iconsToggle from './services/iconsToggle';

import templateToDo from './templates/templateToDo';

const view = {
  renderStatement(hide) {
    if (hide) {
      refs.statement.classList.add('hidden');
    } else {
      refs.statement.classList.remove('hidden');
    }
  },

  renderToDoList(list) {
    refs.todoList.innerHTML = list.textContent;
  },

  renderCounters() {
    const { scopeCounter, activeCounter, successfulCounter } = refs;

    const { scope, successful, active } = controller.calcCounters();

    scopeCounter.textContent = scope;
    successfulCounter.textContent = successful;
    activeCounter.textContent = active;
  },

  renderTask(newTask) {
    refs.todoList.insertAdjacentHTML('afterbegin', templateToDo(newTask));
  },

  removeToDo(refToDo) {
    refToDo.remove();
  },

  onChecked(description) {
    description.classList.toggle('task__description--checked');
  },

  editToDo() {
    const { buttonEdit, iconEdit, iconSave, description } = currentToDo.getRefs();

    description.setAttribute('contenteditable', 'true');

    iconsToggle(iconEdit, iconSave);

    buttonEdit.dataset.action = 'save';
  },

  saveToDo() {
    const { buttonEdit, iconEdit, iconSave, description } = currentToDo.getRefs();

    description.setAttribute('contenteditable', 'false');

    iconsToggle(iconSave, iconEdit);

    buttonEdit.dataset.action = 'edit';
  },
};

export default view;
