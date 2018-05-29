
import { createAction } from 'redux-actions';

// Types

export const TEXT_QUERY_START = "text/TEXT_QUERY_START";
export const TEXT_QUERY_END = "text/TEXT_QUERY_END";

export const TEXT = "text/TEXT";
export const TEXT_SUCCESS = "text/TEXT_SUCCESS";
export const TEXT_FAILED = "text/TEXT_FAILED";

export const TEXT_OP_CLEAR = "text/TEXT_OP_CLEAR";


export default {

  queryStart: createAction(TEXT_QUERY_START),
  queryEnd: createAction(TEXT_QUERY_END),

  getText: createAction(TEXT),
  getTextSuccess: createAction(TEXT_SUCCESS),
  getTextFailed: createAction(TEXT_FAILED),

  clearOp: createAction(TEXT_OP_CLEAR)
}
