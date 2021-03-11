'use strict';

const getRefCurrentToDo = target => {
  let element = target;

  while (element.tagName) {
    if (element.tagName === 'LI') {
      return element;
    }

    element = element.parentNode;
  }
};

export default getRefCurrentToDo;
