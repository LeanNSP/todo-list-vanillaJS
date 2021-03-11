'use strict';

const getButtonAction = target => {
  const { tagName } = target;
  let currentButton;

  if (tagName === 'use') {
    currentButton = target.parentNode.parentNode;
    return currentButton.dataset.action;
  }

  if (tagName === 'svg') {
    currentButton = target.parentNode;
    return currentButton.dataset.action;
  }
};

export default getButtonAction;
