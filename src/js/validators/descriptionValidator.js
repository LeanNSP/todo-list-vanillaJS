'use strict';

import { MIN_DESCRIPTION, MAX_DESCRIPTION, LONG_WORD } from '../helpers/config';

const descriptionValidator = newDescription => {
  if (newDescription.length < MIN_DESCRIPTION || newDescription.length > MAX_DESCRIPTION) {
    alert(`The description must be between ${MIN_DESCRIPTION} and ${MAX_DESCRIPTION} symbols`);
    return false;
  }

  const words = newDescription.split(' ');
  const tooLongWord = words.some(word => word.length > LONG_WORD);

  if (tooLongWord) {
    alert(`The maximum word length must be no more than ${LONG_WORD} symbols`);
    return false;
  }
  return true;
};

export default descriptionValidator;
