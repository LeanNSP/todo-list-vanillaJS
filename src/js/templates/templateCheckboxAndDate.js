'use strict';

const templateCheckboxAndDate = (date, isChecked) => {
  const checked = isChecked ? 'checked' : '';

  return `<div>
            <label class="task__container-checkbox">
                <input class="task__checkbox" type="checkbox" ${checked}>
                <span class="task__custom-checkbox"></span>
            </label>
            <span class="task__date">${date}</span>
        </div>`;
};

export default templateCheckboxAndDate;
