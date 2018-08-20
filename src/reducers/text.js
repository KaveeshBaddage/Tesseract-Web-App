import {textTypes as types} from './../actions';
import {handleActions} from 'redux-actions';

const initialState = {
	loading: false,
    error: false,
    requestSuccess: false,
    data: null
}

// Reducers from redux-actions
export default handleActions({
    [types.TEXT_QUERY_START]: (state, { payload }) => (
        { ...state, loading: true, error: false, requestSuccess: false}
    ),
    [types.TEXT_QUERY_END]: (state, { payload }) => (
        { ...state, loading: false }
    ),
    [types.TEXT_SUCCESS]: (state, { payload }) => {
        console.log("data is",payload)
        return { ...state, data: payload, error: false, requestSuccess: true }
    },
    [types.TEXT_FAILED]: (state, { payload }) => {
        return { ...state, data: null, error: { ...payload } }
    },
    [types.TEXT_CLEAR]: (state, { payload }) => (
        { ...state,data:null }
    ),
    [types.TEXT_OP_CLEAR]: (state, { payload }) => (
        { ...state, requestSuccess: false }
    ),

}, initialState)