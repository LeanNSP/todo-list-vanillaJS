'use strict';

import templateCheckboxAndDate from './templateCheckboxAndDate';
import templateButtons from './templateButtons';

const templateToDo = task => {
  const { id, date, describtion, isChecked } = task;

  const checkboxAndDate = templateCheckboxAndDate(date, isChecked);
  const buttons = templateButtons();

  const classChecked = isChecked ? 'task__description--checked' : '';

  return `<li class="todo-list__item" id=${id}>
            <div class="task__control">
                ${checkboxAndDate}
                ${buttons}
            </div>
            <p class="task__description ${classChecked}">${describtion}</p>
        </li>`;
};

export default templateToDo;
