'use strict';

import { getButtonAction, taskButtonsReducer } from './taskButtons';

const taskButtonsClickHandler = target => {
  const action = getButtonAction(target);

  taskButtonsReducer(action);
};

export default taskButtonsClickHandler;
