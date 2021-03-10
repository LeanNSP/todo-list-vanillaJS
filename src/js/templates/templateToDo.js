'use strict';

import { icons } from '../helpers/icons';

const templateToDo = task => {
  const { id, date, describtion, isChecked } = task;
  const { edit, save, remove } = icons;

  const taskChecked = isChecked ? 'checked' : '';
  const classChecked = isChecked ? 'task__description--checked' : '';

  return `<li class="todo-list__item" id=${id}>
            <div class="task__control">
                <div>
                    <label class="task__container-checkbox">
                        <input class="task__checkbox" type="checkbox" ${taskChecked}>
                        <span class="task__custom-checkbox"></span>
                    </label>
                    <span class="task__date">${date}</span>
                </div>
                <div>
                    <button class="task__edit" type="button" data-action="edit">
                        ${edit}
                        ${save}
                    </button>
                    <button class="task__remove" type="button" data-action="remove">
                        ${remove}
                    </button>
                </div>
            </div>
            <p class="task__description ${classChecked}">${describtion}</p>
        </li>`;
};

export default templateToDo;
