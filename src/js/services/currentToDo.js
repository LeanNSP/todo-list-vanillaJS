'use strict';

import getRefCurrentToDo from './getRefCurrentToDo';

const INIT_REFS = {
  toDo: null,
  buttonEdit: null,
  iconEdit: null,
  iconSave: null,
  description: null,
};

const currentToDo = {
  id: null,
  refs: { ...INIT_REFS },

  setIdAndRefs(target) {
    const toDo = getRefCurrentToDo(target);

    if (toDo) {
      this.id = parseInt(toDo.id);
      this.refs.toDo = toDo;
      this.refs.buttonEdit = toDo.querySelector('.task__edit');
      this.refs.iconEdit = toDo.querySelector('svg[data-action="edit"]');
      this.refs.iconSave = toDo.querySelector('svg[data-action="save"]');
      this.refs.description = toDo.querySelector('.task__description');
    } else {
      this.id = null;
      this.refs = { ...INIT_REFS };
    }
  },

  getId() {
    return this.id;
  },

  getRefs() {
    return this.refs;
  },

  getToDo() {
    return this.refs.toDo;
  },

  getDescription() {
    return this.refs.description;
  },

  isEmpty() {
    return !Boolean(this.id);
  },
};

export default currentToDo;
