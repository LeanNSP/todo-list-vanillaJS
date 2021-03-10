'use strict';

import model from '../model';
import view from '../view';

import currentToDo from '../services/currentToDo';

const checkboxClickHandler = target => {
  if (target.tagName !== 'INPUT') {
    return;
  }

  const id = currentToDo.getId();
  const description = currentToDo.getDescription();

  model.updateChecked(id);

  view.onChecked(description);

  view.renderCounters();
};

export default checkboxClickHandler;
