import { CHANGE_FIELD } from '../constants/ActionType'
  
export function changeField(new_str_location) {

  return {
      type: CHANGE_FIELD,
      str_location: new_str_location
    };
  }