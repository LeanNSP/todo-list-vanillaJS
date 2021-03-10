'use strict';

import { refs } from './helpers/refs';

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

  renderTask(newTask) {
    refs.todoList.insertAdjacentHTML('afterbegin', templateToDo(newTask));
  },

  removeToDo(refToDo) {
    refToDo.remove();
  },

  onChecked(description) {
    description.classList.toggle('task__description--checked');
  },

  //TODO: refactoring!
  editToDo(refCurrentToDo) {
    console.log(refCurrentToDo); //TODO: delete
    const buttonEdit = refCurrentToDo.querySelector('.task__edit');
    const iconEdit = refCurrentToDo.querySelector('svg[data-action="edit"]');
    const iconSave = refCurrentToDo.querySelector('svg[data-action="save"]');
    const description = refCurrentToDo.querySelector('.task__description');

    description.setAttribute('contenteditable', 'true');

    iconEdit.classList.add('hidden');
    iconSave.classList.remove('hidden');

    buttonEdit.dataset.action = 'save';
  },

  //TODO: refactoring!
  saveToDo(refCurrentToDo) {
    const buttonEdit = refCurrentToDo.querySelector('.task__edit');
    const iconEdit = refCurrentToDo.querySelector('svg[data-action="edit"]');
    const iconSave = refCurrentToDo.querySelector('svg[data-action="save"]');
    const description = refCurrentToDo.querySelector('.task__description');

    description.setAttribute('contenteditable', 'false');

    iconSave.classList.add('hidden');
    iconEdit.classList.remove('hidden');

    buttonEdit.dataset.action = 'edit';
  },
};

export default view;
