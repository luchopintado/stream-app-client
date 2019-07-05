import { FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            const arrayToObject = {};
            if (Array.isArray(action.payload)) {
                action.payload.forEach(obj => arrayToObject[obj.id] = obj);
            }
            return {
                ...state,
                ...arrayToObject,
            };
        case FETCH_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        case CREATE_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case EDIT_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_STREAM:
            const newState = Object.keys(state).reduce((obj, key) => {
                if (key !== action.payload) {
                    obj[key] = state[key];
                }
                return obj;
            }, {});

            return newState;
        default:
            return state;
    }
};
