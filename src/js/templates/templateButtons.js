'use strict';

import { icons } from '../helpers/icons';

const templateButtons = () => {
  const { edit, save, remove } = icons;

  return `<div>
            <button class="task__edit" type="button" data-action="edit">
                ${edit}
                ${save}
            </button>
            <button class="task__remove" type="button" data-action="remove">
                ${remove}
            </button>
        </div>`;
};

export default templateButtons;
