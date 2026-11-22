export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const RESULT = "RESULT";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY }
};

export const result = () => {
  return { type: RESULT }
};

export const memory_add = () => {
  return { type: MEMORY_ADD }
};

export const memory_recall = () => {
  return { type: MEMORY_RECALL }
};

export const memory_clear = () => {
  return { type: MEMORY_CLEAR }
};
