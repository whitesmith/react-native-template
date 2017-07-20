import {
  TEMPLATE_TYPE,
} from './types';

export const templateAction = (templatePayload) => {
  return ({
    type: TEMPLATE_TYPE,
    payload: templatePayload
  });
};
